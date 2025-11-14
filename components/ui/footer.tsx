"use client";

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="w-[80%] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative rounded-full overflow-hidden">
                <Image
                  src="/mingle_logo.jpg"
                  alt="Mingle Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-white font-bold text-lg">Mingle</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your all-access pass to community spaces, live events, and a library of tutorials.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Security</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mingle. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Terms</a>
            <a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-accent-purple text-sm transition duration-150">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

