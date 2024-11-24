import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function CTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast.success('Quote request sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="cta" className="py-20 bg-blue-600">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Get in touch with Sydney's most trusted scaffolding team for a free quote.
            </p>
            <div className="space-y-4">
              <a href="tel:1300SCAFFOLD" className="flex items-center space-x-3 text-xl">
                <Phone className="w-6 h-6" />
                <span>1300 SCAFFOLD</span>
              </a>
              <a href="mailto:info@sydneyscaffold.com.au" className="flex items-center space-x-3 text-xl">
                <Mail className="w-6 h-6" />
                <span>info@sydneyscaffold.com.au</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}