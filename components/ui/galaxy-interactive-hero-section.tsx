"use client";

import React, { useEffect, useRef } from 'react';
import { Suspense } from 'react';
import { Navbar } from './navbar';
import { HeroSplineBackground } from './hero-spline-background';
import { HeroContent } from './hero-content';
import { ScreenshotSection } from './screenshot-section';
import { EventsGallerySection } from './events-gallery-section';
import { UpcomingEventsSection } from './upcoming-events-section';
import { MeetTheTeamSection } from './meet-the-team-section';
import { JoinMingleSection } from './join-mingle-section';
import { Footer } from './footer';

export const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <Suspense fallback={<div className="w-full h-screen bg-black" />}>
            <HeroSplineBackground />
          </Suspense>
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100dvh',
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <div className="w-[95%] md:w-[80%] mx-auto">
            <HeroContent />
          </div>
        </div>
      </div>

      <div className="bg-black relative z-10" style={{ marginTop: '-10vh' }}>
        <ScreenshotSection screenshotRef={screenshotRef} />
      </div>

      <EventsGallerySection />
      <UpcomingEventsSection />
      <MeetTheTeamSection />
      <JoinMingleSection />
      <Footer />
    </div>
  );
};

