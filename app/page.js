"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Demo from './components/Demo'
import Slider from './components/Slider'

import LocomotiveScroll from 'locomotive-scroll'
import PricingTable from './components/PricingTable'
import Footer from './components/Footer'

const Page = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()
  
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

  return (
    <div ref={scrollRef} className="w-full bg-[#0C0C0C] h-full pt-10">
      <Navbar />
      <motion.div style={{ scale: heroScale }} className='sticky top-0'>
        <Hero />

      </motion.div>
      <Demo />
      <div className='bg-[#0C0C0C] absolute w-full '>
      <Slider h1="Faster"/>
      <Slider h1="Smarter"/>
      <Slider h1="Limitless"/>
      
      <PricingTable/>
      <Footer className=""/>
      </div>


      
    </div>
  )
}

export default Page

