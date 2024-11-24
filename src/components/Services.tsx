import React from 'react';
import { Building2, Home, Factory, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial Scaffolding',
    description: 'Complete scaffolding solutions for commercial buildings and high-rise construction projects.'
  },
  {
    icon: Home,
    title: 'Residential Scaffolding',
    description: 'Safe and efficient scaffolding for home renovations, repairs, and maintenance work.'
  },
  {
    icon: Factory,
    title: 'Industrial Scaffolding',
    description: 'Specialized scaffolding services for industrial sites and manufacturing facilities.'
  },
  {
    icon: Warehouse,
    title: 'Construction Support',
    description: 'Comprehensive scaffolding support for major construction and infrastructure projects.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Scaffolding Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive scaffolding solutions across Sydney, ensuring safety and efficiency for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}