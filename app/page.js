"use client"

import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Demo from './components/Demo'
import { useRef,useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'


const page = () => {
    const scrollRef = useRef(null);
  
    useEffect(() => {
      if (scrollRef.current) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });
  
        return () => {
          locomotiveScroll.destroy(); // Clean up on component unmount
        };
      }
    }, []);


  return (
    <div ref={scrollRef} className="w-full  ">
      <Navbar/>
      <Hero/>
      <Demo/>
    </div>
  )
}

export default page