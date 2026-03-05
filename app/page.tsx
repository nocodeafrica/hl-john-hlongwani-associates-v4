'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, 
  ArrowRight, 
  Shield, 
  Zap, 
  Target, 
  Briefcase, 
  Check, 
  Award,
  Globe
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TaxAdvisoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set('.gsap-animate', { opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    // Hero Animation (Load)
    const heroTl = gsap.timeline();
    heroTl.fromTo('.gsap-hero-breadcrumb', 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo('.gsap-hero-title', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.gsap-hero-text', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.gsap-hero-btn', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo('.gsap-hero-visual .gsap-shape', 
      { opacity: 0, scale: 0.8, rotation: -10 }, 
      { opacity: 1, scale: 1, rotation: 0, duration: 1.2, stagger: 0.15, ease: 'back.out(1.2)' },
      '-=1'
    );

    // Fade-in up for section headers
    gsap.utils.toArray('.gsap-section-header').forEach((elem: any) => {
      gsap.fromTo(elem,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          }
        }
      );
    });

    // Split section (Overview) - Slide in from sides
    gsap.fromTo('.gsap-slide-left',
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-overview-trigger',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.gsap-slide-right',
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-overview-trigger',
          start: 'top 80%',
        }
      }
    );

    // Staggered Cards (Benefits)
    gsap.fromTo('.gsap-benefit-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-benefits-trigger',
          start: 'top 80%',
        }
      }
    );

    // CTA Scale Up
    gsap.fromTo('.gsap-cta-block',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gsap-cta-block',
          start: 'top 85%',
        }
      }
    );

    // Parallax background elements
    gsap.to('.gsap-parallax-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Micro-interactions for hover states
    gsap.utils.toArray('.interactive-card').forEach((card: any) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(card, { y: -5, scale: 1.02, duration: 0.3, ease: 'power2.out' });
      
      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());
    });

    // Button hover micro-interactions
    gsap.utils.toArray('.btn-hover-effect').forEach((btn: any) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(btn, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
      
      btn.addEventListener('mouseenter', () => tl.play());
      btn.addEventListener('mouseleave', () => tl.reverse());
    });

    // Floating animation for decorative elements
    gsap.to('.floating-element', {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-[#10B981] selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative bg-[#0B132B] text-white overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gsap-parallax-bg absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/10 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#0B132B] to-[#2563EB]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="max-w-2xl">
              <nav className="gsap-hero-breadcrumb flex items-center space-x-2 text-sm text-gray-400 mb-8 font-medium">
                <Link href="/" className="hover:text-white transition-colors min-h-[48px] min-w-[48px] flex items-center">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/services" className="hover:text-white transition-colors min-h-[48px] min-w-[48px] flex items-center">Services</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#10B981]">Tax Advisory</span>
              </nav>

              <h1 className="gsap-hero-title text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Navigate Complex <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB]">Tax Landscapes</span> with Ease.
              </h1>
              
              <p className="gsap-hero-text text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
                Strategic tax planning and compliance services designed to protect your wealth, optimize your business operations, and ensure full alignment with South African Revenue Service (SARS) regulations.
              </p>
              
              <div className="gsap-hero-btn flex flex-wrap gap-4">
                <Link href="/contact" className="btn-hover-effect inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#0B132B] bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/10 group min-h-[48px]">
                  Consult a Tax Expert
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#overview" className="btn-hover-effect inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors min-h-[48px]">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Hero Visual - Abstract CSS Composition */}
            <div className="gsap-hero-visual hidden lg:flex justify-center items-center relative h-[500px]">
              {/* Glassmorphic card back */}
              <div className="gsap-shape floating-element absolute right-0 top-10 w-72 h-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col justify-between transform rotate-6">
                <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center border border-[#2563EB]/30">
                  <Shield className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <div className="h-2 w-24 bg-white/20 rounded-full mb-3" />
                  <div className="h-2 w-40 bg-white/10 rounded-full" />
                </div>
              </div>
              
              {/* Glassmorphic card front */}
              <div className="gsap-shape floating-element absolute left-10 bottom-10 w-80 h-96 bg-[#10B981]/10 backdrop-blur-2xl border border-[#10B981]/20 rounded-3xl shadow-2xl p-8 flex flex-col z-10 transform -rotate-3">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg shadow-[#10B981]/20">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white">
                    SARS Compliant
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="h-3 w-3/4 bg-white/30 rounded-full" />
                  <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                  <div className="h-3 w-5/6 bg-white/20 rounded-full" />
                </div>
                <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                  <div className="text-sm text-gray-300">Optimization Strategy</div>
                  <div className="text-white font-semibold">+24%</div>
                </div>
              </div>

              {/* Connecting elements */}
              <div className="gsap-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite]" />
              <div className="gsap-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#2563EB]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="gsap-overview-trigger grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Col: Abstract Data Visual */}
            <div className="gsap-slide-left lg:col-span-5 hidden lg:block relative">
              <div className="aspect-square rounded-full bg-[#F8FAFC] flex items-center justify-center relative border border-gray-100 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/5 to-[#2563EB]/5 rounded-full" />
                
                {/* Simulated Chart Elements */}
                <div className="relative w-3/4 h-3/4">
                  {/* Bar 1 */}
                  <div className="absolute bottom-0 left-[10%] w-[15%] h-[40%] bg-[#0B132B] rounded-t-sm" />
                  {/* Bar 2 */}
                  <div className="absolute bottom-0 left-[35%] w-[15%] h-[60%] bg-[#2563EB] rounded-t-sm" />
                  {/* Bar 3 */}
                  <div className="absolute bottom-0 left-[60%] w-[15%] h-[85%] bg-[#10B981] rounded-t-sm shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                  
                  {/* Line overlay */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 0,80 Q 25,70 50,40 T 100,10" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="50" cy="40" r="3" fill="#0B132B" stroke="#fff" strokeWidth="2" />
                    <circle cx="100" cy="10" r="3" fill="#10B981" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>

                {/* Floating badge */}
                <div className="floating-element absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Compliance Rate</div>
                    <div className="text-lg font-bold text-[#0B132B]">100%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Text Content */}
            <div className="gsap-slide-right lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-sm font-semibold mb-6">
                <Briefcase className="w-4 h-4" />
                <span>Practice Overview</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B132B] mb-6 tracking-tight">
                Comprehensive Tax Solutions for Modern Enterprises
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                The South African tax environment is dynamic and rigorously enforced. We provide expert advisory services that go beyond mere compliance. Our team meticulously analyzes your operational structure to formulate tax-efficient strategies that support sustainable growth.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Corporate Tax Compliance & Structuring",
                    desc: "Ensuring accurate submissions while structuring operations to legally minimize corporate tax liability within the confines of the Income Tax Act."
                  },
                  {
                    title: "SARS Dispute Resolution",
                    desc: "Expert representation during SARS audits, managing queries, objections, and appeals with authoritative knowledge of the Tax Administration Act."
                  },
                  {
                    title: "International Tax & Transfer Pricing",
                    desc: "Navigating cross-border transactions, double taxation agreements, and ensuring compliance with stringent transfer pricing regulations."
                  },
                  {
                    title: "High-Net-Worth Individual Tax",
                    desc: "Discreet, highly customized personal tax planning, estate duty minimization, and capital gains tax strategies."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0B132B] mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS SECTION (Bento Grid) */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="gsap-section-header text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B132B] mb-6 tracking-tight">
              Why Choose Our Tax Advisory Practice
            </h2>
            <p className="text-gray-600 text-lg">
              We combine deep technical expertise with commercial acumen to deliver tax solutions that create tangible value for your organization.
            </p>
          </div>

          <div className="gsap-benefits-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Benefit 1 */}
            <div className="gsap-benefit-card interactive-card bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
                <Zap className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B132B] mb-3">Maximized Efficiency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We identify legitimate opportunities for tax savings, utilizing available incentives, allowances, and structural optimizations to improve your bottom line.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="gsap-benefit-card interactive-card bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6 border border-green-100">
                <Shield className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B132B] mb-3">Strict Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mitigate risk with bulletproof tax submissions. We ensure absolute adherence to current legislation, protecting you from penalties and reputational damage.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="gsap-benefit-card interactive-card bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 border border-purple-100">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B132B] mb-3">Proactive Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tax shouldn't be a year-end surprise. We provide forward-looking strategies, integrating tax planning into your broader business decisions throughout the year.
              </p>
            </div>

            {/* Large Bento Item */}
            <div className="gsap-benefit-card interactive-card md:col-span-2 lg:col-span-3 bg-[#0B132B] rounded-2xl p-8 lg:p-12 relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2563EB]/40 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="md:w-2/3 relative z-10 mb-8 md:mb-0 md:pr-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-4">
                  <Globe className="w-4 h-4" />
                  <span>Global Standards, Local Expertise</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Navigating the complexities of cross-border taxation?</h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  For South African businesses expanding internationally, or foreign entities operating locally, our specialized international tax desk provides clarity on withholding taxes, permanent establishments, and repatriation of profits.
                </p>
              </div>
              
              <div className="md:w-1/3 relative z-10 flex justify-start md:justify-end w-full">
                <Link href="/contact" className="btn-hover-effect inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B132B] bg-white rounded-full hover:bg-gray-100 transition-colors w-full md:w-auto text-center min-h-[48px]">
                  Discuss Your Structure
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="gsap-cta-block interactive-card bg-[#0B132B] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-3xl">
              <div className="floating-element absolute -top-24 -left-24 w-64 h-64 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <div className="floating-element absolute -bottom-24 -right-24 w-64 h-64 bg-[#10B981] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
                Ready to Optimize Your Tax Position?
              </h2>
              <p className="text-lg text-gray-300 mb-10">
                Partner with John Hlongwani Associates to ensure compliance, minimize liabilities, and strategically plan for the future. Secure your financial foundation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-hover-effect w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#10B981] rounded-full hover:bg-[#059669] transition-colors shadow-lg shadow-[#10B981]/25 group min-h-[48px]">
                  Consult a Tax Expert
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-hover-effect w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors min-h-[48px]">
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
