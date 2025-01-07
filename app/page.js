'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Demo from './components/Demo'
import Slider from './components/Slider'
import LocomotiveScroll from 'locomotive-scroll'
import PricingTable from './components/PricingTable'
import Footer from './components/Footer'
import { ThemeProvider, useTheme } from './contects/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-opacity-20 backdrop-blur-sm"
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

  const bgColor = theme === 'dark' ? 'bg-[#0C0C0C]' : 'bg-white'
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <div ref={scrollRef} className={`w-full ${bgColor} ${textColor} h-full pt-10 transition-colors duration-300`}>
      <Navbar />
      <ThemeToggle />
      <motion.div style={{ scale: heroScale }} className="sticky top-0">
        <Hero />
      </motion.div>
      <Demo />
      <div className={`${bgColor} absolute w-full transition-colors duration-300`}>
        <Slider h1="Faster" />
        <Slider h1="Smarter" />
        <Slider h1="Limitless" />
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
