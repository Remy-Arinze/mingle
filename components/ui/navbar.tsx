"use client";

import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const handleMouseEnterNavItem = (item: string) => setHoveredNavItem(item);
  const handleMouseLeaveNavItem = () => setHoveredNavItem(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (itemName: string, extraClasses = '') => {
    const isCurrentItemHovered = hoveredNavItem === itemName;
    const isAnotherItemHovered = hoveredNavItem !== null && !isCurrentItemHovered;

    const colorClass = isCurrentItemHovered
      ? 'text-accent-purple'
      : isAnotherItemHovered
        ? 'text-gray-500'
        : 'text-gray-300';

    return `text-sm transition duration-150 ${colorClass} ${extraClasses}`;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-[95%] md:w-[80%] mx-[auto] mt-0 md:mt-5 right-0 z-20 bg-black/40 backdrop-blur-md border border-white/10 rounded rounded-full">
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-8 lg:space-x-10">
          {/* Logo */}
          <div className="w-8 h-8 relative rounded-full overflow-hidden">
            <Image
              src="/mingle_logo.jpg"
              alt="Mingle Logo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="#about" 
              className={navLinkClass('about')} 
              onMouseEnter={() => handleMouseEnterNavItem('about')} 
              onMouseLeave={handleMouseLeaveNavItem}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              About
            </a>
            <a 
              href="#gallery" 
              className={navLinkClass('gallery')} 
              onMouseEnter={() => handleMouseEnterNavItem('gallery')} 
              onMouseLeave={handleMouseLeaveNavItem}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('gallery');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Gallery
            </a>
            <a 
              href="#upcoming-events" 
              className={navLinkClass('upcoming-events')} 
              onMouseEnter={() => handleMouseEnterNavItem('upcoming-events')} 
              onMouseLeave={handleMouseLeaveNavItem}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('upcoming-events');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Upcoming Events
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="hidden md:block bg-accent-purple text-white hover:bg-accent-purple/90 font-medium py-2 px-5 rounded-lg text-sm transition duration-150">Log In</a>
          <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-accent-dark/95 backdrop-blur-md border-t border-accent-purple/30 absolute top-full left-0 right-0 z-30
           overflow-hidden transition-all duration-300 ease-in-out
           ${isMobileMenuOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}
           `}
      >
        <div className="px-4 py-6 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-accent-purple text-sm py-2 transition duration-150"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            About
          </a>
          <a 
            href="#gallery" 
            className="text-gray-300 hover:text-accent-purple text-sm py-2 transition duration-150"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              const element = document.getElementById('gallery');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Gallery
          </a>
          <a 
            href="#upcoming-events" 
            className="text-gray-300 hover:text-accent-purple text-sm py-2 transition duration-150"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              const element = document.getElementById('upcoming-events');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Upcoming Events
          </a>
          <a href="#" className="bg-accent-purple text-white hover:bg-accent-purple/90 font-medium py-2 px-5 rounded-lg text-sm text-center transition duration-150">Log In</a>
        </div>
      </div>
    </nav>
  );
}

