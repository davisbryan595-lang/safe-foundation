'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Leaf, Globe, Shield, MapPin, Phone, Mail, Star, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Leaf,
      title: 'Environmental Monitoring',
      desc: 'Real-time air/water quality tracking for compliance',
      color: 'from-emerald-400 to-emerald-600',
      details: [
        'Continuous monitoring of air and water quality',
        'Automated alerts for regulatory non-compliance',
        'Detailed compliance reporting and documentation',
        'Integration with local environmental agencies',
        'Real-time data dashboards and analytics'
      ]
    },
    {
      icon: Globe,
      title: 'Climate Investigation',
      desc: 'In-depth analysis of climate risks and adaptation strategies',
      color: 'from-blue-400 to-blue-600',
      details: [
        'Comprehensive climate risk assessments',
        'Long-term trend analysis and forecasting',
        'Customized adaptation strategy development',
        'Carbon footprint evaluation and reduction planning',
        'Climate resilience planning for operations'
      ]
    },
    {
      icon: Shield,
      title: 'Safety Investigation',
      desc: 'Thorough audits for workplace hazards and incident response',
      color: 'from-cyan-400 to-cyan-600',
      details: [
        'Complete workplace hazard identification',
        'Safety protocol review and optimization',
        'Incident investigation and root cause analysis',
        'Employee safety training recommendations',
        'Compliance with OSHA and industry standards'
      ]
    },
  ];

  const pricing = [
    {
      name: 'Basic Assessment',
      price: '$5,000',
      desc: 'Initial monitoring + report',
      features: ['Air/Water Quality Baseline', 'Initial Report', '30-day Support']
    },
    {
      name: 'Comprehensive Investigation',
      price: '$12,000',
      desc: 'Full climate/safety audit + recommendations',
      features: ['Complete Climate Audit', 'Safety Assessment', '3-month Analysis', 'Detailed Recommendations']
    },
    {
      name: 'Ongoing Partnership',
      price: 'Custom',
      desc: 'Retainer for nationwide monitoring',
      features: ['Continuous Monitoring', 'Real-time Alerts', 'Quarterly Reports', 'Dedicated Support']
    },
  ];

  const testimonials = [
    {
      name: 'Client X',
      role: 'Environmental Director',
      text: 'Safe Foundation uncovered risks we never saw—game-changer for our compliance!',
      rating: 5
    },
    {
      name: 'Client Y',
      role: 'Facilities Manager',
      text: 'Professional, thorough, and incredibly responsive. Highly recommend.',
      rating: 5
    },
    {
      name: 'Client Z',
      role: 'Safety Officer',
      text: 'Their data-driven approach gave us confidence in our safety protocols.',
      rating: 5
    },
    {
      name: 'Client A',
      role: 'Operations Lead',
      text: 'Best investment in environmental due diligence we made this year.',
      rating: 5
    },
  ];

  const galleryItems = [
    { id: 1, category: 'Monitoring', title: 'Air Quality Analysis', img: '/air-quality-monitoring-equipment.jpg' },
    { id: 2, category: 'Climate', title: 'Climate Data Visualization', img: '/climate-data-charts.jpg' },
    { id: 3, category: 'Safety', title: 'Safety Audit Report', img: '/safety-inspection-checklist.jpg' },
    { id: 4, category: 'Monitoring', title: 'Water Quality Testing', img: '/water-quality-testing-lab.jpg' },
    { id: 5, category: 'Climate', title: 'Climate Risk Assessment', img: '/climate-risk-map.jpg' },
    { id: 6, category: 'Safety', title: 'Workplace Hazard Review', img: '/workplace-safety-inspection.jpg' },
    { id: 7, category: 'Monitoring', title: 'Field Team Analysis', img: '/environmental-field-work.jpg' },
    { id: 8, category: 'Climate', title: 'Climate Impact Study', img: '/climate-impact-research.jpg' },
    { id: 9, category: 'Safety', title: 'Incident Response', img: '/incident-response-team.jpg' },
  ];

  const filteredGallery = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>

      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-secondary z-40 origin-left animate-pulse-glow"
        style={{
          transform: `scaleX(${isScrolled ? 0.5 : 0})`,
          transition: 'transform 0.3s ease'
        }}>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-blue-600 shadow-lg' 
          : 'bg-gradient-to-b from-white/80 to-white/0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-mixed bg-clip-text text-transparent">
            Safe Foundation
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['Hero', 'Services', 'Gallery', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors ${isScrolled ? 'text-white hover:text-blue-100' : 'text-slate-700 hover:text-blue-600'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className={`hidden md:block px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-emerald-400 text-white hover:bg-emerald-500' 
                : 'bg-emerald-500 text-white hover:bg-emerald-600'
            }`}
          >
            Get Quote
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-slate-700'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-slate-700'}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {['Hero', 'Services', 'Gallery', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-700 hover:text-blue-600 py-2"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/10365944/pexels-photo-10365944.jpeg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-emerald-900/60 to-cyan-900/70 -z-10" />

        <div className="max-w-6xl mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-white">
              Safe Foundation:
            </span>
            <br />
            <span className="text-white">Pioneering Environmental & Safety Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 text-balance max-w-3xl mx-auto">
            Expert monitoring, climate investigations, and safety assessments nationwide
          </p>
          <p className="text-lg text-white/90 mb-12 text-balance">
            Protecting communities and businesses with data-driven insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Services <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto text-center">
            <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <p className="text-3xl md:text-4xl font-bold text-emerald-300">10+</p>
              <p className="text-sm md:text-base text-white/80">Years Experience</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-3xl md:text-4xl font-bold text-emerald-300">500+</p>
              <p className="text-sm md:text-base text-white/80">Projects Completed</p>
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <p className="text-3xl md:text-4xl font-bold text-emerald-300">USA Wide</p>
              <p className="text-sm md:text-base text-white/80">Service Coverage</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      <section id="services" className="py-20 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Our Core Services</h2>
            <p className="text-xl text-slate-600">Comprehensive solutions for environmental and safety challenges</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isExpanded = expandedService === idx;
              return (
                <div
                  key={idx}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="h-full bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundImage: service.color === 'from-emerald-400 to-emerald-600'
                          ? 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)'
                          : service.color === 'from-blue-400 to-blue-600'
                          ? 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)'
                          : 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)'
                      }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.desc}</p>

                    {isExpanded && (
                      <div className="mb-6 pb-6 border-b border-slate-200 animate-fade-in-up">
                        <ul className="space-y-3">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600">
                              <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                </svg>
                              </div>
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button
                      onClick={() => setExpandedService(isExpanded ? null : idx)}
                      className="text-emerald-500 font-semibold flex items-center gap-2 group/btn"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Our Work</h2>
            <p className="text-xl text-slate-600">Visual portfolio of environmental fieldwork and analysis</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Monitoring', 'Climate', 'Safety'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-secondary text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                className="group animate-fade-in-up relative overflow-hidden rounded-xl cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-80 bg-slate-200 overflow-hidden rounded-xl">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6">
                    <h4 className="text-white font-bold text-lg text-right">{item.title}</h4>
                    <p className="text-emerald-400 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Transparent Pricing</h2>
            <p className="text-xl text-slate-600">Tailored for US-wide projects • Discounts for nonprofits</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="h-full bg-white rounded-2xl p-8 border-2 border-emerald-400 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-200">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.desc}</p>
                  <p className="text-5xl font-bold bg-gradient-mixed bg-clip-text text-transparent mb-8">{plan.price}</p>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:scale-105 transition-all duration-300">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Client Testimonials</h2>
            <p className="text-xl text-slate-600">Trusted by leading organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Get In Touch</h2>
              <p className="text-xl text-slate-600 mb-8">Ready to experience our services? Let's start planning.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                  <option>Select a service</option>
                  <option>Environmental Monitoring</option>
                  <option>Climate Investigation</option>
                  <option>Safety Investigation</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="animate-slide-in-right space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h3>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Address</p>
                  <p className="text-slate-600">301 E Street NW Suite A210<br />Washington, DC 20037</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <p className="text-slate-600">202-670-4032</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-600">samchaterji@yahoo.com</p>
                </div>
              </div>

              <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>

              <div className="pt-8 border-t border-slate-200">
                <p className="text-slate-600 mb-4 font-semibold">Serving Anywhere in the USA</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                    <span className="text-sm">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-blue-400 hover:text-white transition-colors flex items-center justify-center">
                    <span className="text-sm">𝕏</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition">Monitoring</a></li>
                <li><a href="#" className="hover:text-white transition">Climate</a></li>
                <li><a href="#" className="hover:text-white transition">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-blue-100">301 E Street NW Suite A210</p>
              <p className="text-blue-100">Washington, DC 20037</p>
            </div>
          </div>

          <div className="border-t border-blue-400 pt-8 text-center text-blue-100">
            <p>© 2025 Safe Foundation. All rights reserved. | Serving Anywhere in the USA</p>
          </div>
        </div>
      </footer>
    </>
  );
}
