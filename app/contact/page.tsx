'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  MessageCircle, 
  Send, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    if (!firstName?.trim()) errors.firstName = 'First name is required';
    if (!lastName?.trim()) errors.lastName = 'Last name is required';
    if (!email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!message?.trim()) errors.message = 'Message is required';
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});
    
    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.set(['.hero-elem', '.contact-anim', '.map-anim', '.cta-anim'], { opacity: 1, y: 0, x: 0 });
      return;
    }

    // Hero Animation
    const heroTl = gsap.timeline();
    heroTl.from('.hero-elem', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.1
    });

    // Contact Split Layout Animation
    gsap.from('.contact-left', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 75%',
      },
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('.contact-right', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 75%',
      },
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Info Cards Stagger
    gsap.from('.info-card', {
      scrollTrigger: {
        trigger: '.contact-right',
        start: 'top 80%',
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Map Animation
    gsap.from('.map-anim', {
      scrollTrigger: {
        trigger: '.map-section',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    // CTA Animation
    gsap.from('.cta-anim', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.2)'
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#F8FAFC] min-h-screen selection:bg-[#10B981] selection:text-white pb-20">
      
      {/* Hero Section */}
      <section className="relative bg-[#0B132B] text-white pt-32 pb-24 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav className="hero-elem flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="hero-elem text-5xl md:text-6xl font-semibold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
              Let's Discuss Your <span className="text-[#10B981]">Financial Future.</span>
            </h1>
            <p className="hero-elem text-lg text-slate-300 md:text-xl leading-relaxed max-w-2xl">
              Our team of specialists in Sandton is ready to assist you with bespoke financial solutions, tailored to your unique corporate or personal wealth needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Split Layout */}
      <section className="contact-section max-w-7xl mx-auto px-6 py-20 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left: Form */}
          <div className="contact-left lg:col-span-7 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0B132B] font-['Plus_Jakarta_Sans'] mb-2">Send us a secure message</h2>
              <p className="text-slate-500 text-sm">All communications are treated with the strictest confidentiality.</p>
            </div>

            {formState === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center h-[400px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B132B] mb-2">Message Received</h3>
                <p className="text-slate-600 mb-6 max-w-sm mx-auto">
                  Thank you for reaching out. A senior associate will contact you within 24 business hours.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.firstName ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:bg-white focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all outline-none text-slate-800`}
                      placeholder="John"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.lastName ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:bg-white focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all outline-none text-slate-800`}
                      placeholder="Hlongwani"
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:bg-white focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all outline-none text-slate-800`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all outline-none text-slate-800"
                      placeholder="+27 (0) 82 000 0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700">Area of Interest</label>
                  <select 
                    id="service" 
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all outline-none text-slate-800 appearance-none"
                  >
                    <option value="" disabled selected>Select a service...</option>
                    <option value="wealth">Wealth Management</option>
                    <option value="corporate">Corporate Finance</option>
                    <option value="tax">Tax Advisory</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'} focus:bg-white focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all outline-none text-slate-800 resize-none`}
                    placeholder="How can we assist you today?"
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <span>Send Confidential Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Details */}
          <div className="contact-right lg:col-span-5 flex flex-col space-y-6">
            
            {/* Direct Contact Card */}
            <div className="info-card bg-[#0B132B] text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB] rounded-full blur-[50px] opacity-30 pointer-events-none"></div>
              
              <h3 className="text-xl font-semibold font-['Plus_Jakarta_Sans'] mb-6">Direct Contact</h3>
              
              <div className="space-y-6 relative z-10">
                <a href="tel:+27112345678" className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#10B981] transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Main Switchboard</p>
                    <p className="font-medium text-white group-hover:text-[#10B981] transition-colors">+27 (0) 11 234 5678</p>
                  </div>
                </a>

                <a href="mailto:info@jhlongwani.co.za" className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#10B981] transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">General Enquiries</p>
                    <p className="font-medium text-white group-hover:text-[#10B981] transition-colors">info@jhlongwani.co.za</p>
                  </div>
                </a>

                <a href="https://wa.me/27820000000" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#10B981] transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">WhatsApp Support</p>
                    <p className="font-medium text-white group-hover:text-[#10B981] transition-colors">Message us directly</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Details Card */}
            <div className="info-card bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B132B] font-['Plus_Jakarta_Sans'] mb-6">Johannesburg Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0B132B] mb-1">Headquarters</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      The Leonardo, 75 Maude Street<br />
                      Sandton, Johannesburg<br />
                      2146, South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 shrink-0">
                    <Clock className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0B132B] mb-1">Business Hours</p>
                    <p className="text-slate-600 text-sm">
                      Monday - Friday: 08:00 - 17:00<br />
                      Weekend: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="map-section max-w-7xl mx-auto px-6 py-12">
        <div className="map-anim bg-white rounded-2xl p-2 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="w-full h-[500px] rounded-xl overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6174508730956!2d28.04603945!3d-26.107584499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95732c525f29d1%3A0x633215682885976b!2s75%20Maude%20St%2C%20Sandton%2C%202196%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0,
                borderRadius: '12px'
              }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="John Hlongwani Associates Office Location - The Leonardo, 75 Maude Street, Sandton"
            ></iframe>
            
            {/* Map Overlay with Office Info */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#0B132B] rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B132B] text-sm mb-1">John Hlongwani Associates</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Leonardo<br />
                    75 Maude Street<br />
                    Sandton, 2146
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Link */}
            <div className="absolute bottom-4 right-4">
              <a 
                href="https://www.google.com/maps/dir//75+Maude+St,+Sandton,+2196,+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B132B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1f35] transition-colors flex items-center space-x-2 shadow-lg"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cta-section max-w-5xl mx-auto px-6 pt-12">
        <div className="cta-anim bg-[#0B132B] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#2563EB] rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#10B981] rounded-full blur-[80px] opacity-20"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white font-['Plus_Jakarta_Sans'] mb-4">
              Require Immediate Assistance?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our partners are available for urgent consultations regarding complex corporate restructuring or critical tax advisory matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+27112345678"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#0B132B] font-semibold rounded-full hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call +27 11 234 5678</span>
              </a>
              <a 
                href="https://wa.me/27820000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
