
import React from 'react';
import SectionHeading from './SectionHeading';
import { Briefcase, BarChart3, TrendingUp, Layout } from 'lucide-react';

const experiences = [
  {
    role: 'Keyholder',
    company: 'Perr&Knight',
    period: 'Current',
    description: 'Specializing in workflow optimization and detailed project data reconciliation.',
    icon: <BarChart3 className="text-accent" size={24} />,
    highlights: [
      'Spearheading administrative workflow improvements.',
      'Maintaining precise project data integrity for high-stakes reconciliation.',
      'Coordinating cross-departmental scheduling and reporting.'
    ]
  },
  {
    role: 'Keyholder',
    company: 'Paper Source',
    period: 'Previous',
    description: 'Drove operational excellence through leadership and visual storytelling.',
    icon: <Layout className="text-accent" size={24} />,
    highlights: [
      'Managed visual merchandising standards to drive foot traffic.',
      'Led sales team to exceed quarterly KPIs through personalized consulting.',
      'Optimized inventory tracking and replenishment workflows.'
    ]
  },
  {
    role: 'Keyholder',
    company: 'Everything But Water',
    period: 'Previous',
    description: 'Focused on high-touch sales strategies and retail leadership.',
    icon: <TrendingUp className="text-accent" size={24} />,
    highlights: [
      'Implemented strategic sales goals for store associates.',
      'Cultivated brand loyalty through superior customer relationship management.',
      'Analyzed daily sales metrics to adjust merchandising strategies.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-primary px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Professional History" subtitle="Experience Gallery" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 soft-reveal flex flex-col hover:shadow-md transition-shadow duration-300">
              <div className="mb-6 p-3 bg-secondary/20 w-fit rounded-xl">
                {exp.icon}
              </div>
              <span className="text-xs uppercase tracking-widest text-accent font-bold mb-2">{exp.period}</span>
              <h3 className="font-heading text-2xl text-charcoal mb-1">{exp.role}</h3>
              <p className="text-charcoal/50 font-bold mb-4">{exp.company}</p>
              <p className="text-charcoal/70 mb-6 flex-grow">{exp.description}</p>
              
              <ul className="space-y-3 border-t border-secondary/20 pt-6">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start text-sm text-charcoal/80 italic">
                    <span className="text-accent mr-2">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
