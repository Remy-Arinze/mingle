"use client";

import React from 'react';

interface ScreenshotSectionProps {
  screenshotRef: React.RefObject<HTMLDivElement | null>;
}

export function ScreenshotSection({ screenshotRef }: ScreenshotSectionProps) {
  return (
    <section id="about" className="relative z-10 w-[95%] md:w-[80%] mx-auto px-4 md:px-6 lg:px-8 mt-0 md:mt-12 scroll-mt-20">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-16 z-20 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0))'
      }} />
      
      <div ref={screenshotRef} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 w-full mx-auto relative">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/PeWrG4ysCA0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 z-20 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0))'
      }} />
    </section>
  );
}

