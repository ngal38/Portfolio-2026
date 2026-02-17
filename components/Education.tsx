
import React from 'react';
import SectionHeading from './SectionHeading';
import { GraduationCap, Award, FileSpreadsheet } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-secondary/10 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Education & Expertise" subtitle="Academic Background" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Academic Credentials */}
          <div className="space-y-8 soft-reveal">
            <div className="bg-white p-8 rounded-3xl shadow-sm flex items-start gap-6 border border-white">
              <div className="hidden sm:flex p-4 bg-secondary/30 rounded-full shrink-0">
                <GraduationCap className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-charcoal mb-2">Master of Science in Business Analytics</h3>
                <p className="text-accent font-bold mb-4">Florida Atlantic University (FAU)</p>
                <p className="text-charcoal/70 leading-relaxed italic">
                  Advanced training in statistical modeling, data mining, and strategic business intelligence.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm flex items-start gap-6 border border-white">
              <div className="hidden sm:flex p-4 bg-secondary/30 rounded-full shrink-0">
                <Award className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-charcoal mb-2">Bachelor of International Business</h3>
                <p className="text-accent font-bold mb-4">Florida Atlantic University (FAU)</p>
                <p className="text-charcoal/70 leading-relaxed italic">
                  Focus on global market dynamics, supply chain, and cross-cultural management.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Certification */}
          <div className="soft-reveal delay-200">
            <div className="bg-gradient-to-br from-white to-champagne p-10 rounded-3xl shadow-lg border-2 border-accent/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileSpreadsheet size={160} className="text-accent" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-accent text-white text-[10px] uppercase tracking-widest font-bold rounded-full mb-6">
                  Featured Certification
                </span>
                <h3 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">Microsoft Excel Specialist</h3>
                <div className="flex items-center gap-3 text-accent font-bold mb-6">
                  <FileSpreadsheet size={20} />
                  <span>Certified Nov 2022</span>
                </div>
                <p className="text-charcoal/80 mb-8 max-w-md leading-relaxed">
                  Proficiency in advanced data analysis, complex formula architecture, and automated dashboard creation.
                </p>
                <div className="w-full h-2 bg-accent/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-accent rounded-full"></div>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mt-3 text-right">Expert Proficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
