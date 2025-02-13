'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: i === index ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      {/* Overlay and Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
        {/* Headings and Text */}
        <motion.h1
          key={slides[index].heading1}
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides[index].heading1}
        </motion.h1>

        <motion.p
          key={slides[index].text}
          className="text-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {slides[index].text}
        </motion.p>

        <motion.h2
          key={slides[index].heading2}
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {slides[index].heading2}
        </motion.h2>

        <motion.h2
          key={slides[index].heading3}
          className="text-2xl font-semibold mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {slides[index].heading3}
        </motion.h2>
      </div>

  
    </div>
  );
};

export default HeroSection;
