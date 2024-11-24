import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  const scrollToQuote = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('service-types')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative min-h-[600px] gradient-bg text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37"
          alt="Professional scaffolding installation on a modern building in Sydney showing multi-level scaffold system with safety features"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 z-1"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Professional Scaffold Hire Sydney
            </h1>
            <p className="text-xl mb-8 text-primary-50">
              Sydney's most trusted scaffolding service. Safe, reliable, and competitive rates with expert support.
            </p>
            <div className="flex flex-wrap gap-6 mb-12">
              <button 
                onClick={scrollToQuote}
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 shadow-soft"
              >
                Get Free Quote
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Our Services
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <Shield className="w-8 h-8" />
                <span>Safety Certified</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <Clock className="w-8 h-8" />
                <span>Fast Setup</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <Award className="w-8 h-8" />
                <span>20+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37"
              alt="Professional scaffolding services in Sydney - Multi-level scaffold system installation"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              width="600"
              height="400"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </div>
  );
}