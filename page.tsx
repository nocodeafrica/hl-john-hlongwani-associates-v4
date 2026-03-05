'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Shield, Target, Award, Users, TrendingUp, PieChart, Briefcase, Phone } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero animation
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
    );

    gsap.fromTo('.hero-cta', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
    );

    // Services animation
    gsap.fromTo('.service-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Stats animation
    gsap.fromTo('.stat-item',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">ConsultPro</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-blue-600 block">Expert Consulting</span>
            </h1>
            <p className="hero-subtitle text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help businesses unlock their potential through strategic consulting, 
              innovative solutions, and data-driven insights that drive real results.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center">
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </div>
          
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Risk Management",
                description: "Identify and mitigate potential risks to protect your business"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Strategy Development",
                description: "Create comprehensive strategies for sustainable growth"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Performance Optimization",
                description: "Optimize operations for maximum efficiency and profitability"
              },
              {
                icon: <PieChart className="h-8 w-8" />,
                title: "Data Analytics",
                description: "Transform data into actionable insights for better decisions"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Team Development",
                description: "Build high-performing teams and leadership capabilities"
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Business Transformation",
                description: "Guide your organization through digital transformation"
              }
            ].map((service, index) => (
              <div key={index} className="service-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Expert Consultants" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose ConsultPro?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in business consulting, we've helped 
                hundreds of companies achieve their goals and overcome challenges.
              </p>
              <div className="space-y-4">
                {[
                  "Proven track record of success",
                  "Industry-leading expertise",
                  "Customized solutions for every client",
                  "Ongoing support and partnership"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-xl text-gray-700 mb-4">Years of Excellence</div>
                <p className="text-gray-600">
                  Delivering exceptional consulting services and building lasting partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">ConsultPro</h3>
            <p className="mb-4">Transforming businesses through expert consulting</p>
            <div className="text-sm text-gray-400">
              © 2024 ConsultPro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
