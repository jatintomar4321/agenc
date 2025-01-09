'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Demo from './components/Demo'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PricingTable from './components/PricingTable'
import Slider from './components/Slider'
import { ThemeProvider, useTheme } from './contects/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-10 left-4 z-50 p-2 rounded-full bg-opacity-20 backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="text-white" /> : <Moon className="text-black" />}
    </button>
  )
}

const PageContent = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const { theme } = useTheme()
  
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      })

      return () => {
        locomotiveScroll.destroy() // Clean up on component unmount
      }
    }
  }, [])

  const bgColor = theme === 'dark' ? 'bg-[#0C0C0C]' : 'bg-[#F5F5F5]'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <div ref={scrollRef} className={`w-full ${bgColor} ${textColor} h-full pt-10 transition-colors duration-300`}>
      <Navbar />
      <ThemeToggle />
      <motion.div style={{ scale: heroScale }} className="sticky top-5">
        <Hero/>
      </motion.div>
      <motion.div  className='sticky top-10 '>
      <Demo />
      </motion.div>
      

      <div className={`${bgColor} relative w-full transition-colors duration-300`}>
        <Slider h1="Faster" 
      image1="./1.jpg"
      image2="./2.jpg"
      image3="./3.jpg"
      image4="./4.jpg"


              />
        <Slider h1="Smarter" 
                image1="./5.jpg"
      image2="./6.jpg"
      image3="./7.jpg"
      image4="./8.jpg"
        />
        <Slider h1="Limitless" 
                image1="./9.jpg"
      image2="./10.jpg"
      image3="./11.jpg"
      image4="./12.jpg"
        />
        <PricingTable />
        <Footer />
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  )
}

export default Page
