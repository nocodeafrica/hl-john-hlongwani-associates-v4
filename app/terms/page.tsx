'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TermsOfServicePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set('.gsap-animate', { opacity: 1, y: 0 });
      return;
    }

    // Hero Animation
    const tl = gsap.timeline();
    tl.from('.hero-icon', { scale: 0.5, opacity: 0, duration: 0.6, ease: 'back.out(1.5)' })
      .from('.hero-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.hero-meta', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');

    // Content Sections Animation
    gsap.utils.toArray('.terms-section').forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // CTA Animation
    gsap.from('.cta-block', {
      scrollTrigger: {
        trigger: '.cta-block',
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-white min-h-screen pt-24 pb-20 text-[#0B132B]">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 gsap-animate">
        <nav className="flex text-sm text-[#0B132B]/60 font-medium">
          <Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#0B132B]">Terms of Service</span>
        </nav>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 border-b border-[#0B132B]/10 pb-12">
        <div className="hero-icon w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
          <Briefcase size={32} className="text-white" />
        </div>
        <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Terms of Service
        </h1>
        <div className="hero-meta flex items-center gap-4 text-sm text-[#0B132B]/60 font-medium">
          <span>Last Updated: January 1, 2024</span>
          <span className="w-1 h-1 rounded-full bg-[#0B132B]/30"></span>
          <span>John Hlongwani Associates</span>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate prose-headings:text-[#0B132B] prose-headings:font-bold prose-a:text-[#2563EB] hover:prose-a:text-[#0B132B] prose-p:text-[#0B132B]/80 prose-li:text-[#0B132B]/80">
        
        <div className="terms-section mb-12">
          <p className="lead text-xl text-[#0B132B] font-medium mb-8">
            These Terms of Service ("Terms") govern your access to and use of the website and professional services provided by John Hlongwani Associates. By engaging our services or accessing our website, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing our website or engaging John Hlongwani Associates for professional services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services or website.</p>
        </div>

        <div className="terms-section mb-12">
          <h2>2. Services Provided</h2>
          <p>John Hlongwani Associates provides professional accounting, tax preparation, financial advisory, and related services ("Services"). The specific scope of Services provided to you will be detailed in a separate Letter of Engagement or Service Agreement signed by both parties.</p>
          <p>We reserve the right to modify, suspend, or discontinue any aspect of our general website services at any time without notice. Professional engagements are governed by their specific contracts.</p>
        </div>

        <div className="terms-section mb-12">
          <h2>3. Client Responsibilities</h2>
          <p>To enable us to provide effective Services, you agree to:</p>
          <ul>
            <li>Provide accurate, complete, and timely information and documentation as requested.</li>
            <li>Maintain adequate internal controls and safeguard your assets.</li>
            <li>Ensure compliance with all applicable laws and regulations pertaining to your business.</li>
            <li>Review all financial statements, tax returns, and reports provided by us and notify us promptly of any errors or omissions.</li>
          </ul>
          <p>We rely on the information you provide and are not responsible for verifying its accuracy unless specifically engaged to do so (e.g., in an audit engagement).</p>
        </div>

        <div className="terms-section mb-12">
          <h2>4. Fees and Payment</h2>
          <p>Fees for our Services will be outlined in your specific Letter of Engagement. Unless otherwise agreed in writing:</p>
          <ul>
            <li>Invoices are payable upon receipt.</li>
            <li>We reserve the right to suspend Services if payment is not received within 30 days of the invoice date.</li>
            <li>You are responsible for any out-of-pocket expenses incurred by us in the performance of the Services, which will be billed separately.</li>
          </ul>
        </div>

        <div className="terms-section mb-12">
          <h2>5. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, John Hlongwani Associates, its partners, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
          <ul>
            <li>Your use or inability to use our Services.</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
            <li>Any errors, omissions, or misrepresentations in the information provided by you.</li>
          </ul>
          <p>Our total liability for any claims arising out of or relating to these Terms or our Services is limited to the amount you paid us for the specific Services giving rise to the claim in the twelve (12) months preceding the claim.</p>
        </div>

        <div className="terms-section mb-12">
          <h2>6. Termination</h2>
          <p>Either party may terminate an engagement for Services at any time by providing written notice to the other party, subject to the terms of the specific Letter of Engagement. Upon termination, you remain responsible for payment for all Services rendered and expenses incurred up to the date of termination.</p>
        </div>

        <div className="terms-section mb-12">
          <h2>7. Governing Law</h2>
          <p>These Terms and any dispute arising out of or related to them shall be governed by and construed in accordance with the laws of the jurisdiction in which our primary office is located, without regard to its conflict of law principles.</p>
        </div>

      </article>

      {/* CTA / Contact Footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 cta-block">
        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#0B132B]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#0B132B] mb-2">Need clarification on our terms?</h3>
            <p className="text-[#0B132B]/70">We are happy to discuss our engagement terms with you.</p>
          </div>
          <Link 
            href="/contact" 
            className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#0B132B] rounded-xl hover:bg-[#2563EB] transition-colors duration-300 group"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
