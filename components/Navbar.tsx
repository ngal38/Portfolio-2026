
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-heading text-xl md:text-2xl font-bold text-charcoal tracking-tight">
          Natalie <span className="text-accent">Galvez</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-charcoal/70 hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="mailto:contact@nataliegalvez.com"
          className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm tracking-widest uppercase rounded-full"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
