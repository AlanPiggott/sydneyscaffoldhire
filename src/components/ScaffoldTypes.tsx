import React from 'react';
import { Box, Boxes, Cog, Layout } from 'lucide-react';

const scaffoldTypes = [
  {
    icon: Box,
    title: 'Aluminum Scaffolds',
    features: ['Lightweight & portable', 'Quick assembly', 'Ideal for indoor work', 'Height adjustable']
  },
  {
    icon: Boxes,
    title: 'Steel Scaffolds',
    features: ['Heavy-duty construction', 'Maximum stability', 'Weather resistant', 'High load capacity']
  },
  {
    icon: Layout,
    title: 'Mobile Scaffold Towers',
    features: ['Easy relocation', 'Adjustable platforms', 'Compact design', 'Versatile applications']
  },
  {
    icon: Cog,
    title: 'Custom Solutions',
    features: ['Tailored designs', 'Complex structures', 'Special requirements', 'Expert consultation']
  }
];

export default function ScaffoldTypes() {
  return (
    <section id="types" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Types of Scaffolding Available</h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-8">
            At Sydney's leading scaffolding provider, we maintain an extensive range of modern, well-maintained scaffolding equipment to meet any project requirement. Our comprehensive inventory includes everything from lightweight aluminum systems perfect for residential projects to heavy-duty steel scaffolding for major commercial developments.
          </p>
          <p className="text-gray-600 max-w-4xl mx-auto mb-8">
            Every piece of our scaffolding equipment is regularly inspected, maintained, and certified to meet or exceed Australian Safety Standards. We take pride in providing only the highest quality scaffolding solutions that ensure both safety and efficiency for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scaffoldTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <type.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}