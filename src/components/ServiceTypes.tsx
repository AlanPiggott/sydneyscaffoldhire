import React from 'react';
import { Building2, Home, Factory } from 'lucide-react';

const serviceTypes = [
  {
    icon: Home,
    title: 'Residential Scaffolding',
    description: 'Expert scaffolding solutions for Sydney home renovations, repairs, and extensions. From heritage homes in Paddington to modern builds in North Sydney.',
    features: ['House painting & exterior maintenance', 'Roof repairs & gutter access', 'Home extensions & renovations', 'Second story additions', 'Heritage home restorations']
  },
  {
    icon: Building2,
    title: 'Commercial Scaffolding',
    description: 'Complete scaffolding systems for Sydney CBD commercial buildings and major construction projects across the metropolitan area.',
    features: ['High-rise building maintenance', 'Office complex renovations', 'Shopping center upgrades', 'Hotel refurbishments', 'Multi-level access solutions']
  },
  {
    icon: Factory,
    title: 'Industrial Scaffolding',
    description: 'Heavy-duty scaffolding solutions for industrial sites throughout Greater Sydney, from Port Botany to Western Sydney\'s industrial hubs.',
    features: ['Manufacturing plant maintenance', 'Warehouse installations', 'Processing facility access', 'Industrial site safety compliance', 'Large-scale project support']
  }
];

export default function ServiceTypes() {
  return (
    <section id="service-types" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary-800 mb-6">Sydney's Best Scaffolding Services</h2>
          <p className="text-secondary-600 max-w-4xl mx-auto mb-8">
            With over two decades of experience serving the Greater Sydney region, we provide comprehensive scaffolding solutions tailored to every sector. From residential projects in the Eastern Suburbs to commercial developments in the CBD and industrial facilities in Western Sydney, our expert team delivers safe, efficient, and compliant scaffolding services.
          </p>
          <p className="text-secondary-600 max-w-4xl mx-auto">
            Our local knowledge and understanding of Sydney's diverse architectural landscape, from heritage-listed properties to modern high-rises, ensures we provide the perfect scaffolding solution for your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceTypes.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 card-hover">
              <service.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-secondary-800">{service.title}</h3>
              <p className="text-secondary-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-secondary-700">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
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