import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerData = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Insights", href: "/insights" },
        { label: "Careers", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Services Overview", href: "/services" },
        { label: "Wealth Management", href: "/services/wealth-management" },
        { label: "Corporate Finance", href: "/services/corporate-finance" },
        { label: "Tax Advisory", href: "/services/tax-advisory" },
        { label: "Audit & Assurance", href: "/services/audit-assurance" }
      ]
    },
    {
      title: "Support & Legal",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" }
      ]
    }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-midnight-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-emerald-accent text-white p-2 rounded-lg">
                <Building2 size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight text-white">
                  John Hlongwani
                </span>
                <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">
                  Associates
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Premium financial institution providing world-class wealth management, corporate finance, tax advisory, and audit services.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <a href="tel:+27721771438" className="flex items-center gap-3 text-slate-300 hover:text-emerald-accent transition-colors text-sm">
                <Phone size={16} className="text-emerald-accent" />
                +27 72 177 1438
              </a>
              <a href="mailto:info@johnhlongwani.co.za" className="flex items-center gap-3 text-slate-300 hover:text-emerald-accent transition-colors text-sm">
                <Mail size={16} className="text-emerald-accent" />
                info@johnhlongwani.co.za
              </a>
              <div className="flex items-start gap-3 text-slate-300 text-sm">
                <MapPin size={16} className="text-emerald-accent shrink-0 mt-0.5" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerData.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-6">
              <h4 className="font-heading font-semibold text-white tracking-wide">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2026 John Hlongwani Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full hover:bg-emerald-accent">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full hover:bg-emerald-accent">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-full hover:bg-emerald-accent">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
