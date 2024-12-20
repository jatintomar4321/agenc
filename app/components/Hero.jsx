'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const features = [
    {
      id: 'explore',
     
      icon: (
        <svg className="w-full h-full" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.25 39H61.75M61.75 39L39 16.25M61.75 39L39 61.75" stroke="url(#paint0_linear_83_14112)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_83_14112" x1="24.9572" y1="27.7038" x2="57.4576" y2="58.4701" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ED1C24"/>
              <stop offset="0.47" stopColor="#F15A29"/>
              <stop offset="0.95" stopColor="#EC008C"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'make',
      
      icon: (
        <svg className="w-full h-full" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M67.2923 74.375L42.5006 56.6667L17.709 74.375V17.7083C17.709 15.8297 18.4553 14.028 19.7836 12.6997C21.112 11.3713 22.9137 10.625 24.7923 10.625H60.209C62.0876 10.625 63.8893 11.3713 65.2177 12.6997C66.546 14.028 67.2923 15.8297 67.2923 17.7083V74.375Z" stroke="url(#paint0_linear_83_14115)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_83_14115" x1="27.1976" y1="26.6729" x2="70.7456" y2="58.7364" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ED1C24"/>
              <stop offset="0.47" stopColor="#F15A29"/>
              <stop offset="0.95" stopColor="#EC008C"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'brainstorm',
     
      icon: (
        <svg className="w-full h-full" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M74.25 40.5H60.75L50.625 70.875L30.375 10.125L20.25 40.5H6.75" stroke="url(#paint0_linear_83_14125)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_83_14125" x1="19.6673" y1="25.4177" x2="63.0705" y2="71.0704" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ED1C24"/>
              <stop offset="0.47" stopColor="#F15A29"/>
              <stop offset="0.95" stopColor="#EC008C"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'analyse',
      
      icon: (
        <svg className="w-full h-full" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.5007 7.08398V21.2507M42.5007 63.7507V77.9173M17.4611 17.4611L27.484 27.484M57.5173 57.5173L67.5402 67.5402M7.08398 42.5007H21.2507M63.7507 42.5007H77.9173M17.4611 67.5402L27.484 57.5173M57.5173 27.484L67.5402 17.4611" stroke="url(#paint0_linear_83_14120)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_83_14120" x1="20.6392" y1="24.915" x2="71.235" y2="72.8113" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ED1C24"/>
              <stop offset="0.47" stopColor="#F15A29"/>
              <stop offset="0.95" stopColor="#EC008C"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-.5" 
      className="w-full min-h-screen  bg-[#0C0C0C] flex flex-col items-center justify-center text-center px-4 pt-20 lg:pt-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ease = "easeInOutExpo"
    >
      {/* Tagline */}
      <motion.h2
        className="text-white/80 text-lg sm:text-xl md:text-[1.6rem] mb-4 sm:mb-6"
        variants={textVariants}
      >
        Faster. Smarter. Limitless
      </motion.h2>

      {/* Main Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 md:mb-16 max-w-4xl"
        variants={textVariants}
      >
        The new era of{' '}<br/>
        <span className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Brand{' '}
          <motion.span
            initial={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.5)' }}
            animate={{
              textShadow: [
                '0 0 10px rgba(255, 0, 0, 0.5)',
                '0 0 20px rgba(241, 90, 41, 0.6)',
                '0 0 10px rgba(255, 0, 0, 0.5)',
              ],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="bg-gradient-to-r from-[#ED1C24] via-[#F15A29] to-[#EC008C] 
                       text-transparent bg-clip-text"
            style={{
              display: 'inline-block',
              backgroundSize: '200%',
            }}
          >
            Intelligence
          </motion.span>
        </span>
      </motion.h1>

      {/* Feature Icons */}
      <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-10 max-w-xs sm:min-w-2xl md:min-w-5xl  lg:min-w-7xl w-full">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="relative group"
            onMouseEnter={() => setHoveredIcon(feature.id)}
            onMouseLeave={() => setHoveredIcon(null)}
            variants={index < 2 ? iconVariants : { ...iconVariants, hiddenLeft: iconVariants.hiddenRight }}
            initial={index < 2 ? "hiddenLeft" : "hiddenRight"}
            animate="visible"
          >
            <div className={`
              aspect-square w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36
              rounded-xl lg:rounded-2xl flex flex-col items-center justify-center p-2 md:p-4
              transition-all duration-300 ease-in-out
              relative overflow-hidden
              ${hoveredIcon === feature.id ? 'transform scale-105' : ''}
            `}>
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r from-[#ED1C24] via-[#F15A29] to-[#EC008C]" />
              
              {/* Inner Background */}
              <div className="absolute inset-[1px] rounded-xl lg:rounded-2xl bg-[#0F0F0F]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`
                  w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl flex items-center justify-center mb-1 md:mb-3
                  text-white/80 transition-colors duration-300
                  ${hoveredIcon === feature.id ? 'text-red-500' : ''}
                `}>
                  {feature.icon}
                </div>
                <p className="text-white text-[0.5rem] sm:text-xs md:text-sm lg:text-lg font-medium">{feature.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

