"use client";

import SphereImageGrid, { ImageData } from "./img-sphere";

export function UpcomingEventsSection() {
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      category: "Technology"
    },
    {
      id: 2,
      title: "Creative Design Workshop",
      date: "March 22, 2024",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
      category: "Design"
    },
    {
      id: 3,
      title: "Community Meetup",
      date: "March 29, 2024",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      category: "Community"
    },
    {
      id: 4,
      title: "Developer Conference",
      date: "April 5, 2024",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
      category: "Technology"
    }
  ];

  // Base event images for the sphere - using event/concert/workshop related images
  const BASE_EVENT_IMAGES: Omit<ImageData, 'id'>[] = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop",
      alt: "Tech Innovation Summit",
      title: "Tech Innovation Summit",
      description: "Join us for cutting-edge technology discussions and innovation."
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=600&fit=crop",
      alt: "Creative Design Workshop",
      title: "Creative Design Workshop",
      description: "Explore your creativity in our hands-on design workshop."
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=600&fit=crop",
      alt: "Community Meetup",
      title: "Community Meetup",
      description: "Connect with like-minded individuals in our community."
    },
    {
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=600&fit=crop",
      alt: "Developer Conference",
      title: "Developer Conference",
      description: "Learn from industry experts and network with developers."
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop",
      alt: "Music Festival",
      title: "Music Festival",
      description: "Experience live music and performances."
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop",
      alt: "Networking Event",
      title: "Networking Event",
      description: "Build professional connections and expand your network."
    },
    {
      src: "https://images.unsplash.com/photo-1501281668745-7b3c6190fd43?w=600&h=600&fit=crop",
      alt: "Art Exhibition",
      title: "Art Exhibition",
      description: "Discover amazing artworks from talented artists."
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=600&fit=crop",
      alt: "Startup Pitch Night",
      title: "Startup Pitch Night",
      description: "Watch innovative startups pitch their ideas."
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=600&fit=crop",
      alt: "Workshop Session",
      title: "Workshop Session",
      description: "Hands-on learning experiences for all skill levels."
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop",
      alt: "Tech Talk",
      title: "Tech Talk",
      description: "Insights from industry leaders and innovators."
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop",
      alt: "Hackathon",
      title: "Hackathon",
      description: "Build, create, and compete in our coding challenge."
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
      alt: "Outdoor Event",
      title: "Outdoor Event",
      description: "Enjoy events in beautiful outdoor settings."
    }
  ];

  // Generate more images by repeating the base set to fill the sphere
  const SPHERE_IMAGES: ImageData[] = [];
  for (let i = 0; i < 60; i++) {
    const baseIndex = i % BASE_EVENT_IMAGES.length;
    const baseImage = BASE_EVENT_IMAGES[baseIndex];
    SPHERE_IMAGES.push({
      id: `event-img-${i + 1}`,
      ...baseImage,
      alt: `${baseImage.alt} (${Math.floor(i / BASE_EVENT_IMAGES.length) + 1})`
    });
  }

  return (
    <section id="upcoming-events" className="bg-black py-16 md:py-24 scroll-mt-20">
      <div className="w-[80%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Upcoming Events</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Join us for exciting events, workshops, and networking opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent-purple/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-accent-purple transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{event.date}</p>
                <p className="text-gray-500 text-sm">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive 3D Sphere Image Grid */}
        <div className="flex flex-col items-center justify-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
            Explore Our Events Gallery
          </h3>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
            Drag to rotate and click on any image to view details
          </p>
          <div className="flex justify-center items-center w-full">
            <SphereImageGrid
              images={SPHERE_IMAGES}
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
        </div>
      </div>
    </section>
  );
}

