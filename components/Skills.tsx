
import React from 'react';
import SectionHeading from './SectionHeading';
import { Globe2, MousePointer2, Presentation, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Microsoft Excel', icon: <MousePointer2 size={16} />, level: 'Expert' },
    { name: 'Data Reconciliation', icon: <CheckCircle2 size={16} />, level: 'Advanced' },
    { name: 'Workflow Optimization', icon: <CheckCircle2 size={16} />, level: 'Advanced' },
    { name: 'Microsoft PowerPoint', icon: <Presentation size={16} />, level: 'Advanced' },
    { name: 'Business Intelligence', icon: <Presentation size={16} />, level: 'Intermediate' },
  ];

  const languages = [
    { name: 'English', status: 'Native / Bilingual Fluency' },
    { name: 'Spanish', status: 'Native / Bilingual Fluency' }
  ];

  return (
    <section id="skills" className="py-24 bg-primary px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Skills & Languages" subtitle="Expertise Matrix" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical */}
          <div className="soft-reveal">
            <h3 className="font-heading text-2xl text-charcoal mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent"></span>
              Technical Proficiencies
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-charcoal flex items-center gap-2 group-hover:text-accent transition-colors">
                      {skill.icon}
                      {skill.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{skill.level}</span>
                  </div>
                  <div className="h-1 bg-secondary/50 rounded-full overflow-hidden">
                    <div className={`h-full bg-accent transition-all duration-1000 ${
                      skill.level === 'Expert' ? 'w-full' : 
                      skill.level === 'Advanced' ? 'w-[85%]' : 'w-[65%]'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Soft Skills */}
          <div className="soft-reveal delay-200">
            <h3 className="font-heading text-2xl text-charcoal mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent"></span>
              Bilingual Fluency
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {languages.map((lang, i) => (
                <div key={i} className="p-8 bg-secondary/20 rounded-2xl border border-secondary/30 text-center">
                  <Globe2 className="mx-auto text-accent mb-4" size={32} />
                  <h4 className="font-heading text-xl text-charcoal mb-2">{lang.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">{lang.status}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-charcoal text-white rounded-3xl shadow-lg">
              <h4 className="font-heading text-xl mb-4 text-accent">Strategic Mindset</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-4 italic">
                "My leadership experience in high-velocity retail environments has sharpened my ability to make rapid, data-driven decisions that impact both workflow and the bottom line."
              </p>
              <div className="flex gap-2">
                {['Leadership', 'Communication', 'Adaptability'].map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-tighter border border-white/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
