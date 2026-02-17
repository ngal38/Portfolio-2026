
import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-champagne border-t border-secondary py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl text-charcoal mb-4">Natalie Galvez</h2>
          <p className="text-charcoal/50 max-w-sm">
            Bridging operational excellence with business analytics to drive strategic organizational growth.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@nataliegalvez.com" className="p-3 bg-white rounded-full shadow-sm hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-bold">
            © {new Date().getFullYear()} NATALIE GALVEZ | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
