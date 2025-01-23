import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contects/ThemeContext";

const AdvancedSliderSection = ({
  h1,
  h2,
  h3,
  image1,
  image2,
  image3,
  image4,
}) => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-[#0C0C0C]" : "bg-[#F5F5F5]";
  const textColor = theme === "dark" ? "text-black" : "text-[#F5F5F5]";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const productImages = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Enable custom scrolling for small and medium screens (< 1024px)
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollAmount = slider.scrollWidth / productImages.length;
      slider.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (isMobile) {
      const slider = sliderRef.current;
      const scrollAmount = slider.scrollWidth / productImages.length;
      const index = Math.round(slider.scrollLeft / scrollAmount);
      setCurrentIndex(index);
    }
  };

  const handleDragStart = (e) => {
    isDragging.current = true;
    sliderRef.current.style.cursor = "grabbing";
    sliderRef.current.startX = e.pageX || e.touches[0].pageX;
    sliderRef.current.scrollLeftStart = sliderRef.current.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;

    const x = e.pageX || e.touches[0].pageX;
    const distance = sliderRef.current.startX - x;
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeftStart + distance;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  return (
    <div className={`${bgColor} relative top-10 mb-10 h-full py-10 md:p-9`}>
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex mx-3 flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mb-8 md:mb-12">
          <h1
            className="bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] 
                       text-transparent bg-clip-text text-3xl md:text-5xl font-bold font-[`Inter`]"
          >
            {h1}.
          </h1>
          <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center">
            {/* First Gradient Box */}
            <div className="flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] p-[0.15rem]">
                <div
                  className={`sm:px-6 md:px-8 lg:px-10 flex items-center justify-center px-8  py-2 rounded-full ${bgColor} back`}
                >
                  <svg
                    className="w-[30px] mr-4 ml-[-20px] "
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.25 39H61.75M61.75 39L39 16.25M61.75 39L39 61.75"
                      stroke="url(#paint0_linear_83_14112)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_83_14112"
                        x1="24.9572"
                        y1="27.7038"
                        x2="57.4576"
                        y2="58.4701"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ED1C24" />
                        <stop offset="0.47" stopColor="#F15A29" />
                        <stop offset="0.95" stopColor="#EC008C" />
                      </linearGradient>
                    </defs>
                  </svg>
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
                  className={`sm:px-8 md:px-10 lg:px-12 flex items-center justify-center px-8  py-2 rounded-full ${bgColor} back`}
                >
                  <svg
                    className="w-[30px] mr-4 ml-[-20px]"
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M67.2923 74.375L42.5006 56.6667L17.709 74.375V17.7083C17.709 15.8297 18.4553 14.028 19.7836 12.6997C21.112 11.3713 22.9137 10.625 24.7923 10.625H60.209C62.0876 10.625 63.8893 11.3713 65.2177 12.6997C66.546 14.028 67.2923 15.8297 67.2923 17.7083V74.375Z"
                      stroke="url(#paint0_linear_83_14115)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_83_14115"
                        x1="27.1976"
                        y1="26.6729"
                        x2="70.7456"
                        y2="58.7364"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ED1C24" />
                        <stop offset="0.47" stopColor="#F15A29" />
                        <stop offset="0.95" stopColor="#EC008C" />
                      </linearGradient>
                    </defs>
                  </svg>
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
        <div
          className={`relative ${
            isMobile
              ? "overflow-x-scroll scroll-smooth scrollbar-hide"
              : "overflow-hidden"
          }`}
          ref={sliderRef}
          onScroll={isMobile ? handleScroll : null}
          onMouseDown={isMobile ? handleDragStart : null}
          onTouchStart={isMobile ? handleDragStart : null}
          onMouseMove={isMobile ? handleDragMove : null}
          onTouchMove={isMobile ? handleDragMove : null}
          onMouseUp={isMobile ? handleDragEnd : null}
          onMouseLeave={isMobile ? handleDragEnd : null}
          onTouchEnd={isMobile ? handleDragEnd : null}
          style={{ cursor: isMobile ? "grab" : "default" }}
        >
          <motion.div
            className="flex"
            style={{
              width: isMobile
                ? `${productImages.length * 50}%`
                : `${productImages.length * 25}%`,
            }}
          >
            {productImages.map((product) => (
              <motion.div
                key={product.id}
                className={`${isMobile ? "w-[50%]" : "w-1/4"} px-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src={product.image}
                    alt={`Image ${product.id}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Navigation */}
        {isMobile && (
          <div className="flex justify-center mt-4 w-full">
            <div
              className={`flex justify-center mt-4 ${
                theme == "dark" ? "bg-[#1F1F1F]" : "bg-white"
              } w-16 py-2 rounded-full`}
            >
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-[0.30rem] h-[0.30rem] rounded-full mx-1  ${
                    currentIndex === index ? "bg-white" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedSliderSection;
