'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Wealth Management', href: '/services/wealth-management' },
      { label: 'Corporate Finance', href: '/services/corporate-finance' },
      { label: 'Tax Advisory', href: '/services/tax-advisory' },
      { label: 'Audit & Assurance', href: '/services/audit-assurance' },
    ],
  },
  { label: 'Team', href: '/team' },
  { label: 'Insights', href: '/insights' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;
  const isChildActive = (children: { href: string }[]) => 
    children.some((child) => pathname === child.href);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-midnight-blue text-white p-2 rounded-lg group-hover:bg-emerald-accent transition-colors">
            <Building2 size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-tight text-midnight-blue">
              John Hlongwani
            </span>
            <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">
              Associates
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <div className="flex items-center gap-1 cursor-pointer py-2">
                  <Link 
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-emerald-accent ${
                      isActive(item.href) || isChildActive(item.children) 
                        ? 'text-emerald-accent' 
                        : 'text-midnight-blue'
                    }`}
                  >
                    {item.label}
                  </Link>
                  <ChevronDown size={14} className="text-midnight-blue group-hover:text-emerald-accent transition-transform group-hover:rotate-180" />
                  
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-glass border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-slate-50 hover:text-emerald-accent ${
                            isActive(child.href) ? 'text-emerald-accent bg-slate-50' : 'text-slate-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-emerald-accent py-2 ${
                    isActive(item.href) ? 'text-emerald-accent' : 'text-midnight-blue'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link 
            href="/contact" 
            className="bg-midnight-blue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-accent transition-colors shadow-soft"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-midnight-blue p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-glass transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <div 
                    className="flex items-center justify-between py-2 cursor-pointer"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <Link 
                      href={item.href}
                      className={`text-base font-medium ${
                        isActive(item.href) || isChildActive(item.children) ? 'text-emerald-accent' : 'text-midnight-blue'
                      }`}
                    >
                      {item.label}
                    </Link>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-emerald-accent' : 'text-midnight-blue'}`} 
                    />
                  </div>
                  <div className={`flex flex-col pl-4 border-l-2 border-slate-100 ml-2 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-48 mt-2' : 'max-h-0'}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={`py-2 text-sm ${
                          isActive(child.href) ? 'text-emerald-accent font-medium' : 'text-slate-600'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-2 text-base font-medium ${
                    isActive(item.href) ? 'text-emerald-accent' : 'text-midnight-blue'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link 
            href="/contact" 
            className="mt-4 bg-midnight-blue text-white text-center px-6 py-3 rounded-xl text-base font-medium hover:bg-emerald-accent transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
