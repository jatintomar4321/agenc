import React from 'react';
import { useState } from 'react'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer className="bg-[#1F1F1F] max-h-[28rem]  text-white py-16  px-4 mx-10 my-10 rounded-[2.5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex  justify-between mx-10">
          {/* First Column */}
          <div className='flex  space-x-20'>
          <div>
            <h3 className="text-lg font-medium mb-6">Lorem ipsum</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
            
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-lg font-medium mb-6">Lorem ipsum</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>

            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h3 className="text-lg font-medium mb-6">Lorem ipsum</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>


              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
            </ul>
          </div>
          </div>

          {/* Fourth Column */}
          <div>
            <h3 className="text-lg font-medium mb-6">Lorem ipsum</h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <button 
            className={`relative group px-6 py-2 rounded-full transition-all duration-300 ease-in-out
                        ${isHovered ? 'shadow-lg transform -translate-y-0.5' : 'shadow-md'}
                        active:shadow-inner active:transform active:translate-y-0 active:scale-95`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Button gradient border */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-pink-500 
                             transition-opacity duration-300 ease-in-out
                             ${isHovered ? 'opacity-100' : 'opacity-80'} -z-10`} />
            <div className={`absolute inset-[1px] rounded-full bg-[#2F2F2F] transition-all duration-300 ease-in-out
                             ${isHovered ? 'opacity-90' : 'opacity-100'} 
                             group-active:opacity-100 group-active:inset-[2px] -z-10`} />
            <span className="text-white text-sm font-medium relative z-10">
              Request a demo
            </span>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] 
                             filter blur-sm transition-opacity duration-300 ease-in-out
                             ${isHovered ? 'opacity-80' : 'opacity-0'} 
                             group-active:opacity-90 group-active:blur-md -z-20`} />
          </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-16" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} <span className="font-medium text-white">agen</span>C All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

