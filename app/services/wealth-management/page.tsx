'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Shield, Target, Award, Users, TrendingUp, PieChart, Briefcase, Phone } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WealthManagementPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!isReducedMotion) {
      // Hero entrance animation
      const heroTl = gsap.timeline();
      heroTl
        .from('.hero-badge', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' })
        .from('.hero-headline', { opacity: 0, y: 50, duration: 1, ease: 'power2.out' }, '-=0.4')
        .from('.hero-description', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.6')
        .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.4')
        .from('.hero-visual', { opacity: 0, scale: 0.9, duration: 1.2, ease: 'power2.out' }, '-=0.8');

      // Section headings fade in
      gsap.fromTo('.section-heading', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section-heading',
            start: 'top 80%',
          }
        }
      );

      // Overview content slide in
      gsap.fromTo('.overview-content', 
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.overview-content',
            start: 'top 75%',
          }
        }
      );

      // Benefits cards staggered animation
      ScrollTrigger.batch('.benefit-card', {
        onEnter: (elements) => {
          gsap.fromTo(elements, 
            { opacity: 0, y: 60, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.8,
              ease: 'back.out(1.2)',
              stagger: 0.15
            }
          );
        },
        start: 'top 85%',
      });

      // CTA section scale animation
      gsap.fromTo('.cta-section', 
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
          }
        }
      );

      // Floating animation for hero visual elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900 font-medium">Wealth Management</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="hero-badge inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 text-sm font-medium mb-8">
                <Shield className="h-4 w-4 mr-2" />
                Premium Wealth Management
              </div>
              
              <h1 className="hero-headline text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6">
                Preserve and Grow Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400"> Legacy</span>
              </h1>
              
              <p className="hero-description text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Our comprehensive wealth management services combine sophisticated investment strategies with personalized financial planning to protect and grow your family's wealth across generations.
              </p>
              
              <div className="hero-cta flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Speak to a Wealth Manager
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  View All Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="hero-visual relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Financial Dashboard Visualization */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Portfolio Overview</h3>
                    <div className="float-element bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      +12.4% YTD
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="float-element bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-4">
                      <PieChart className="h-8 w-8 text-emerald-400 mb-2" />
                      <div className="text-2xl font-bold text-white">R2.8M</div>
                      <div className="text-emerald-200 text-sm">Total Assets</div>
                    </div>
                    
                    <div className="float-element bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4">
                      <TrendingUp className="h-8 w-8 text-blue-400 mb-2" />
                      <div className="text-2xl font-bold text-white">15.2%</div>
                      <div className="text-blue-200 text-sm">Annual Return</div>
                    </div>
                    
                    <div className="float-element bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
                      <Briefcase className="h-8 w-8 text-purple-400 mb-2" />
                      <div className="text-2xl font-bold text-white">8</div>
                      <div className="text-purple-200 text-sm">Asset Classes</div>
                    </div>
                    
                    <div className="float-element bg-gradient-to-br from-orange-500/20 to-orange-600/30 backdrop-blur-sm border border-orange-400/30 rounded-xl p-4">
                      <Target className="h-8 w-8 text-orange-400 mb-2" />
                      <div className="text-2xl font-bold text-white">92%</div>
                      <div className="text-orange-200 text-sm">Goal Progress</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm">Risk Profile</span>
                      <span className="text-emerald-400 text-sm font-medium">Moderate Growth</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="overview-content">
              <h2 className="section-heading text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-8">
                Comprehensive Wealth Management Services
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Portfolio Management</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our expert investment team constructs diversified portfolios tailored to your risk tolerance, time horizon, and financial objectives. We actively monitor and rebalance your investments to optimize returns while managing downside risk.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Retirement Planning</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Secure your financial future with our comprehensive retirement planning strategies. We help you maximize tax-advantaged accounts, optimize pension benefits, and create sustainable income streams for your golden years.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Estate Planning</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Protect your legacy with sophisticated estate planning solutions. Our team works with legal experts to structure trusts, minimize estate taxes, and ensure smooth wealth transfer to future generations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Asset Protection</h4>
                    <p className="text-sm text-slate-600">Safeguard your wealth from market volatility and unforeseen risks</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Growth Strategy</h4>
                    <p className="text-sm text-slate-600">Maximize returns through strategic asset allocation and timing</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Goal Planning</h4>
                    <p className="text-sm text-slate-600">Align investments with your personal and financial objectives</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Legacy Building</h4>
                    <p className="text-sm text-slate-600">Create lasting wealth for future generations of your family</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Why Choose Our Wealth Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the advantages of working with South Africa's premier wealth management firm
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Risk Mitigation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our sophisticated risk management strategies protect your wealth through market volatility, economic uncertainty, and unexpected life events.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Diversified asset allocation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Hedging strategies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Insurance optimization
                </li>
              </ul>
            </div>
            
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <PieChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Diversified Portfolios</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Access institutional-quality investments across multiple asset classes, geographies, and sectors to optimize risk-adjusted returns.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Global market exposure
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Alternative investments
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  ESG integration
                </li>
              </ul>
            </div>
            
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Personalized Attention</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Work directly with dedicated wealth managers who understand your unique situation and provide tailored solutions for your family's needs.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Dedicated relationship manager
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Regular portfolio reviews
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  24/7 client support
                </li>
              </ul>
            </div>
            
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Proven Track Record</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Over two decades of consistent outperformance and client satisfaction, with recognition from leading industry publications and awards.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  20+ years experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Industry awards
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Client testimonials
                </li>
              </ul>
            </div>
            
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Goal-Oriented Planning</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Every investment decision is aligned with your specific financial goals, whether it's retirement, education funding, or wealth transfer.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Custom goal tracking
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Progress monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  Strategy adjustments
                </li>
              </ul>
            </div>
            
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Tax Optimization</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Maximize after-tax returns through sophisticated tax planning strategies and structures designed for high-net-worth individuals.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Tax-efficient investing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Loss harvesting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  Estate tax planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="cta-section relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Schedule a confidential consultation with one of our senior wealth managers to discuss your investment goals and create a personalized wealth management strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Phone className="h-6 w-6 mr-3" />
              Speak to a Wealth Manager
            </Link>
            
            <Link 
              href="https://wa.me/27123456789?text=Hi, I'm interested in learning more about your wealth management services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg rounded-xl transition-all duration-300"
            >
              WhatsApp Consultation
              <ChevronRight className="h-6 w-6 ml-3" />
            </Link>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-slate-400">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-emerald-400" />
              FSB Licensed
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-emerald-400" />
              Industry Recognition
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-emerald-400" />
              500+ Satisfied Clients
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
