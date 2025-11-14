"use client";

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

  return (
    <section id="upcoming-events" className="bg-black py-16 md:py-24 scroll-mt-20">
      <div className="w-[80%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Upcoming Events</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Join us for exciting events, workshops, and networking opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}

