'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronRight, 
  ArrowRight, 
  Calendar, 
  ExternalLink,
  Mail,
  MessageCircle
} from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Mock Data for Articles ---
const featuredArticle = {
  title: "Navigating the South African Economic Outlook for 2024: Strategies for Resilience",
  excerpt: "An in-depth analysis of the SARB's monetary policy trajectory, currency fluctuations, and strategic positioning for South African enterprises amidst global headwinds.",
  category: "Economic Outlook",
  date: "October 12, 2023",
  readTime: "8 min read",
  slug: "#featured-article"
};

const articles = [
  {
    id: 1,
    title: "Demystifying SARS Corporate Tax Changes for 2024/2025",
    excerpt: "A comprehensive breakdown of the latest corporate tax amendments and how they impact compliance and strategic planning for mid-sized enterprises.",
    category: "Tax Tips",
    date: "September 28, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&q=80",
    color: "from-blue-900 to-[#0B132B]",
    slug: "#tax-article"
  },
  {
    id: 2,
    title: "JSE Mid-Cap Opportunities: Identifying Value in a Volatile Market",
    excerpt: "Where are the hidden gems? Our analysts explore sector-specific growth potential within the Johannesburg Stock Exchange's mid-cap tier.",
    category: "Market Updates",
    date: "September 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80",
    color: "from-[#0B132B] to-emerald-900",
    slug: "#market-article"
  },
  {
    id: 3,
    title: "Structuring Employee Trusts (B-BBEE) for Long-Term Value",
    excerpt: "Best practices for establishing and managing employee share ownership schemes that drive empowerment while maintaining corporate efficiency.",
    category: "Corporate Strategy",
    date: "August 30, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&q=80",
    color: "from-slate-800 to-[#0B132B]",
    slug: "#corporate-article"
  },
  {
    id: 4,
    title: "The Rise of Green Finance in South Africa's Energy Transition",
    excerpt: "Exploring funding mechanisms, tax incentives, and investment strategies for businesses adopting renewable energy solutions.",
    category: "Market Updates",
    date: "August 12, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop&q=80",
    color: "from-emerald-800 to-teal-900",
    slug: "#green-finance-article"
  },
  {
    id: 5,
    title: "Estate Planning: Protecting Wealth Across Generations in SA",
    excerpt: "Navigating exchange controls, offshore trusts, and local estate duty to ensure seamless intergenerational wealth transfer.",
    category: "Wealth Management",
    date: "July 25, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80",
    color: "from-indigo-900 to-[#0B132B]",
    slug: "#wealth-article"
  },
  {
    id: 6,
    title: "Cash Flow Management Strategies for SMEs Facing Headwinds",
    excerpt: "Actionable liquidity management techniques to help South African SMEs thrive despite inflation and fluctuating interest rates.",
    category: "Corporate Strategy",
    date: "July 10, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    color: "from-gray-800 to-slate-900",
    slug: "#cashflow-article"
  }
];

export default function InsightsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(['.hero-elem', '.featured-post', '.article-card', '.newsletter-box', '.cta-section'], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    // 1. Hero Entrance Animation
    const heroTl = gsap.timeline();
    heroTl.from('.hero-elem', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.1
    });

    // 2. Featured Post Fade-in
    gsap.from('.featured-post', {
      scrollTrigger: {
        trigger: '.featured-post',
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    // 3. Staggered Grid Cards
    ScrollTrigger.batch('.article-card', {
      start: 'top 85%',
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out'
        });
      },
      once: true
    });

    // 4. Newsletter Scale-up
    gsap.from('.newsletter-box', {
      scrollTrigger: {
        trigger: '.newsletter-box',
        start: 'top 85%',
      },
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.2)'
    });

    // 5. CTA Section
    gsap.from('.cta-section', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

  }, { scope: containerRef });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Mock newsletter subscription - in production, this would call an API
    console.log('Newsletter subscription for:', email);
    alert('Thank you for subscribing to our newsletter!');
    form.reset();
  };

  return (
    <main ref={containerRef} className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0B132B] text-white pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav className="hero-elem flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Insights</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="hero-elem text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight leading-tight mb-6">
              Market Intelligence & <br/>
              <span className="text-[#10B981]">Financial Strategies.</span>
            </h1>
            <p className="hero-elem text-lg md:text-xl text-gray-300 font-sans leading-relaxed mb-8">
              Expert analysis, tax updates, and corporate strategies tailored for the South African business landscape. Stay ahead of the curve with insights from John Hlongwani Associates.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURED ARTICLE SECTION --- */}
      <section className="px-6 md:px-12 lg:px-24 -mt-12 relative z-20" id="featured-article">
        <div className="max-w-7xl mx-auto">
          <div className="featured-post block group">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
              
              {/* Featured Article Image */}
              <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80"
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4 text-sm font-medium">
                  <span className="text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full">{featuredArticle.category}</span>
                  <span className="text-gray-500 flex items-center"><Calendar className="w-4 h-4 mr-1" /> {featuredArticle.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-[#0B132B] mb-4 group-hover:text-[#2563EB] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-[#0B132B] font-semibold group-hover:text-[#10B981] transition-colors mt-auto">
                  <span>Read Full Article</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- ARTICLE GRID SECTION --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-[#0B132B] mb-2">Latest Insights</h2>
              <p className="text-gray-600">Explore our recent publications across various financial disciplines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              return (
                <div key={article.id} id={article.slug.replace('#', '')} className="article-card block group h-full">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                    
                    {/* Article Thumbnail */}
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3 text-xs font-medium">
                        <span className="text-[#10B981] uppercase tracking-wider">{article.category}</span>
                        <span className="text-gray-400">{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-[#0B132B] mb-3 group-hover:text-[#2563EB] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto flex items-center text-sm font-semibold text-[#0B132B] group-hover:text-[#10B981] transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button (Visual only) */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#0B132B] text-[#0B132B] font-semibold rounded-lg hover:bg-[#0B132B] hover:text-white transition-colors duration-300">
              Load More Articles
            </button>
          </div>

        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto newsletter-box">
          <div className="bg-[#0B132B] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB] rounded-full filter blur-[100px] opacity-30 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#10B981] rounded-full filter blur-[100px] opacity-20 -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <Mail className="w-12 h-12 text-[#10B981] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-4">
                Subscribe to our Monthly Insights
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
                Get the latest financial news, tax updates, and strategic market analysis delivered directly to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  className="flex-grow px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent backdrop-blur-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="px-8 py-4 rounded-lg bg-[#10B981] text-white font-semibold hover:bg-emerald-500 transition-colors duration-300 whitespace-nowrap shadow-lg shadow-emerald-900/50"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="cta-section py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-20 text-center">
          <h2 className="text-3xl font-heading font-semibold text-[#0B132B] mb-4">
            Need personalized financial advice?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our insights provide a foundation, but every business is unique. Contact our expert consultants to discuss how these economic trends impact your specific corporate strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0B132B] text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300 w-full sm:w-auto"
            >
              Contact Our Team <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 text-[#0B132B] font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-[#10B981]" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
