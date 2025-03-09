'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="relative py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-light-gray">Get in Touch</h1>
          <p className="text-xl text-light-gray/80 text-center mb-12 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today and let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-navy">Contact Information</h2>
                <div className="space-y-4">
                  <p className="flex items-center space-x-3 text-blue-gray">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-medium-blue/20">
                      📍
                    </span>
                    <span>123 Tech Street, Silicon Valley, CA</span>
                  </p>
                  <p className="flex items-center space-x-3 text-blue-gray">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-medium-blue/20">
                      📧
                    </span>
                    <span>contact@techlumina.com</span>
                  </p>
                  <p className="flex items-center space-x-3 text-blue-gray">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-medium-blue/20">
                      📱
                    </span>
                    <span>+1 (555) 123-4567</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-navy">Office Hours</h2>
                <div className="space-y-2 text-blue-gray">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-gray mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-navy/5 border border-navy/10 focus:border-medium-blue focus:outline-none text-navy"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-gray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-navy/5 border border-navy/10 focus:border-medium-blue focus:outline-none text-navy"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-blue-gray mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-navy/5 border border-navy/10 focus:border-medium-blue focus:outline-none text-navy"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-navy/5 border border-navy/10 focus:border-medium-blue focus:outline-none text-navy"
                  placeholder="Tell us about your project"
                />
              </div>
              
              <Button 
                variant="light" 
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="h-[400px] rounded-xl overflow-hidden relative bg-medium-blue/10">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-medium-blue/20 to-navy"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl text-light-gray/50">Map will be integrated here</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
