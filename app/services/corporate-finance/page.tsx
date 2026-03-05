'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, 
  ArrowRight, 
  Briefcase, 
  Zap, 
  Target, 
  Settings, 
  Globe, 
  Users, 
  Shield, 
  Check,
  Award
} from 'lucide-react';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function CorporateFinancePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    // 1. Hero Entrance Animation
    const heroTl = gsap.timeline();
    heroTl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
          .from('.hero-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
          .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 }, '-=0.6')
          .from('.hero-visual-element', { scale: 0.8, opacity: 0, duration: 1.2, ease: 'back.out(1.2)', stagger: 0.1 }, '-=1');

    // 2. Overview Section Animation
    gsap.from('.overview-header', {
      scrollTrigger: {
        trigger: '.overview-section',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // 3. Benefits Section Animation
    gsap.from('.benefits-header', {
      scrollTrigger: {
        trigger: '.benefits-section',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('.benefit-item', {
      scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // 4. CTA Section Scale Animation
    gsap.from('.cta-box', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%',
      },
      scale: 0.9,
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'back.out(1.4)'
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F8FAFC] text-[#0B132B] overflow-hidden">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 pt-24 pb-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link href="/services" className="hover:text-[#2563EB] transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-[#0B132B]">Corporate Finance</span>
        </div>
      </div>

      {/* 1. Hero Section (Split Layout) */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Premium Advisory Services</span>
          </div>
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#0B132B] mb-6 font-heading">
            Strategic Capital Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#10B981]">Modern Enterprises.</span>
          </h1>
          <p className="hero-desc text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Navigating complex financial landscapes requires precision. We provide tailored corporate finance advisory to drive growth, optimize capital, and execute transformative transactions across Sub-Saharan Africa.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#cta" className="hero-cta inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#0B132B] text-white font-medium hover:bg-[#2563EB] transition-colors shadow-lg shadow-blue-900/20 group">
              Discuss Your Corporate Strategy
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#overview" className="hero-cta inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-[#0B132B] font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Visual (Abstract CSS Art) */}
        <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden bg-[#0B132B] shadow-2xl shadow-blue-900/10 border border-gray-800 flex items-center justify-center group">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Glowing Orbs */}
          <div className="hero-visual-element absolute top-1/4 left-1/4 w-64 h-64 bg-[#2563EB] rounded-full mix-blend-screen filter blur-[80px] opacity-60 animate-pulse"></div>
          <div className="hero-visual-element absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#10B981] rounded-full mix-blend-screen filter blur-[90px] opacity-40"></div>
          
          {/* Center Graphic */}
          <div className="hero-visual-element relative z-10 w-48 h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#10B981]/20 rounded-2xl"></div>
            <Briefcase className="w-20 h-20 text-white opacity-90" />
            
            {/* Floating stats cards */}
            <div className="absolute -right-12 -top-8 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#10B981]">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">M&A Success</div>
                <div className="text-sm font-bold text-[#0B132B]">94%</div>
              </div>
            </div>
            
            <div className="absolute -left-16 -bottom-6 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2563EB]">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Capital Raised</div>
                <div className="text-sm font-bold text-[#0B132B]">R2.5B+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section (Text Block & Services Grid) */}
      <section id="overview" className="overview-section py-24 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="overview-header text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B132B] mb-6 font-heading">
              Comprehensive Corporate Finance Advisory
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We partner with boards, management teams, and shareholders to execute strategic transactions. Our approach combines rigorous analytical capabilities with deep local market knowledge to deliver exceptional outcomes.
            </p>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="service-card group p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3 font-heading">Mergers & Acquisitions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end advisory for buy-side and sell-side transactions. We handle target identification, structuring, negotiation, and execution, including complex cross-border deals and BEE consortium structuring.
              </p>
              <ul className="space-y-2">
                {['Buy-side & Sell-side Advisory', 'LBOs & MBOs', 'Joint Ventures & Strategic Alliances'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card group p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 text-[#10B981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3 font-heading">Capital Raising</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Securing the optimal capital structure for growth, acquisitions, or refinancing. We leverage our extensive network of institutional investors, private equity firms, and commercial banks across Africa.
              </p>
              <ul className="space-y-2">
                {['Equity Capital Markets', 'Debt Advisory & Structuring', 'Private Placement'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card group p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3 font-heading">Valuations & Fairness Opinions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Independent, robust valuation services for transactions, financial reporting, and dispute resolution. Our methodologies align with international best practices and JSE listing requirements.
              </p>
              <ul className="space-y-2">
                {['Business & Equity Valuations', 'Purchase Price Allocations', 'Independent Expert Reports'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 4 */}
            <div className="service-card group p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3 font-heading">Financial Restructuring</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic advice for distressed situations or companies seeking to optimize their balance sheets. We negotiate with creditors and stakeholders to stabilize operations and preserve value.
              </p>
              <ul className="space-y-2">
                {['Balance Sheet Optimization', 'Distressed M&A', 'Creditor Negotiations'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                    <Check className="w-4 h-4 text-[#10B981] mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Section (Bento Grid) */}
      <section className="benefits-section py-24 px-6 md:px-12 lg:px-24 bg-[#0B132B] text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2563EB]/10 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="benefits-header mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Why Choose John Hlongwani Associates for Corporate Finance
            </h2>
            <p className="text-gray-300 text-lg">
              We combine global standards with deep local expertise, ensuring your corporate transactions are executed flawlessly in the South African and broader African context.
            </p>
          </div>

          <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Benefit 1 */}
            <div className="benefit-item bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center mb-6 border border-[#2563EB]/30">
                <Globe className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Deep Market Insights</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unparalleled understanding of local regulatory environments, sector dynamics, and economic trends across Sub-Saharan Africa, enabling proactive strategy formulation.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="benefit-item bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#10B981]/20 flex items-center justify-center mb-6 border border-[#10B981]/30">
                <Users className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Extensive Network</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Direct access to key decision-makers, private equity funds, institutional investors, and strategic buyers to ensure optimal deal matching and competitive tension.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="benefit-item bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Rigorous Execution</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Meticulous due diligence, financial modeling, and transaction structuring. We manage the entire process to mitigate risks and ensure certainty of closure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section id="cta" className="cta-section py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="cta-box relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B132B] to-[#1a2b5e] p-10 md:p-16 text-center shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading tracking-tight">
                Ready to Elevate Your Corporate Strategy?
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Connect with our senior partners to discuss your capital requirements, acquisition targets, or strategic financial objectives in complete confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#10B981] text-white font-bold text-lg hover:bg-[#0e9f6e] transition-colors shadow-lg shadow-emerald-900/30 group">
                  Discuss Your Strategy
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
