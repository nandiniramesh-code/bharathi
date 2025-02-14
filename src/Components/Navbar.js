'use client';
import { Inter, Poppins, Roboto, Kanit } from 'next/font/google';

const kanit = Kanit({ subsets: ['latin'], weight: ['400', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`px-10 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 z-10">
          <img src="/BHARATHI.PNG" alt="Logo" className="h-20 w-20" />
          <span className="text-sm font-bold text-blue-400 ">BHARTHI ACADEMY</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={` ${poppins.className} md:flex md:items-center md:space-x-6 absolute md:relative text-sm w-full md:w-auto left-0 md:flex-row flex-col ${
            isOpen ? 'flex justify-center items-center' : 'hidden'
          }`}

        
        >
          <Link href="/" className="block px-4 py-2 text-white hover:text-blue-400">HOME</Link>
          
          <Link href="/about" className="block px-4 py-2 text-white hover:text-blue-400">ABOUT US</Link>
          <Link href="/courses" className="block px-4 py-2 text-white hover:text-blue-400">COURSES</Link>
          <Link href="/carere" className="block px-4 py-2 text-white hover:text-blue-400">CAREERS</Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:text-blue-400">CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
}
