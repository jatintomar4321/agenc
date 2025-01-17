import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contects/ThemeContext'

const AdvancedSliderSection = ({h1,h2,h3,image1,image2,image3,image4}) => {

    const { theme } = useTheme()
    const bgColor = theme === 'dark' ? 'bg-[#0C0C0C]' : 'bg-[#F5F5F5]'
     const textColor = theme === 'dark' ? 'text-black' : 'text-[#F5F5F5]'

    // const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const productImages = [
    {
      id: 1,
      image: image1,

    },
    {
      id: 2,
      image:image2,
    
    },
    {
      id: 3,
      image:image3,
 
    },
    {
      id: 4,
      image:image4,
   
    },
  ];

  const nextSlide = () => {
    const increment = window.innerWidth <= 768 ? 2 : 1; // Adjust the width threshold for mobile screens
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= productImages.length ? 0 : prevIndex + increment
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleCards = isMobile ? 1 : 4;

  return (
    <div  className={`${bgColor} relative top-10 mb-10 h-full  py-10 md:p-9`}>
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex mx-3 flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mb-8 md:mb-12">
          <h1 className="bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] 
                       text-transparent bg-clip-text text-3xl md:text-5xl font-bold font-[`Inter`]">{h1}.</h1>
         <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center">
  {/* First Gradient Box */}
  <div className="flex items-center justify-center">
    <div className="rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] p-[0.15rem]">
      <div
        className={`flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-2 rounded-full ${bgColor} back`}
      >
        <h1
          className={`text-xs sm:text-sm md:text-base lg:text-lg font-thin`}
        >
          {h2}
        </h1>
      </div>
    </div>
  </div>

  {/* Second Gradient Box */}
  <div className="flex items-center justify-center">
    <div className="rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] p-[0.15rem]">
      <div
        className={`flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 py-2 rounded-full ${bgColor} back`}
      >
        <h1
          className={`text-xs sm:text-sm md:text-base lg:text-lg font-thin`}
        >
          {h3}
        </h1>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            style={{ width: isMobile ? `${productImages.length * 50}%` : `${productImages.length * (100 / visibleCards)}%` }}
            animate={{ x: isMobile ? `-${currentIndex * (13 / visibleCards)}%` : `-${currentIndex * (40 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {productImages.map((product) => (
              <motion.div
                key={product.id}
                className={`${isMobile ? 'w-[50%]' : 'w-1/2'} px-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden group ">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-contain "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-sm text-gray-200">{product.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="mt-4 mx-2 flex justify-between lg:hidden items-center">
            <button
              onClick={prevSlide}
            className={`px-3 md:px-4 py-1 md:py-2 ${bgColor} border border-[#ff4545] text-[#ff4545] hover:bg-[#ff4545] hover:text-black transition-colors rounded-full text-sm md:text-base`}
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className={`px-3 md:px-4 py-1 md:py-2 ${bgColor} border border-[#ff4545] text-[#ff4545] hover:bg-[#ff4545] hover:text-black transition-colors rounded-full text-sm md:text-base`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSliderSection;

