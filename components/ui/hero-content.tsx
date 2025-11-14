"use client";

export function HeroContent() {
  return (
    <div className="text-left text-white pt-10 sm:pt-24 md:pt-32 px-4 max-w-3xl">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-wide">
        Connect. Create. Collaborate. <br className="sm:hidden" /> Welcome to <span className="md:text-accent-purple">Mingle</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-80 max-w-xl">
        Your all-access pass to community spaces, live events, and a library of tutorials to help you build, learn, and grow.
      </p>
    </div>
  );
}

