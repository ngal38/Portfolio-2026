
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16 soft-reveal">
      <h2 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">{title}</h2>
      {subtitle && <p className="text-accent uppercase tracking-widest text-sm font-bold">{subtitle}</p>}
      <div className="w-20 h-1 bg-accent/20 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
