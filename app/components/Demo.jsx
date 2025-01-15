import React from 'react'
import Slider from './Slider'
import { useTheme } from '../contects/ThemeContext'

const demo = () => {

  const { theme } = useTheme()
  const bgColor = theme === 'dark' ? 'bg-[#0C0C0C]' : 'bg-[#F5F5F5]'

  return (
    <div className={`${bgColor}  pb-4 sm:pb-4 lg:pb-24 h-full`}>
      <img 
        className="px-4 sm:px-8 md:px-16 lg:px-40 w-full h-auto" 
        src="Choice and Input.png" 
        alt="Choice and Input" 
      />
    

    </div>
  )
}

export default demo
