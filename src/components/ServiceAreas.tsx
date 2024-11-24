import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    region: 'Sydney CBD & Inner City',
    suburbs: ['Sydney CBD', 'Surry Hills', 'Pyrmont', 'Ultimo', 'Darlinghurst']
  },
  {
    region: 'North Sydney',
    suburbs: ['North Sydney', 'Chatswood', 'Lane Cove', 'St Leonards', 'Artarmon']
  },
  {
    region: 'Western Sydney',
    suburbs: ['Parramatta', 'Blacktown', 'Penrith', 'Liverpool', 'Auburn']
  },
  {
    region: 'Eastern Suburbs',
    suburbs: ['Bondi', 'Double Bay', 'Randwick', 'Maroubra', 'Rose Bay']
  },
  {
    region: 'Inner West',
    suburbs: ['Newtown', 'Marrickville', 'Leichhardt', 'Ashfield', 'Burwood']
  },
  {
    region: 'South Sydney',
    suburbs: ['Hurstville', 'Rockdale', 'Kogarah', 'Sans Souci', 'Brighton-Le-Sands']
  }
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Areas in Sydney</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive scaffolding services across the entire Sydney metropolitan area, from the Northern Beaches to the Southern Suburbs, and from the Eastern Suburbs to Western Sydney. Our strategic locations across Sydney ensure quick response times and efficient service delivery for all your scaffolding needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{area.region}</h3>
              </div>
              <ul className="space-y-2">
                {area.suburbs.map((suburb, idx) => (
                  <li key={idx} className="text-gray-600">
                    • {suburb}
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