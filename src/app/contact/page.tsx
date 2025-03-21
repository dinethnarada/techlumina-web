'use client';

import { useState} from 'react';
import Button from '@/components/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      })
    })

    // Reset form and show notification
    setFormData({ name: '', email: '', company: '', message: '' });
    setShowNotification(true);
    
    // Hide notification after 5 seconds
    setTimeout(() => setShowNotification(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen relative">
      {/* Success Notification */}
      <AnimatePresence>
        {showNotification && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-40"
            />
            {/* Notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-navy text-light-gray p-8 rounded-lg shadow-2xl flex flex-col items-center text-center max-w-sm w-full mx-4"
            >
              <div className="w-16 h-16 bg-medium-blue/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl text-medium-blue">✓</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
              <p className="text-light-gray/80">Thank you for reaching out. We&apos;ll get back to you soon.</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Contact Hero Section */}
      <section className="relative py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-light-gray">Get in Touch</h2>
          <p className="text-xl text-light-gray/80 text-center mb-12 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today and let&apos;s discuss how we can help bring your vision to life.
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
                    <span>Tech Lumina, Colombo, SriLanka</span>
                  </p>
                  <p className="flex items-center space-x-3 text-blue-gray">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-medium-blue/20">
                      📧
                    </span>
                    <span>contact@tech-lumina.com</span>
                  </p>
                  <p className="flex items-center space-x-3 text-blue-gray">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-medium-blue/20">
                      📱
                    </span>
                    <span>+94 (078) 869-5286</span>
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
      {/* <section className="py-20 px-4 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="h-[400px] rounded-xl overflow-hidden relative bg-medium-blue/10">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-medium-blue/20 to-navy"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl text-light-gray/50">Map will be integrated here</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
