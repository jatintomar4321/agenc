import React from 'react';
import { useTheme } from '../contects/ThemeContext';
import { useState } from 'react'
import { ContactForm } from './ContactForm'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(true);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <footer
      className={`${bgColor} ${textColor} py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-10 mx-4 my-6 sm:my-8 md:my-10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem]`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Columns Container */}
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-6 md:space-x-10 lg:space-x-16 xl:space-x-20">
            {/* First Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Socials</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm sm:text-base hover:text-lg transition-all duration-300 ease-in-out"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm sm:text-base hover:text-lg transition-all duration-300 ease-in-out"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-sm sm:text-base hover:text-lg transition-all duration-300 ease-in-out"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Address</h3>
              <ul className="space-y-2 sm:space-y-1">
                <li>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Office no. 108, 1st Floor,
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Wing-C, Trade World Premises
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Cooperative Society Ltd,
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Kamla Mills Compound,
                  </p>
                </li>
                <li>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Lower Parel, Mumbai - 400013
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="lg:max-w-xs">
            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Contact us at</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
              support@your-agenc.ai
            </p>
            <button
              className={`relative group w-full sm:w-auto px-6 py-2 rounded-full transition-all duration-300 ease-in-out
                          ${isHovered ? 'shadow-lg transform -translate-y-0.5' : 'shadow-md'}
                          active:shadow-inner active:transform active:translate-y-0 active:scale-95`}
                          onClick={() => setIsContactFormOpen(true)}
            >
              {/* Button gradient border */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-pink-500 
                               transition-opacity duration-300 ease-in-out
                               ${isHovered ? 'opacity-100' : 'opacity-80'} -z-10`}
              />
              <div
                className={`absolute inset-[1px] rounded-full bg-[#2F2F2F] transition-all duration-300 ease-in-out
                               ${isHovered ? 'opacity-90' : 'opacity-100'} 
                               group-active:opacity-100 group-active:inset-[2px] -z-10`}
              />
              <span className="text-white text-sm sm:text-base font-medium relative z-10">
                Request a demo
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-6 sm:my-10 md:my-12" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs sm:text-sm">
          <p>
            &copy; {currentYear}{' '}
            <span className={`font-medium ${textColor}`}>
              ModTerra Technologies Pvt Ltd.
            </span>{' '}
            All Rights Reserved.
          </p>
        </div>
      </div>
       <ContactForm 
              isOpen={isContactFormOpen} 
              onClose={() => setIsContactFormOpen(false)} 
            />
    </footer>
    
  );
};

export default Footer;
