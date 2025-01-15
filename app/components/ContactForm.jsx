import axios from "axios";
import { useEffect, useState } from "react";
import { useTheme } from "../contects/ThemeContext";

export function ContactForm({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const sendOtp = async () => {
    console.log(`Sending OTP to ${email}`);
    window.demoOtp = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      const response = await axios.post(
        "https://api.your-agenc.ai/agenc/verify",
        {
          email: email,
          otp: window.demoOtp,
        }
      );
      if (response.status === 200) {
        setIsOtpSent(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-[#1F1F1F]" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";

  const verifyOtp = () => {
    if (otp === window.demoOtp) {
      setIsEmailVerified(true);
      console.log("OTP verified successfully");
    } else {
      console.log("Invalid OTP");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailVerified) {
      console.log("Please verify your email first");
      return;
    }
    try {
      const response = await axios.post(
        "https://api.your-agenc.ai/agenc/send-info",
        {
          email: email,
          name: name,
          phone: phone,
        }
      );
      if (response.status === 200) {
        setIsOtpSent(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log({ name, email, phone });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        className={`${bgColor} ${textColor} rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-md shadow-xl`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] text-transparent bg-clip-text">
          Request a Demo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <div className="mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-md bg-white text-black border-none focus:outline-none focus:ring-2 focus:ring-[#F15A29] focus:ring-opacity-50 px-3 py-2 text-sm sm:text-base"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="flex-grow mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isEmailVerified}
                  className="block w-full rounded-md bg-white text-black border-none focus:outline-none focus:ring-2 focus:ring-[#F15A29] focus:ring-opacity-50 px-3 py-2 text-sm sm:text-base"
                />
              </div>
              {!isEmailVerified && (
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={!email || isOtpSent}
                  className="mt-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F15A29] disabled:opacity-50 w-full sm:w-auto"
                >
                  {isOtpSent ? "OTP Sent" : "Send OTP"}
                </button>
              )}
            </div>
          </div>
          {isOtpSent && !isEmailVerified && (
            <div>
              <label htmlFor="otp" className="block text-sm font-medium mb-1">
                Enter OTP
              </label>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="flex-grow mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
                  <input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="block w-full rounded-md bg-white text-black border-none focus:outline-none focus:ring-2 focus:ring-[#F15A29] focus:ring-opacity-50 px-3 py-2 text-sm sm:text-base"
                  />
                </div>
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="mt-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F15A29] w-full sm:w-auto"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          )}
          {isEmailVerified && (
            <div className="text-green-500 text-sm font-medium">
              Email verified successfully!
            </div>
          )}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <div className="mt-1 bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md p-[2px]">
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="block w-full rounded-md bg-white text-black border-none focus:outline-none focus:ring-2 focus:ring-[#F15A29] focus:ring-opacity-50 px-3 py-2 text-sm sm:text-base"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 sm:py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F15A29] w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isEmailVerified}
              className="px-6 py-2 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] rounded-md shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F15A29] disabled:opacity-50 w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
