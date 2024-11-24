import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceTypes from './components/ServiceTypes';
import SafetyCompliance from './components/SafetyCompliance';
import ServiceAreas from './components/ServiceAreas';
import ScaffoldTypes from './components/ScaffoldTypes';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Map from './components/Map';
import StickyForm from './components/StickyForm';

function App() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />
      <StickyForm />
      <main>
        <Hero />
        <ServiceTypes />
        <SafetyCompliance />
        <ServiceAreas />
        <ScaffoldTypes />
        <WhyChooseUs />
        <CTA />
        <Map />
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">SydneyScaffold</h4>
              <p className="text-gray-400">
                Professional scaffold hire services across Sydney metropolitan area.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('service-types')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Residential Scaffolding</button></li>
                <li><button onClick={() => document.getElementById('service-types')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Commercial Scaffolding</button></li>
                <li><button onClick={() => document.getElementById('service-types')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Industrial Scaffolding</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('safety')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Safety & Compliance</button></li>
                <li><button onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Service Areas</button></li>
                <li><button onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Why Choose Us</button></li>
                <li><button onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Phone: 1300 SCAFFOLD</li>
                <li className="text-gray-400">Email: info@sydneyscaffold.com.au</li>
                <li className="text-gray-400">Sydney, NSW 2000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SydneyScaffold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;