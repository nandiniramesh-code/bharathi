'use client';
import { Poppins } from 'next/font/google';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, Info, BookOpen, Briefcase, Phone } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active link
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME', icon: <Home size={16} /> },
    { href: '/about', label: 'ABOUT US', icon: <Info size={16} /> },
    { href: '/courses', label: 'COURSES', icon: <BookOpen size={16} /> },
    { href: '/carere', label: 'CAREERS', icon: <Briefcase size={16} /> },
    { href: '/contact', label: 'CONTACT US', icon: <Phone size={16} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white py-2' : 'bg-white/95 py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-16 w-16">
              <Image
                src="/BHARATHI.PNG"
                alt="Bharathi Academy Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <div className={`flex flex-col ${poppins.className}`}>
              <span className="text-lg font-bold text-blue-900">
                BHARATHI
              </span>
              <span className="text-sm text-gray-600">
                ACADEMY
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-50 text-gray-700 hover:text-blue-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <div className={`${poppins.className} 
            ${isOpen 
              ? 'fixed inset-0 bg-white md:relative md:bg-transparent flex flex-col items-center justify-center space-y-6 md:space-y-0'
              : 'hidden'
            } 
            md:flex md:items-center md:space-x-1`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200
                  ${activeLink === link.href
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }
                  ${isOpen ? 'text-lg' : 'text-sm'}`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
