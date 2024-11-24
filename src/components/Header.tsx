import React from 'react';
import { Phone, Construction } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 glass-effect shadow-soft z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Construction className="w-8 h-8 text-primary-600" />
            <div className="text-primary-600 font-bold text-2xl">SydneyScaffold</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('service-types')} className="text-secondary-600 hover:text-primary-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('safety')} className="text-secondary-600 hover:text-primary-600 transition-colors">Safety</button>
            <button onClick={() => scrollToSection('areas')} className="text-secondary-600 hover:text-primary-600 transition-colors">Areas</button>
            <button onClick={() => scrollToSection('why-us')} className="text-secondary-600 hover:text-primary-600 transition-colors">Why Us</button>
            <button onClick={() => scrollToSection('cta')} className="text-secondary-600 hover:text-primary-600 transition-colors">Contact</button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary-600" />
              <a href="tel:1300SCAFFOLD" className="text-secondary-600 hover:text-primary-600 transition-colors">1300 SCAFFOLD</a>
            </div>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2 rounded-full hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-soft"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}