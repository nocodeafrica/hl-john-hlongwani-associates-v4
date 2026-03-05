'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  ChevronRight, 
  Linkedin, 
  Mail, 
  Users, 
  Briefcase,
  Award
} from 'lucide-react';

// Conditionally register GSAP plugins only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

const teamMembers = [
  {
    id: 'john-hlongwani',
    name: 'John Hlongwani',
    title: 'Founder & Managing Partner',
    initials: 'JH',
    bio: 'With over 20 years of experience in chartered accounting and financial advisory, John is a former Big 4 partner with deep expertise in M&A, corporate restructuring, and regulatory compliance within the South African market.',
    color: 'from-[#0B132B] to-[#1e3a8a]'
  },
  {
    id: 'lerato-mokoena',
    name: 'Lerato Mokoena',
    title: 'Director of Audit & Assurance',
    initials: 'LM',
    bio: 'Lerato specializes in complex statutory audits for JSE-listed entities. She is deeply passionate about corporate governance, public sector accountability, and enhancing financial transparency across the continent.',
    color: 'from-[#10B981] to-[#047857]'
  },
  {
    id: 'david-vd-merwe',
    name: 'David van der Merwe',
    title: 'Head of Tax Consulting',
    initials: 'DM',
    bio: 'An authority on cross-border taxation and SARS dispute resolution, David helps multinational corporations navigate the intricate and ever-evolving African tax landscape with strategic precision.',
    color: 'from-[#2563EB] to-[#1d4ed8]'
  },
  {
    id: 'sipho-ndlovu',
    name: 'Sipho Ndlovu',
    title: 'Partner, Strategic Advisory',
    initials: 'SN',
    bio: 'Sipho drives our management consulting division, focusing on BEE structuring, business turnaround strategies, and digital transformation in finance for mid-tier to large enterprises.',
    color: 'from-[#64748b] to-[#334155]'
  },
  {
    id: 'ananya-patel',
    name: 'Ananya Patel',
    title: 'Chief Operating Officer',
    initials: 'AP',
    bio: 'Ensuring operational excellence across the firm, Ananya brings a wealth of experience in scaling professional services firms efficiently while maintaining the highest standards of client service.',
    color: 'from-[#0B132B] to-[#10B981]'
  }
];

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(() => {
    // Only run animations on client side
    if (!isClient || typeof window === 'undefined') return;

    try {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (prefersReducedMotion) {
        gsap.set(['.hero-elem', '.profile-card', '.banner-elem', '.cta-elem'], { opacity: 1 });
        return;
      }

      // Hero Animation
      const heroTl = gsap.timeline();
      heroTl.from('.hero-elem', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1
      });

      // Profile Grid Animation
      gsap.from('.profile-card', {
        scrollTrigger: {
          trigger: '.profile-grid',
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Careers Banner Animation
      gsap.from('.banner-bg', {
        scrollTrigger: {
          trigger: '.careers-banner',
          start: 'top 90%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.2)'
      });

      gsap.from('.banner-elem', {
        scrollTrigger: {
          trigger: '.careers-banner',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Final CTA Animation
      gsap.from('.cta-elem', {
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    } catch (error) {
      console.warn('Animation error:', error);
    }

  }, { scope: containerRef, dependencies: [isClient] });

  // Fallback content while loading
  if (!isClient) {
    return (
      <main className="bg-slate-50 min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500"></div>
        </div>
      </main>
    );
  }

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen selection:bg-emerald-500 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Decorative Gradient Blob */}
        <div className="absolute top-0 right-0 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-blue-600 rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Breadcrumbs */}
          <nav className="hero-elem flex items-center space-x-2 text-sm text-gray-400 mb-8 font-medium">
            <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Leadership Team</span>
          </nav>

          <div className="max-w-4xl">
            <div className="hero-elem inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10">
              <Users className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold tracking-wide uppercase text-gray-200">Our People</span>
            </div>
            
            <h1 className="hero-elem text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              World-Class Expertise. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                Local Market Knowledge.
              </span>
            </h1>
            
            <p className="hero-elem text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Our leadership team brings decades of combined experience in corporate finance, auditing, and strategic advisory across South Africa and the broader African continent. We are united by a commitment to excellence and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP GRID SECTION */}
      <section className="py-24 relative z-20 -mt-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="profile-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="profile-card bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
              >
                {/* Avatar Placeholder (No external images) */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-2xl font-bold">{member.initials}</span>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      type="button"
                      className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      aria-label={`LinkedIn Profile for ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <a 
                      href="mailto:contact@jhlongwani.co.za" 
                      className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-6 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    {member.title}
                  </p>
                  <div className="w-12 h-1 bg-gray-100 mb-6 rounded-full"></div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}

            {/* Join the Team Placeholder Card */}
            <div className="profile-card bg-slate-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-gray-400 mb-6 shadow-sm">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Future Leaders</h3>
              <p className="text-gray-500 mb-6 max-w-xs">
                We are always looking for exceptional talent to join our growing leadership team.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                View Opportunities <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS BANNER SECTION */}
      <section className="careers-banner py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="banner-bg relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/20 to-transparent z-0"></div>
            
            <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="banner-elem text-3xl md:text-5xl font-bold text-white mb-6">
                  Join our growing firm.
                </h2>
                <p className="banner-elem text-gray-300 text-lg md:text-xl leading-relaxed">
                  We are continually seeking exceptional chartered accountants, tax specialists, and strategic thinkers. Build a rewarding career at our Sandton-based headquarters and make a tangible impact across Africa.
                </p>
              </div>
              
              <div className="banner-elem shrink-0">
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-emerald-500 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact HR
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="final-cta py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <div className="cta-elem inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-8">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="cta-elem text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to elevate your financial strategy?
          </h2>
          <p className="cta-elem text-xl text-gray-600 mb-10">
            Partner with John Hlongwani Associates today. Our leadership team is ready to provide the insights and assurance your business needs to thrive.
          </p>
          <div className="cta-elem flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 border border-gray-200 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
