import React from 'react';
import { useTheme } from '../contects/ThemeContext'




const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = React.useState(true);

    const { theme } = useTheme()
    const bgColor = theme === 'dark' ? 'bg-[#1F1F1F]' : 'bg-white'
    const textColor = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <footer className={`${bgColor} ${textColor} py-8 sm:py-12 md:py-8 px-4 mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-6 sm:my-8 md:my-10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem]`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:mx-6 xl:mx-10">
          {/* Columns Container */}
          <div className='flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-20'>
            {/* First Column */}
            <div>
              <h3 className="text-lg font-medium mb-4 sm:mb-6">Lorem ipsum</h3>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <h3 className="text-lg font-medium mb-4 sm:mb-6">Lorem ipsum</h3>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              </ul>
            </div>

            {/* Third Column */}
            <div>
              <h3 className="text-lg font-medium mb-4 sm:mb-6">Lorem ipsum</h3>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lorem ipsum</a></li>
              </ul>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="lg:max-w-xs">
            <h3 className="text-lg font-medium mb-4 sm:mb-6">Lorem ipsum</h3>
            <p className="text-gray-400 mb-4 sm:mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="absolute inset-0 rounded-full  opacity-50 -z-10" />
            <button 
              className={`relative group w-full sm:w-auto px-6 py-2 rounded-full transition-all duration-300 ease-in-out
                          ${isHovered ? 'shadow-lg transform -translate-y-0.5' : 'shadow-md'}
                          active:shadow-inner active:transform active:translate-y-0 active:scale-95`}
              //onMouseEnter={() => setIsHovered(true)}
              //onMouseLeave={() => setIsHovered(false)}
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
        <div className="h-px bg-gray-800 my-8 sm:my-12 md:my-16" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} <span className={`font-medium ${textColor}`}>ModTerra Technologies Pvt Ltd.</span> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

