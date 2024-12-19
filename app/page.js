"use client"

import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Demo from './components/Demo'
import { useRef,useEffect } from 'react'


const page = () => {
  const scrollRef = useRef(null);


  return (
    <div ref={scrollRef} className="w-full min-h-screen ">
      <Navbar/>
      <Hero/>
      <Demo/>
    </div>
  )
}

export default page