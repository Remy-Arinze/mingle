"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Remove from DOM after animation completes
      setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match animation duration
    }, 5000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="w-20 h-20 relative rounded-full overflow-hidden">
          <Image
            src="/mingle_logo.jpg"
            alt="Mingle Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}

