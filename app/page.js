"use client"

import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Demo from './components/Demo'
import Slider from './components/Slider'
import Slider2 from './components/Slider2'
import Slider3 from './components/Slider3'
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
    <div ref={scrollRef} className="w-full bg-[#0C0C0C] h-full  ">
      <Navbar/>
      <Hero/>
      <Demo/>
      <Slider/>
      <Slider/>
      <Slider/>
      <Slider2/>

      
    </div>
  )
}

export default page