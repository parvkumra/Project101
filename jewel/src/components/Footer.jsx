import React from 'react';
import { Instagram, Phone, MessageCircle } from 'lucide-react';

function Footer() {
  return (
   <div id="contact" className='w-full bg-[#cbc5b9] text-white py-12 lg:py-16'>
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Top Section - Brand Name */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <hr className="w-20 md:w-32 mx-auto border-white border-t-2" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] mb-2 font-serif">
            PEHLI PASAND
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide opacity-90">
            BY AABHUSHAN
          </p>
          
          <div className="mt-6">
            <hr className="w-20 md:w-32 mx-auto border-white border-t-2" />
          </div>
        </div>

        {/* Middle Section - Product Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 text-center">
          <div className="group cursor-pointer">
            <h3 className="text-lg md:text-xl font-mono tracking-wide hover:text-gray-200 transition-colors relative">
              EARRINGS
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
            </h3>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-lg md:text-xl font-mono tracking-wide hover:text-gray-200 transition-colors relative">
              BRACELETS
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
            </h3>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-lg md:text-xl font-mono tracking-wide hover:text-gray-200 transition-colors relative">
              NECKLACE
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
            </h3>
          </div>
          
          <div className="group cursor-pointer">
            <h3 className="text-lg md:text-xl font-mono tracking-wide hover:text-gray-200 transition-colors relative">
              BANGLES
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full transform -translate-x-1/2"></span>
            </h3>
          </div>
        </div>

        {/* Bottom Section - Social Links */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/pehlipasand_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2 hover:text-gray-200 transition-colors"
          >
            <div className="p-3 rounded-full border-2 border-white group-hover:bg-white group-hover:text-[#cbc5b9] transition-all duration-300">
              <Instagram size={24} />
            </div>
            <span className="text-sm font-mono">INSTAGRAM</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2 hover:text-gray-200 transition-colors"
          >
            <div className="p-3 rounded-full border-2 border-white group-hover:bg-white group-hover:text-[#cbc5b9] transition-all duration-300">
              <MessageCircle size={24} />
            </div>
            <span className="text-sm font-mono">WHATSAPP</span>
          </a>

          {/* Call */}
          <a 
            href="tel:+91" 
            className="group flex flex-col items-center space-y-2 hover:text-gray-200 transition-colors"
          >
            <div className="p-3 rounded-full border-2 border-white group-hover:bg-white group-hover:text-[#cbc5b9] transition-all duration-300">
              <Phone size={24} />
            </div>
            <span className="text-sm font-mono">CALL</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-sm opacity-75 font-mono">
            © 2025 PEHLI PASAND BY AABHUSHAN. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;