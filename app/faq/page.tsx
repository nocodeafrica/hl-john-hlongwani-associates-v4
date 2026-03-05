'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageCircle, ArrowRight, Search, Zap, HelpCircle, FileText, Calculator } from 'lucide-react';

const faqs = [
  {
    category: "General Inquiries",
    icon: HelpCircle,
    questions: [
      {
        q: "What industries do you specialize in?",
        a: "John Hlongwani Associates provides financial and advisory services across a wide range of industries, including technology, manufacturing, real estate, healthcare, and retail. Our diverse expertise allows us to tailor our approach to the specific regulatory and financial landscapes of your sector."
      },
      {
        q: "How do I become a new client?",
        a: "Becoming a client begins with a complimentary initial consultation. You can schedule this by contacting us through our website or calling our office. During this meeting, we will discuss your specific needs and determine how our services can best add value to your business."
      },
      {
        q: "Where are your offices located?",
        a: "Our primary headquarters is located in the central business district, but we operate on a modern, hybrid model that allows us to serve clients nationally and internationally through secure digital platforms and virtual consultations."
      }
    ]
  },
  {
    category: "Tax Services",
    icon: Calculator,
    questions: [
      {
        q: "What is the deadline for corporate tax filing?",
        a: "Corporate tax deadlines vary depending on your fiscal year-end. Generally, returns are due within six months after the end of the financial year. We proactively manage these deadlines for our clients to ensure timely compliance and avoid any penalties."
      },
      {
        q: "Can you assist with international tax planning?",
        a: "Yes. Our team includes specialists in cross-border taxation. We help businesses navigate complex international tax treaties, transfer pricing documentation, and foreign income reporting to optimize global tax strategies."
      },
      {
        q: "What happens if my business is audited?",
        a: "If you face an audit, our firm will represent you. We handle all communication with tax authorities, prepare the necessary documentation, and defend your tax positions. Our goal is to resolve audits efficiently while minimizing stress and potential liabilities."
      }
    ]
  },
  {
    category: "Advisory & Accounting",
    icon: FileText,
    questions: [
      {
        q: "Do you offer outsourced CFO services?",
        a: "Absolutely. Our Virtual CFO services provide you with high-level financial strategy, cash flow management, and forecasting without the cost of a full-time executive. This is ideal for growing businesses that need expert financial guidance."
      },
      {
        q: "What accounting software do you support?",
        a: "We are proficient in and partner with all major cloud accounting platforms, including Xero, QuickBooks Online, and Sage. We can also assist in migrating your legacy systems to modern, efficient cloud-based solutions."
      },
      {
        q: "How often will we receive financial reports?",
        a: "Reporting frequency is customized to your needs. Most of our advisory clients receive comprehensive monthly management accounts, complete with KPI dashboards and strategic insights, followed by a review meeting with their dedicated partner."
      }
    ]
  }
];

export default function FAQPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <main ref={containerRef} className="bg-[#F8FAFC] min-h-screen pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex text-sm text-[#0B132B]/60 font-medium">
          <Link href="/" className="hover:text-[#10B981] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#0B132B]">FAQ</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] font-semibold text-sm mb-6 border border-[#10B981]/20 animate-fade-in-up">
          <Zap size={16} />
          <span>Knowledge Base</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B132B] mb-6 tracking-tight animate-fade-in-up animation-delay-150">
          Frequently Asked <span className="text-[#10B981]">Questions</span>
        </h1>
        <p className="text-lg md:text-xl text-[#0B132B]/70 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          Find answers to common questions about our services, processes, and how we can help your business achieve financial excellence.
        </p>
        
        <div className="relative max-w-xl mx-auto animate-fade-in-up animation-delay-300">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#0B132B]/40" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 border border-[#0B132B]/10 rounded-2xl bg-white shadow-sm focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all outline-none text-[#0B132B] placeholder-[#0B132B]/40"
            placeholder="Search for questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={catIndex} className="mb-12 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6 border-b border-[#0B132B]/10 pb-4">
                  <div className="w-8 h-8 bg-[#10B981]/10 rounded-lg flex items-center justify-center text-[#10B981]">
                    <IconComponent size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B132B]">
                    {category.category}
                  </h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const isOpen = openItems[`${catIndex}-${qIndex}`];
                    return (
                      <div 
                        key={qIndex} 
                        className={`bg-white rounded-2xl border transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'border-[#10B981] shadow-md' : 'border-[#0B132B]/10 hover:border-[#0B132B]/30'}`}
                      >
                        <button
                          onClick={() => toggleItem(catIndex, qIndex)}
                          className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
                          aria-expanded={isOpen}
                        >
                          <span className={`font-semibold text-lg pr-8 transition-colors duration-300 ${isOpen ? 'text-[#10B981]' : 'text-[#0B132B] group-hover:text-[#10B981]'}`}>
                            {item.q}
                          </span>
                          <span className={`flex-shrink-0 transition-all duration-500 ease-in-out ${isOpen ? 'text-[#10B981] rotate-180' : 'text-[#0B132B]/50 group-hover:text-[#10B981]'}`}>
                            <ChevronDown size={20} />
                          </span>
                        </button>
                        <div 
                          className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                          style={{
                            transitionProperty: 'max-height, opacity, padding',
                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <p className="text-[#0B132B]/70 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#0B132B]/10 animate-fade-in-up">
            <Search className="h-12 w-12 text-[#0B132B]/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0B132B] mb-2">No results found</h3>
            <p className="text-[#0B132B]/60">We couldn't find any questions matching "{searchQuery}".</p>
          </div>
        )}
      </section>

      {/* Contact Prompt CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B132B] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden animate-fade-in-up">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#10B981]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#10B981]">
              <MessageCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, our team is here to help. Reach out to us directly for personalized assistance.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#0B132B] bg-[#10B981] rounded-xl hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] group"
            >
              Contact Our Team
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
