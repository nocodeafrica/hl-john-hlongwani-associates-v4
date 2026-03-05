'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Shield, 
  Zap, 
  Award, 
  Heart, 
  ArrowRight, 
  Target, 
  Eye,
  Users
} from 'lucide-react';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full bg-[#F8FAFC]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0B132B] text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-[#2563EB]/20 to-transparent blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#10B981]/10 to-transparent blur-[80px] rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="hero-element flex items-center space-x-2 text-sm text-white/60 mb-6 md:mb-8 font-medium animate-fade-in-up">
            <Link href="/" className="hover:text-white transition-colors min-h-[44px] flex items-center">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="hero-element text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-4 md:mb-6 animate-fade-in-up animation-delay-150">
              Built on <span className="text-[#10B981]">Trust.</span><br />
              Driven by Results.
            </h1>
            <p className="hero-element text-lg md:text-2xl text-white/80 leading-relaxed max-w-2xl font-light animate-fade-in-up animation-delay-300">
              We are a premier financial consultancy dedicated to providing strategic clarity and unparalleled advisory services to South Africa's most discerning individuals and enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="story-section py-20 md:py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-sm font-bold tracking-widest text-[#2563EB] uppercase mb-3">Our Heritage</h2>
                <h3 className="text-2xl md:text-4xl font-bold text-[#0B132B] leading-tight">
                  A legacy of excellence, forged in Johannesburg.
                </h3>
                <div className="w-12 h-1 bg-[#10B981] mt-6 md:mt-8 rounded-full"></div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-8 space-y-6 md:space-y-8 text-base md:text-lg text-[#0B132B]/70 leading-relaxed">
              <p className="story-text text-lg md:text-2xl font-medium text-[#0B132B] leading-snug">
                Founded in 2008 amidst the complexities of a shifting global economy, John Hlongwani Associates was established with a singular, unwavering vision: to restore absolute transparency and strategic foresight to financial advisory.
              </p>
              <p className="story-text">
                Operating initially from a small boutique office in Sandton, John Hlongwane recognized a critical gap in the market. Clients were receiving generic, institutionalized advice that failed to account for their unique operational realities and long-term aspirations. He believed that true financial consultancy required a deep, almost forensic understanding of a client's entire financial ecosystem.
              </p>
              <p className="story-text">
                Over the past decade and a half, our firm has evolved from a specialized local practice into one of South Africa's most respected financial consultancy firms. We have navigated market volatilities, legislative changes, and economic shifts alongside our clients, always acting as their steadfast strategic partner.
              </p>
              <p className="story-text">
                Today, John Hlongwane Associates represents a collective of brilliant financial minds—analysts, strategists, and advisors—who share the founding ethos of integrity, precision, and client-centricity. We don't just manage wealth; we architect financial futures.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="mv-section py-20 md:py-24 bg-white relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <div className="mv-card bg-[#F8FAFC] p-8 md:p-14 rounded-3xl border border-[#0B132B]/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 md:w-16 h-14 md:h-16 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                <Target className="w-7 md:w-8 h-7 md:h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B132B] mb-3 md:mb-4">Our Mission</h3>
              <p className="text-base md:text-lg text-[#0B132B]/70 leading-relaxed">
                Empowering South African clients through strategic financial clarity. We exist to decode complex financial landscapes, providing actionable insights that enable sustainable wealth creation, operational efficiency, and long-term security.
              </p>
            </div>

            {/* Vision Card */}
            <div className="mv-card bg-[#0B132B] p-8 md:p-14 rounded-3xl border border-[#0B132B] shadow-xl text-white hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 md:w-16 h-14 md:h-16 bg-[#10B981]/20 rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                <Eye className="w-7 md:w-8 h-7 md:h-8 text-[#10B981]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Our Vision</h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                To be universally recognized as South Africa's most trusted and authoritative financial advisory firm. We strive to set the industry benchmark for integrity, innovative strategy, and uncompromising performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="values-section py-20 md:py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-24">
            <h2 className="text-sm font-bold tracking-widest text-[#10B981] uppercase mb-3">Core Principles</h2>
            <h3 className="text-2xl md:text-5xl font-bold text-[#0B132B]">
              The values that drive us.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {[
              {
                icon: <Shield className="w-6 h-6 text-[#2563EB]" />,
                title: "Integrity",
                desc: "Unwavering ethical standards in every recommendation, transaction, and interaction. Trust is our primary currency.",
                bg: "bg-[#2563EB]/5"
              },
              {
                icon: <Zap className="w-6 h-6 text-[#10B981]" />,
                title: "Innovation",
                desc: "Continuously evolving our strategies to leverage new market opportunities and technological advancements.",
                bg: "bg-[#10B981]/5"
              },
              {
                icon: <Award className="w-6 h-6 text-[#2563EB]" />,
                title: "Excellence",
                desc: "A commitment to delivering world-class service and rigorous, data-backed financial analysis.",
                bg: "bg-[#2563EB]/5"
              },
              {
                icon: <Heart className="w-6 h-6 text-[#10B981]" />,
                title: "Client-Centricity",
                desc: "Your goals are our blueprint. We build bespoke solutions tailored exclusively to your unique circumstances.",
                bg: "bg-[#10B981]/5"
              }
            ].map((value, idx) => (
              <div key={idx} className="value-card bg-white p-6 md:p-8 rounded-2xl border border-[#0B132B]/5 shadow-sm hover:-translate-y-1 transition-transform duration-300 group">
                <div className={`w-12 md:w-14 h-12 md:h-14 ${value.bg} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#0B132B] mb-2 md:mb-3">{value.title}</h4>
                <p className="text-sm md:text-base text-[#0B132B]/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 5. Team Preview (CTA Card) */}
      <section className="team-cta-section py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-[#0B132B] text-white">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#10B981]/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
            
            <div className="team-cta-content relative z-10 px-6 py-12 md:py-24 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="max-w-2xl text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 md:mb-6">
                  <Users className="w-6 h-6 text-[#10B981]" />
                  <span className="text-[#10B981] font-semibold tracking-wider uppercase text-sm">Our People</span>
                </div>
                <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
                  Meet the minds behind your success.
                </h2>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Our strength lies in our collective expertise. Discover the seasoned analysts, visionary strategists, and dedicated advisors who make up the John Hlongwane Associates team.
                </p>
              </div>
              
              <div className="flex-shrink-0 w-full md:w-auto">
                <Link href="/team" className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B132B] bg-white rounded-full hover:bg-[#F8FAFC] transition-colors group min-h-[44px]">
                  View Leadership Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Global CTA */}
      <section className="final-cta-section py-20 md:py-24 bg-[#F8FAFC] border-t border-[#0B132B]/5">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="final-cta-element text-2xl md:text-5xl font-bold text-[#0B132B] mb-4 md:mb-6">
            Ready to secure your financial future?
          </h2>
          <p className="final-cta-element text-base md:text-lg text-[#0B132B]/70 mb-8 md:mb-10">
            Schedule a confidential consultation with our advisory team to discuss your unique financial objectives and discover how we can add measurable value to your portfolio.
          </p>
          <div className="final-cta-element flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2563EB] rounded-full hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-[#2563EB]/25 min-h-[44px]">
              Contact Us Today
            </Link>
            <Link href="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0B132B] bg-white border border-[#0B132B]/10 rounded-full hover:bg-gray-50 transition-colors min-h-[44px]">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
