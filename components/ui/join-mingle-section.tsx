"use client";

import { useState } from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

export function JoinMingleSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/glowingplanetparticles-aZ7auJjgcPBGubinchQRN7Wl/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ minHeight: '100vh' }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-[95%] md:w-[80%] mx-auto px-4 py-24 md:py-32 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join <span className="text-accent-purple">Mingle</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 opacity-90">
            Be part of our growing community. Connect with creators, join events, and unlock your potential.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent-purple transition duration-300"
              />
              <button
                type="submit"
                className="bg-accent-purple text-black font-semibold py-3 px-8 rounded-lg hover:bg-accent-purple/90 transition duration-300 whitespace-nowrap"
              >
                Join Now
              </button>
            </div>
          </form>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://x.com/MetaMingle1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent-purple/20 hover:border-accent-purple transition duration-300"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent-purple/20 hover:border-accent-purple transition duration-300"
              aria-label="Join us on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

