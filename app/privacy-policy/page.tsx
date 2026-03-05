'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="bg-white min-h-screen pt-24 pb-20 text-[#0B132B]">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <nav className="flex text-sm text-[#0B132B]/60 font-medium">
          <Link href="/" className="hover:text-[#10B981] transition-colors min-h-[44px] min-w-[44px] flex items-center">Home</Link>
          <span className="mx-2 flex items-center">/</span>
          <span className="text-[#0B132B] flex items-center">Privacy Policy</span>
        </nav>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 border-b border-[#0B132B]/10 pb-16">
        <div className="w-16 h-16 bg-[#0B132B] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
          <Shield size={32} className="text-[#10B981]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Privacy Policy
        </h1>
        <div className="flex items-center gap-4 text-sm text-[#0B132B]/60 font-medium">
          <span>Effective Date: January 1, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#0B132B]/30"></span>
          <span>John Hlongwani Associates</span>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <p className="text-xl text-[#0B132B] font-medium mb-8 leading-relaxed">
            At John Hlongwani Associates, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our professional services. Please read this privacy policy carefully.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6 mt-8">1. Information We Collect</h2>
          <p className="text-[#0B132B]/80 mb-6 leading-relaxed">We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li className="text-[#0B132B]/80 leading-relaxed"><strong className="text-[#0B132B]">Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, and company details that you voluntarily give to us when engaging our services or contacting us.</li>
            <li className="text-[#0B132B]/80 leading-relaxed"><strong className="text-[#0B132B]">Financial Data:</strong> Data related to your business operations, tax records, and financial statements necessary to provide accounting and advisory services. This data is handled with the utmost confidentiality.</li>
            <li className="text-[#0B132B]/80 leading-relaxed"><strong className="text-[#0B132B]">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">2. How We Use Your Information</h2>
          <p className="text-[#0B132B]/80 mb-6 leading-relaxed">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site or our services to:</p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li className="text-[#0B132B]/80 leading-relaxed">Deliver professional accounting, tax, and advisory services.</li>
            <li className="text-[#0B132B]/80 leading-relaxed">Create and manage your client account.</li>
            <li className="text-[#0B132B]/80 leading-relaxed">Email you regarding your account or order.</li>
            <li className="text-[#0B132B]/80 leading-relaxed">Fulfill and manage purchases, orders, payments, and other transactions.</li>
            <li className="text-[#0B132B]/80 leading-relaxed">Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li className="text-[#0B132B]/80 leading-relaxed">Notify you of updates to our services or relevant regulatory changes.</li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">3. Disclosure of Your Information</h2>
          <p className="text-[#0B132B]/80 mb-6 leading-relaxed">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul className="list-disc pl-6 space-y-4 mb-8">
            <li className="text-[#0B132B]/80 leading-relaxed"><strong className="text-[#0B132B]">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            <li className="text-[#0B132B]/80 leading-relaxed"><strong className="text-[#0B132B]">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service. These providers are bound by strict confidentiality agreements.</li>
          </ul>
          <p className="text-[#0B132B]/80 italic leading-relaxed mb-8">We do not sell, rent, or trade your personal or financial information to third parties for marketing purposes.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">4. Data Security</h2>
          <p className="text-[#0B132B]/80 mb-8 leading-relaxed">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">5. Your Rights</h2>
          <p className="text-[#0B132B]/80 mb-8 leading-relaxed">Depending on your location, you may have the right to request access to the personal data we hold about you, to request that your personal data be corrected or deleted, or to object to the processing of your personal data. To exercise these rights, please contact us using the information provided below.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">6. Data Retention</h2>
          <p className="text-[#0B132B]/80 mb-8 leading-relaxed">We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. Client records are maintained in accordance with professional accounting standards and regulatory requirements.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">7. International Data Transfers</h2>
          <p className="text-[#0B132B]/80 mb-8 leading-relaxed">Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">8. Changes to This Privacy Policy</h2>
          <p className="text-[#0B132B]/80 mb-8 leading-relaxed">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.</p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#0B132B] mb-6">9. Contact Information</h2>
          <p className="text-[#0B132B]/80 mb-6 leading-relaxed">If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <div className="bg-[#F8FAFC] rounded-xl p-8 border border-[#0B132B]/10">
            <p className="text-[#0B132B] font-medium mb-2">John Hlongwani Associates</p>
            <p className="text-[#0B132B]/80 mb-1">Email: privacy@johnhlongwani.co.za</p>
            <p className="text-[#0B132B]/80 mb-1">Phone: +27 (0) 11 234 5678</p>
            <p className="text-[#0B132B]/80">Address: 123 Business District, Johannesburg, South Africa</p>
          </div>
        </div>

      </article>

      {/* CTA / Contact Footer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#0B132B]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#0B132B] mb-2">Questions about our privacy practices?</h3>
            <p className="text-[#0B132B]/70">Contact our compliance team for more information.</p>
          </div>
          <Link 
            href="/contact" 
            className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-[#0B132B] rounded-xl hover:bg-[#10B981] transition-colors duration-300 group min-h-[44px] min-w-[120px]"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
