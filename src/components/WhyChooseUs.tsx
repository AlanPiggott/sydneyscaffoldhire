import React from 'react';
import { Truck, Users, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Fast Delivery & Setup',
    description: 'Same-day delivery available across Sydney with rapid professional installation by our expert team'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Licensed professionals with decades of combined experience in Sydney\'s construction industry'
  },
  {
    icon: Shield,
    title: 'Quality Equipment',
    description: 'Premium, well-maintained scaffolding equipment meeting all Australian safety standards'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Scaffold Hire</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            With over two decades of experience serving Sydney\'s construction industry, we\'ve built our reputation on reliability, safety, and exceptional service. Our deep understanding of local building requirements and regulations ensures your project runs smoothly from start to finish.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From residential renovations in the Eastern Suburbs to commercial projects in the CBD, our team brings expertise and professionalism to every job, no matter the size or complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}