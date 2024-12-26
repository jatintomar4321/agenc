import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdvancedSliderSection = ({h1}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const productImages = [
    {
      id: 1,
      image: "/1.jpg",
      alt: "Black modular bench design",
      title: "The Art of Value",
      description: "Modern modular seating solution"
    },
    {
      id: 2,
      image: "/3.jpg",
      alt: "Brown circular chair",
      title: "The Joy of Service",
      description: "Comfortable curved design"
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c4965758cf6377c1287_Screenshot%202024-11-26%20124346-dEmZpPv5EoBj6T0Jv9mBHeabvJmpIg.png",
      alt: "Yellow folding chair",
      title: "The Promise of Variety",
      description: "Contemporary folding chair"
    },
    {
      id: 4,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c490850edd0043b83ba_Screenshot%202024-11-27%20140340-EZE4moUNWjm6v68U4k4lBlNOYiVnuL.png",
      alt: "Recliner sofas collection",
      title: "Recliner Sofas",
      description: "Lounge in Luxury"
    },
    {
      id: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c490850edd0043b83ba_Screenshot%202024-11-27%20140340-EZE4moUNWjm6v68U4k4lBlNOYiVnuL.png",
      alt: "2 & 3 Seater sofas",
      title: "2 & 3 Seater Sofas",
      description: "Premium comfort seating"
    },
    {
      id: 6,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c490850edd0043b83ba_Screenshot%202024-11-27%20140340-EZE4moUNWjm6v68U4k4lBlNOYiVnuL.png",
      alt: "Home office furniture",
      title: "Home Office",
      description: "Create the perfect work space"
    },
    {
      id: 7,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c4965758cf6377c1287_Screenshot%202024-11-26%20124346-dEmZpPv5EoBj6T0Jv9mBHeabvJmpIg.png",
      alt: "Black modular design",
      title: "Modern Collection",
      description: "Contemporary living"
    },
    {
      id: 8,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c490850edd0043b83ba_Screenshot%202024-11-27%20140340-EZE4moUNWjm6v68U4k4lBlNOYiVnuL.png",
      alt: "Accent furniture",
      title: "Accent Furniture",
      description: "Make a statement"
    },
    {
      id: 9,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c4965758cf6377c1287_Screenshot%202024-11-26%20124346-dEmZpPv5EoBj6T0Jv9mBHeabvJmpIg.png",
      alt: "Brown circular design",
      title: "Curved Collection",
      description: "Ergonomic comfort"
    },
    {
      id: 10,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/67470c490850edd0043b83ba_Screenshot%202024-11-27%20140340-EZE4moUNWjm6v68U4k4lBlNOYiVnuL.png",
      alt: "Office solutions",
      title: "Work Spaces",
      description: "Professional comfort"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= productImages.length ? 0 : prevIndex + 1
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
    <div  className="bg-[#0C0C0C] relative top-10 mb-10 h-full  py-10 md:p-9">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mb-8 md:mb-12">
          <h1 className="bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] 
                       text-transparent bg-clip-text text-3xl md:text-5xl font-bold font-[`Inter`]">{h1}.</h1>
          <div className="flex flex-wrap gap-4">
          <div class="mx-auto flex items-center justify-center">
  <div class=" w-full rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] p-[0.15rem]">
    <div class="flex h-full w-full px-10 py-2 rounded-full items-center justify-center bg-gray-800 back">
      <h1 class="text-2xl font-black text-white">the quick </h1>
    </div>
  </div>
</div>
            <div class="mx-auto flex  items-center justify-center">
  <div class="  rounded-full bg-gradient-to-r from-red-500 via-[#F15A29] to-[#EC008C] p-[0.15rem]">
    <div class="flex h-full w-full px-10 py-2 rounded-full items-center justify-center bg-gray-800 back">
      <h1 class="text-2xl font-black text-white">the quick </h1>
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
            animate={{ x: isMobile ? `-${currentIndex * (10 / visibleCards)}%` : `-${currentIndex * (100 / visibleCards)}%` }}
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

