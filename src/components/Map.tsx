import React from 'react';

export default function Map() {
  return (
    <section id="map" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us in Sydney</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Strategically located in Sydney CBD to service all metropolitan areas with rapid response times.
          </p>
        </div>
        <div className="w-full h-[500px] rounded-xl shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26537.152141475223!2d151.19174204276276!3d-33.86882255678726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1709825433435!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}