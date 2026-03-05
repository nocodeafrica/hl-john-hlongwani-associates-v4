'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Eye, 
  Check, 
  Target, 
  Briefcase, 
  Search, 
  ArrowRight, 
  ChevronRight,
  Award,
  Zap
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AuditAssurancePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Hero Animations
    const heroTl = gsap.timeline();
    heroTl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
          .from('.hero-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
          .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
          .from('.hero-actions > *', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' }, '-=0.4')
          .from('.hero-visual-bg', { scale: 0.9, opacity: 0, duration: 1.2, ease: 'power2.out' }, '-=0.8')
          .from('.hero-visual-element', { 
            y: 30, 
            opacity: 0, 
            stagger: 0.15, 
            duration: 0.8, 
            ease: 'back.out(1.2)' 
          }, '-=0.6');

    // Overview Section Animations
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

    gsap.from('.bento-item', {
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Benefits Section Animations
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

    gsap.from('.benefit-card', {
      scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 85%',
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    });

    // CTA Animation
    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
      },
      scale: 0.95,
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.2)'
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#F8FAFC] text-[#0B132B] min-h-screen overflow-hidden">
      
      {/* Breadcrumbs */}
      <div className="pt-24 pb-4 px-6 md:px-12 max-w-7xl mx-auto">
        <nav className="flex items-center text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link href="/services" className="hover:text-[#10B981] transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-[#0B132B]">Audit & Assurance</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Hero Content */}
          <div className="max-w-2xl">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>Premium Assurance Services</span>
            </div>
            
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B132B] mb-6 leading-[1.1]">
              Transparency and Trust for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#10B981]">Stakeholders.</span>
            </h1>
            
            <p className="hero-desc text-lg text-gray-600 mb-8 leading-relaxed">
              Rigorous, independent audit services designed to safeguard your business, ensure compliance with the South African Companies Act, and build unwavering stakeholder confidence in an evolving regulatory landscape.
            </p>
            
            <div className="hero-actions flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#0B132B] text-white font-medium hover:bg-[#1a295c] transition-all duration-300 group shadow-lg shadow-blue-900/20"
              >
                Request an Audit Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#overview" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white text-[#0B132B] font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Hero Visual (CSS Art) */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
            <div className="hero-visual-bg absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#10B981]/10 rounded-3xl blur-3xl transform -rotate-6"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main abstract card */}
              <div className="hero-visual-element relative w-[380px] h-[420px] bg-[#0B132B] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col p-6 z-10">
                {/* Decorative header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-white/40 text-xs font-mono">AUDIT_REPORT_2026.SYS</div>
                </div>

                {/* Abstract Data Rows */}
                <div className="space-y-4 flex-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 2 ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-white/5 text-white/50'}`}>
                          {i === 1 ? <Search className="w-4 h-4" /> : i === 2 ? <Check className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                          <div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                      <div className={`h-2 w-12 rounded-full ${i === 2 ? 'bg-[#10B981]' : 'bg-white/10'}`}></div>
                    </div>
                  ))}
                </div>

                {/* Bottom Status */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#10B981] text-sm font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
                    Compliance Verified
                  </div>
                  <Shield className="w-5 h-5 text-white/20" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="hero-visual-element absolute -right-6 top-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B132B]">IFRS Compliant</div>
                  <div className="text-xs text-gray-500">Global Standards</div>
                </div>
              </div>

              <div className="hero-visual-element absolute -left-8 bottom-32 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0B132B]">Risk Mitigation</div>
                  <div className="text-xs text-gray-500">Proactive Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section (Bento Box) */}
      <section id="overview" className="overview-section py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="overview-header max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B132B] mb-4">Comprehensive Assurance Frameworks</h2>
            <p className="text-lg text-gray-600">
              Beyond merely ticking boxes, our audit methodology is designed to provide deep operational insights while ensuring strict adherence to South African regulatory requirements and international standards.
            </p>
          </div>

          <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Main Feature - Spans 2 columns */}
            <div className="bento-item md:col-span-2 bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2563EB]/5 to-transparent rounded-bl-full -z-10"></div>
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B132B] mb-3">Statutory Audits</h3>
              <p className="text-gray-600 max-w-xl leading-relaxed">
                Mandatory audits conducted in strict accordance with the South African Companies Act and International Standards on Auditing (ISAs). We provide an independent opinion on the fairness of your financial statements, giving your investors, lenders, and the CIPC absolute confidence in your reported figures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bento-item bg-[#0B132B] rounded-2xl p-8 border border-[#0B132B] shadow-sm text-white relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#10B981]/20 to-transparent rounded-tl-full -z-0"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#10B981] mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Internal Audits</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Evaluating and improving the effectiveness of risk management, control, and governance processes. We act as a strategic partner to optimize your internal operations and prevent fraud.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bento-item bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:border-[#10B981]/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#0B132B] mb-6 group-hover:bg-[#10B981]/10 group-hover:text-[#10B981] transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B132B] mb-3">Risk Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proactive identification and assessment of financial, operational, and strategic risks. We help you implement robust frameworks aligned with King IV principles to mitigate threats before they materialize.
              </p>
            </div>

            {/* Feature 4 - Spans 2 columns */}
            <div className="bento-item md:col-span-2 bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
                <Shield className="w-64 h-64 translate-x-1/4 translate-y-1/4" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-6">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B132B] mb-3">Compliance & Regulatory Reviews</h3>
              <p className="text-gray-600 max-w-xl leading-relaxed">
                Navigating the complex South African regulatory environment. We conduct specialized reviews for B-BBEE readiness, SARS compliance, sector-specific charter adherence, and other statutory obligations to ensure your business remains in good standing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-24 relative overflow-hidden bg-[#0B132B]">
        {/* Abstract Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2563EB]/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#10B981]/20 to-transparent blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center cta-content">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm border border-white/20">
            <Shield className="w-8 h-8 text-[#10B981]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to secure your financial future?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with John Hlongwani Associates for audit and assurance services that deliver clarity, ensure compliance, and drive strategic value for your South African enterprise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#10B981] text-white font-semibold text-lg hover:bg-[#0d9668] transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Request an Audit Consultation
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-transparent text-white font-semibold text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              Contact via WhatsApp
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
