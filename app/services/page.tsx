'use client';

import { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Target, 
  Briefcase, 
  Shield, 
  Search, 
  Settings, 
  Check, 
  Globe,
  Award,
  ChevronRight
} from 'lucide-react';

// Dynamically import Remotion Player to avoid SSR issues
const Player = dynamic(() => import('@remotion/player').then(m => m.Player), { ssr: false });

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const services = [
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    description: 'Bespoke wealth preservation and growth strategies tailored for high-net-worth individuals, families, and trusts across South Africa. We navigate local market volatility and offshore opportunities to secure your financial legacy.',
    features: ['Portfolio Diversification', 'Offshore Investment Structuring', 'Retirement & Estate Planning', 'ZAR Currency Hedging'],
    icon: Target,
    gradient: 'from-blue-900 to-blue-700',
    accent: 'text-blue-700',
    bgAccent: 'bg-blue-50'
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    description: 'Strategic advisory for mid-market and enterprise entities. From JSE listings and capital raising to complex mergers and acquisitions, our team ensures your corporate transactions are executed with precision and maximum valuation.',
    features: ['Mergers & Acquisitions (M&A)', 'Capital Raising & Debt Structuring', 'Valuations & Due Diligence', 'BEE Transaction Advisory'],
    icon: Briefcase,
    gradient: 'from-emerald-900 to-emerald-700',
    accent: 'text-emerald-700',
    bgAccent: 'bg-emerald-50'
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory',
    description: 'Proactive and compliant tax strategies designed to optimize your liabilities. We provide expert guidance on SARS regulations, corporate tax structuring, and cross-border tax implications for multinational operations.',
    features: ['Corporate Tax Structuring', 'SARS Dispute Resolution', 'Cross-Border Tax Planning', 'VAT & Indirect Tax Consulting'],
    icon: Shield,
    gradient: 'from-slate-900 to-slate-700',
    accent: 'text-slate-800',
    bgAccent: 'bg-slate-100'
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    description: 'Independent, rigorous auditing services that build stakeholder trust. We go beyond compliance to identify operational risks, enhance internal controls, and provide actionable insights for sustainable business growth.',
    features: ['Statutory Audits', 'Internal Control Reviews', 'IFRS Advisory', 'Risk Management Frameworks'],
    icon: Search,
    gradient: 'from-indigo-900 to-indigo-700',
    accent: 'text-indigo-700',
    bgAccent: 'bg-indigo-50'
  }
];

