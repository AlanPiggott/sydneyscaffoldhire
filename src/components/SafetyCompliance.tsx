import React from 'react';
import { ShieldCheck, FileCheck, UserCheck, Search } from 'lucide-react';

const safetyItems = [
  {
    icon: ShieldCheck,
    title: 'Safety Standards & Certifications',
    description: 'Full compliance with AS/NZS 1576 and WorkSafe NSW regulations for all Sydney metropolitan projects'
  },
  {
    icon: FileCheck,
    title: 'Comprehensive Insurance',
    description: '$20M public liability insurance and complete coverage for all scaffolding operations'
  },
  {
    icon: UserCheck,
    title: 'Qualified Personnel',
    description: 'Licensed scaffolders with extensive Sydney construction industry experience'
  },
  {
    icon: Search,
    title: 'Regular Safety Inspections',
    description: 'Thorough safety audits and maintenance checks throughout your project duration'
  }
];

export default function SafetyCompliance() {
  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Safety & Compliance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As Sydney's trusted scaffolding provider, we maintain the highest standards of safety and compliance in the industry. Our commitment to safety extends beyond mere compliance – it's ingrained in every aspect of our operations, from initial setup to final dismantling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}