
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-champagne overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/30 rounded-full blur-[120px] -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-full blur-[100px] -ml-20 -mb-20"></div>

      <div className="max-w-4xl px-6 text-center z-10 soft-reveal">
        <h2 className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4">
          Business Analytics & Administrative Strategy
        </h2>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-charcoal mb-8 leading-tight">
          Natalie Galvez
        </h1>
        <p className="font-body text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Bridging the gap between high-stakes retail leadership and data-driven business analysis. 
          Currently pursuing a Master’s in Business Analytics at FAU.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#experience" 
            className="px-8 py-4 bg-accent text-white rounded-full text-sm uppercase tracking-widest font-bold hover:bg-accent/90 transition-all duration-300 w-full sm:w-auto"
          >
            Explore My Work
          </a>
          <a 
            href="#education" 
            className="px-8 py-4 border border-accent/30 text-charcoal rounded-full text-sm uppercase tracking-widest font-bold hover:border-accent hover:bg-white transition-all duration-300 w-full sm:w-auto"
          >
            Education & Certs
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-accent/50" size={32} />
      </div>
    </section>
  );
};

export default Hero;
