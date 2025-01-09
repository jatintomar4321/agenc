import axios from 'axios'
import { useEffect, useState } from 'react'
export function ContactForm({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const sendOtp = async () => {
    // Simulate sending OTP
    console.log(`Sending OTP to ${email}`)
    // Simulate OTP for demo purposes (in real scenario, this would be generated on the server)
    window.demoOtp = Math.floor(100000 + Math.random() * 900000).toString()
    
    try {
        const response = await axios.post('http://localhost:8000/send-email-agenc', {
        email: email,
        otp: window.demoOtp,
        });
        if (response.status === 200) {
            setIsOtpSent(true)
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  }

  const verifyOtp = () => {
    // In a real application, you would verify the OTP with your backend
    if (otp === window.demoOtp) {
      setIsEmailVerified(true)
      console.log('OTP verified successfully')
    } else {
      console.log('Invalid OTP')
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (!isEmailVerified) {
      console.log('Please verify your email first')
      return
    }
    try {
        const response = await axios.post('http://localhost:8000/send-info', {
        email: email,
        name: name,
        phone: phone
        });
        if (response.status === 200) {
            setIsOtpSent(true)
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
    // Handle form submission here
    console.log({ name, email, phone })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl text-gray-700 font-bold mb-4">Request a Demo</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isEmailVerified}
                  className="block w-full rounded-md bg-white text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            {!isEmailVerified && (
              <div>
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={!email || isOtpSent}
                  className="mt-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] border border-transparent rounded-md shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isOtpSent ? 'OTP Sent' : 'Send OTP'}
                </button>
              </div>
            )}
            {isOtpSent && !isEmailVerified && (
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
                <div className="mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
                  <input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="block w-full rounded-md bg-white text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="mt-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] border border-transparent rounded-md shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Verify OTP
                </button>
              </div>
            )}
            {isEmailVerified && (
              <div className="text-green-600 text-sm">Email verified successfully!</div>
            )}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isEmailVerified}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] border border-transparent rounded-md shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

