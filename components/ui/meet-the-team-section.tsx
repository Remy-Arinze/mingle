"use client";

export function MeetTheTeamSection() {
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    },
    {
      id: 6,
      name: "Jessica Martinez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
    },
  ];

  return (
    <section id="team" className="bg-black py-16 md:py-24 scroll-mt-20">
      <div className="w-[95%] md:w-[80%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Meet the Team</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          The passionate people behind Mingle, dedicated to building amazing experiences
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent-purple/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-accent-purple transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

