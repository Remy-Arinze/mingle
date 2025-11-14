"use client";

export function EventsGallerySection() {
  // Event images from Unsplash - using event/concert/workshop related images
  const eventImages = [
    'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop',
  ];

  // Duplicate images for seamless loop
  const topRowImages = [...eventImages, ...eventImages];
  const bottomRowImages = [...eventImages, ...eventImages];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `
      }} />
      <section id="gallery" className="bg-black py-16 md:py-24 mt-20 md:mt-0 overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Events Gallery</h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Join our community events, workshops, and live sessions
          </p>
        </div>

        {/* Top Row - Scrolling Left */}
        <div className="relative mb-6 overflow-hidden">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-96 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0))'
          }} />
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-96 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0))'
          }} />
          <div 
            className="flex"
            style={{
              animation: 'scroll-left 30s linear infinite',
              willChange: 'transform'
            }}
          >
            {topRowImages.map((img, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 mx-3 w-[300px] md:w-[400px] h-[200px] md:h-[200px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolling Right */}
        <div className="relative overflow-hidden">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-96 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0))'
          }} />
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-96 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0))'
          }} />
          <div 
            className="flex"
            style={{
              animation: 'scroll-right 30s linear infinite',
              willChange: 'transform'
            }}
          >
            {bottomRowImages.map((img, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 mx-3 w-[300px] md:w-[400px] h-[200px] md:h-[250px] rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

