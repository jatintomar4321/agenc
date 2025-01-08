import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contects/ThemeContext'

const AdvancedSliderSection = ({h1,image1,image2,image3,image4}) => {

    const { theme } = useTheme()
    const bgColor = theme === 'dark' ? 'bg-black' : 'bg-[#F5F5F5]'
     const textColor = theme === 'dark' ? 'text-black' : 'text-[#F5F5F5]'

    // const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const productImages = [
    {
      id: 1,
      image: {image1},
      alt: "Black modular bench design",
      title: "The Art of Value",
      description: "Modern modular seating solution"
    },
    {
      id: 2,
      image:{image2},
      alt: "Brown circular chair",
      title: "The Joy of Service",
      description: "Comfortable curved design"
    },
    {
      id: 3,
      image:{image3},
      alt: "Yellow folding chair",
      title: "The Promise of Variety",
      description: "Contemporary folding chair"
    },
    {
      id: 4,
      image:{image4},
      alt: "Recliner sofas collection",
      title: "Recliner Sofas",
      description: "Lounge in Luxury"
    },
  ];

  const nextSlide = () => {
    const increment = window.innerWidth <= 768 ? 2 : 1; // Adjust the width threshold for mobile screens
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= productImages.length ? 0 : prevIndex + increment
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mb-8 md:mb-12">
          <h1 className="bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] 
                       text-transparent bg-clip-text text-3xl md:text-5xl font-bold font-[`Inter`]">{h1}.</h1>
          <div className="flex flex-wrap gap-4">
          <div className="mx-auto flex items-center justify-center">
  <div className=" w-full rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] p-[0.15rem]">
    <div className={`flex h-full w-full px-10 py-2 rounded-full items-center justify-center ${bgColor} back`}>
    
      <h1 className={`text-md font-black `}>Explore Idea</h1>
    </div>
  </div>
</div>
            <div className="mx-auto flex  items-center justify-center">
  <div className="  rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] p-[0.15rem]">
    <div className={`flex h-full w-full px-10 py-2 rounded-full items-center justify-center ${bgColor} back`}>
      <h1 className={`text-md font-black `}> Make an idea </h1>
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
            animate={{ x: isMobile ? `-${currentIndex * (10 / visibleCards)}%` : `-${currentIndex * (40 / visibleCards)}%` }}
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
                <div className="relative aspect-[2/3.8] rounded-2xl overflow-hidden group bg-white">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="px-3 md:px-4 py-1 md:py-2 bg-black border border-[#ff4545] text-[#ff4545] hover:bg-[#ff4545] hover:text-black transition-colors rounded-full text-sm md:text-base"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-3 md:px-4 py-1 md:py-2 bg-black border border-[#ff4545] text-[#ff4545] hover:bg-[#ff4545] hover:text-black transition-colors rounded-full text-sm md:text-base"
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

