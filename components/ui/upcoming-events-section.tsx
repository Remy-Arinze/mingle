"use client";

import { useState, useMemo } from "react";
import SphereImageGrid, { ImageData } from "./img-sphere";

export function UpcomingEventsSection() {
  const [selectedYear, setSelectedYear] = useState<"2024" | "2025">("2024");

  // Mingle 2024 event images - images from the actual event
  const MINGLE_2024_IMAGES: Omit<ImageData, 'id'>[] = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Tech Innovation Summit",
      title: "Mingle 2024 - Tech Innovation Summit",
      description: "Join us for cutting-edge technology discussions and innovation."
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Creative Design Workshop",
      title: "Mingle 2024 - Creative Design Workshop",
      description: "Explore your creativity in our hands-on design workshop."
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Community Meetup",
      title: "Mingle 2024 - Community Meetup",
      description: "Connect with like-minded individuals in our community."
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Developer Conference",
      title: "Mingle 2024 - Developer Conference",
      description: "Learn from industry experts and network with developers."
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Music Festival",
      title: "Mingle 2024 - Music Festival",
      description: "Experience live music and performances."
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Networking Event",
      title: "Mingle 2024 - Networking Event",
      description: "Build professional connections and expand your network."
    },
    {
      src: "https://images.unsplash.com/photo-1501281668745-7b3c6190fd43?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Art Exhibition",
      title: "Mingle 2024 - Art Exhibition",
      description: "Discover amazing artworks from talented artists."
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Startup Pitch Night",
      title: "Mingle 2024 - Startup Pitch Night",
      description: "Watch innovative startups pitch their ideas."
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Workshop Session",
      title: "Mingle 2024 - Workshop Session",
      description: "Hands-on learning experiences for all skill levels."
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Tech Talk",
      title: "Mingle 2024 - Tech Talk",
      description: "Insights from industry leaders and innovators."
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Hackathon",
      title: "Mingle 2024 - Hackathon",
      description: "Build, create, and compete in our coding challenge."
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
      alt: "Mingle 2024 - Outdoor Event",
      title: "Mingle 2024 - Outdoor Event",
      description: "Enjoy events in beautiful outdoor settings."
    }
  ];

  // Generate sphere images based on selected year
  const sphereImages = useMemo(() => {
    if (selectedYear === "2024") {
      // Generate 60 images from Mingle 2024 event images
      const images: ImageData[] = [];
      for (let i = 0; i < 60; i++) {
        const baseIndex = i % MINGLE_2024_IMAGES.length;
        const baseImage = MINGLE_2024_IMAGES[baseIndex];
        images.push({
          id: `mingle-2024-img-${i + 1}`,
          ...baseImage,
          alt: `${baseImage.alt} (${Math.floor(i / MINGLE_2024_IMAGES.length) + 1})`
        });
      }
      return images;
    } else {
      // Mingle 2025 - Coming Soon (empty or placeholder)
      return [];
    }
  }, [selectedYear]);

  return (
    <section id="upcoming-events" className="bg-black py-16 md:py-24 scroll-mt-20">
      <div className="w-[90%] md:w-[80%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Mingle Events
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
          Explore our past events and get ready for what's coming next
        </p>

        {/* Year Selection Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedYear("2024")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedYear === "2024"
                ? "bg-accent-purple text-white shadow-lg shadow-accent-purple/50 scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Mingle 2024
          </button>
          <button
            onClick={() => setSelectedYear("2025")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedYear === "2025"
                ? "bg-accent-purple text-white shadow-lg shadow-accent-purple/50 scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Mingle 2025
            <span className="ml-2 text-xs opacity-75">Coming Soon</span>
          </button>
        </div>

        {/* Interactive 3D Sphere Image Grid */}
        <div className="flex flex-col items-center justify-center">
          {selectedYear === "2024" ? (
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
                Mingle 2024 Event Gallery
              </h3>
              <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
                Drag to rotate and click on any image to view details from our 2024 event
              </p>
              <div className="flex justify-center items-center w-full">
                <SphereImageGrid
                  images={sphereImages}
                  containerSize={600}
                  sphereRadius={200}
                  dragSensitivity={0.8}
                  momentumDecay={0.96}
                  maxRotationSpeed={6}
                  baseImageScale={0.15}
                  hoverScale={1.3}
                  perspective={1000}
                  autoRotate={true}
                  autoRotateSpeed={0.2}
                  className="mx-auto"
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-center max-w-md">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Mingle 2025
                </h3>
                <p className="text-xl text-accent-purple mb-6 font-semibold">
                  Coming Soon
                </p>
                <p className="text-gray-400 text-lg">
                  We're preparing something amazing for 2025. Stay tuned for updates and announcements!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

