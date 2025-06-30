
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingMangoes from '@/components/FloatingMangoes';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone",
      details: ["+880 1234-567890", "+880 1987-654321"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: ["hello@amrobilas.com", "support@amrobilas.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Address",
      details: ["House #45, Road #12", "Rajshahi Sadar, Rajshahi 6000"],
      description: "Visit our main office"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      description: "We're here to help you"
    }
  ];

  const socialMedia = [
    { name: "Facebook", url: "#", color: "bg-blue-600" },
    { name: "Instagram", url: "#", color: "bg-pink-600" },
    { name: "WhatsApp", url: "#", color: "bg-green-600" },
    { name: "YouTube", url: "#", color: "bg-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <FloatingMangoes />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us <span className="animate-pulse">📞</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch with any questions about our mangoes, 
            orders, or just to share your mango love.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                ))}
                <p className="text-sm text-gray-500 mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <MessageCircle className="w-6 h-6 text-yellow-600" />
                <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                      placeholder="+880 1234-567890"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="delivery">Delivery Question</option>
                    <option value="quality">Quality Concern</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h3>
                <div className="bg-gradient-to-br from-green-100 to-yellow-100 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500">Rajshahi Sadar, Rajshahi</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Directions:</strong> Our office is located in the heart of Rajshahi, 
                    easily accessible by rickshaw, bus, or private car. Parking is available on-site.
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay connected with us on social media for the latest updates, 
                  mango season news, and special offers.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} text-white p-3 rounded-lg text-center font-medium hover:opacity-90 transition-opacity`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-2">Quick Response Guarantee</h3>
                <p className="text-white/90 mb-4">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Average response time: 2-4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">How fresh are your mangoes?</h4>
              <p className="text-gray-600 text-sm">All mangoes are picked within 24-48 hours of delivery, ensuring maximum freshness and flavor.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">Do you deliver nationwide?</h4>
              <p className="text-gray-600 text-sm">Currently, we deliver to major cities across Bangladesh with plans to expand coverage soon.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">What if I'm not satisfied?</h4>
              <p className="text-gray-600 text-sm">We offer a 100% satisfaction guarantee. Contact us within 24 hours of delivery for any concerns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-gray-800 mb-2">Can I pre-order seasonal varieties?</h4>
              <p className="text-gray-600 text-sm">Yes! We offer pre-ordering for premium varieties like Himsagar and Gopalbhog during peak season.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