const approachSteps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We begin with a comprehensive analysis of your current financial standing, identifying immediate risks and long-term objectives.',
    icon: Search
  },
  {
    number: '02',
    title: 'Strategy Formulation',
    description: 'Our specialists design a bespoke roadmap, integrating tax, wealth, and corporate strategies to align with your specific goals.',
    icon: Target
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Seamless implementation of the agreed strategy, leveraging our network and expertise to ensure precision and compliance.',
    icon: Award
  },
  {
    number: '04',
    title: 'Ongoing Optimization',
    description: 'Continuous monitoring and adjustment of your financial plan to adapt to market shifts, regulatory changes, and personal milestones.',
    icon: Settings
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set('.gsap-animate', { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    // Hero Animation Timeline
    const tl = gsap.timeline();
    
    tl.from('.hero-breadcrumb', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.6');

    // Section Headings Fade-in
    gsap.utils.toArray('.section-heading').forEach((heading: any) => {
      gsap.from(heading, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
        }
      });
    });

    // Services Alternating Slide-in
    gsap.utils.toArray('.service-row').forEach((row: any, i) => {
      const textCol = row.querySelector('.service-text');
      const visualCol = row.querySelector('.service-visual');
      const isEven = i % 2 === 0;

      gsap.from(textCol, {
        opacity: 0,
        x: isEven ? -40 : 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 80%',
        }
      });

      gsap.from(visualCol, {
        opacity: 0,
        x: isEven ? 40 : -40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 80%',
        }
      });
    });

    // Approach Timeline Stagger
    gsap.from('.approach-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.approach-grid',
        start: 'top 80%',
      }
    });

    // CTA Scale-up
    gsap.from('.cta-block', {
      opacity: 0,
      scale: 0.95,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.cta-container',
        start: 'top 85%',
      }
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-indigo-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-200/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-20">
          <nav className="hero-breadcrumb inline-flex items-center space-x-2 text-sm font-medium text-slate-500 mb-8 bg-white/60 px-5 py-2.5 rounded-full border border-slate-200/80 backdrop-blur-md shadow-sm gsap-animate">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Services</span>
          </nav>

          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-slate-900 gsap-animate">
            Comprehensive Financial Solutions for Every Stage of Growth.
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed gsap-animate">
            From wealth preservation to complex corporate structuring, John Hlongwani Associates delivers world-class financial expertise tailored to the unique landscape of the South African economy.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LIST SECTION */}
      <section className="py-24 bg-white relative z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="section-heading mb-20 md:mb-32 text-center max-w-3xl mx-auto gsap-animate">
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">Our Core Disciplines</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Expertise that drives decisive action and sustainable value.</h3>
          </div>

          <div className="space-y-32 md:space-y-40">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;

              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`service-row flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Text Content */}
                  <div className="service-text w-full lg:w-1/2 gsap-animate">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgAccent} ${service.accent} mb-8 shadow-sm border border-white/50 backdrop-blur-sm`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className={`w-6 h-6 mr-3 shrink-0 ${service.accent}`} />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href={`/services/${service.id}`}
                      className={`inline-flex items-center font-semibold ${service.accent} group hover:opacity-80 transition-opacity`}
                    >
                      Explore Service
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual Abstract Block */}
                  <div className="service-visual w-full lg:w-1/2 gsap-animate">
                    <div className={`relative aspect-square lg:aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br ${service.gradient} shadow-2xl overflow-hidden flex items-center justify-center group`}>
                      {/* Decorative elements */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40"></div>
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
                      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
                      
                      <div className="relative z-10 p-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                        <Icon className="w-24 h-24 text-white/90 transform group-hover:scale-110 transition-transform duration-700 ease-out" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. APPROACH SECTION */}
      <section className="py-32 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="section-heading mb-24 text-center max-w-3xl mx-auto gsap-animate">
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">Our Methodology</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">A proven framework for financial excellence.</h3>
            <p className="text-lg text-slate-600">
              We don't believe in one-size-fits-all. Our proprietary four-step methodology ensures every strategy is rigorously tested and perfectly aligned with your vision.
            </p>
          </div>

          <div className="approach-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop only - absolute center of the icons) */}
            <div className="hidden lg:block absolute top-[4rem] left-[12.5%] right-[12.5%] h-[2px] bg-slate-200 z-0"></div>

            {approachSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="approach-card relative z-10 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group gsap-animate">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold mb-8 mx-auto lg:mx-0 group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300 shadow-md">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-center lg:text-left text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-center lg:text-left leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="cta-container py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="cta-block bg-slate-900 rounded-[3rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl gsap-animate">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-gradient-to-r from-blue-600/30 to-transparent -rotate-12 blur-3xl"></div>
              <div className="absolute -bottom-[50%] -right-[10%] w-[70%] h-[150%] bg-gradient-to-l from-emerald-500/30 to-transparent -rotate-12 blur-3xl"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <Globe className="w-16 h-16 text-emerald-400 mx-auto mb-8 opacity-90" strokeWidth={1.5} />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Ready to elevate your financial trajectory?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Connect with an expert at John Hlongwani Associates today to discuss your specific needs, whether corporate or personal. Let's build a strategy that works for you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center group shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md transition-all duration-300 inline-flex items-center justify-center border border-white/10 hover:border-white/20"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
