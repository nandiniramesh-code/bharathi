'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/1.jpg",
    heading1: "'THE BEST EDUCATION OF THE GREAT FOUNDATION'",
    text: "UGC APPROVED",
    heading2: "DEGREE COURSES",
    heading3: "DIPLOMA COURSES",
  },
  {
    image: "/3.jpg",
    heading1: "EXCELLENCE IN MEDICAL TECHNOLOGY",
    text: "LEADING THE FUTURE OF HEALTHCARE EDUCATION",
    heading2: "BACHELOR'S PROGRAMS",
    heading3: "CERTIFICATION COURSES",
  },
  {
    image: "/2.png",
    heading1: "BUILD YOUR CAREER WITH US",
    text: "INDUSTRY-ORIENTED CURRICULUM",
    heading2: "SPECIALIZED TRAINING",
    heading3: "INTERNSHIP OPPORTUNITIES",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  // Preload all images at start
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const loadImage = (src) => {
          return new Promise((resolve, reject) => {
            if (loadedImages[src]) {
              resolve(src);
              return;
            }
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setLoadedImages(prev => ({ ...prev, [src]: true }));
              resolve(src);
            };
            img.onerror = reject;
          });
        };

        // Load all images at once
        await Promise.all(slides.map(slide => loadImage(slide.image)));
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="relative h-screen w-full bg-black flex items-center justify-center">
        <div className="text-blue-200 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-[1.02]"
              style={{
                backgroundImage: `url(${slides[index].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div 
              className="absolute inset-0" 
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.65) 100%)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-100">
              {slides[index].heading1}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {slides[index].text}
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-200/90">
                {slides[index].heading2}
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-200/90">
                {slides[index].heading3}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
