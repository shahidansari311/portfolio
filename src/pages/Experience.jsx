import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiNextdotjs, SiVercel, SiRender
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { HiBriefcase, HiLocationMarker, HiCalendar, HiExternalLink } from 'react-icons/hi';

const experiences = [
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Silver Real Estate',
    type: 'Freelance',
    period: 'Aug 2026 – Present',
    location: 'Remote',
    status: 'active',
    logo: '🏠',
    accent: 'from-rose-500 to-red-600',
    glow: 'rgba(196,53,86,0.2)',
    description:
      'Architected and delivered a full-stack real estate web & mobile platform from scratch for Silver Real Estate. Owned the entire product lifecycle — from database design and REST API development to responsive UI, admin dashboard, and cloud deployment.',
    highlights: [
      'Built a property listing & advanced search portal with filtering by location, price range, property type, and amenities',
      'Designed a Node.js + Express.js REST API with JWT-based auth and role-based access control for buyers, sellers, and admins',
      'Created a React Native mobile app for iOS & Android with real-time property notifications and in-app messaging',
      'Deployed frontend on Vercel and backend on Render/AWS with CI/CD pipelines',
    ],
    tech: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

const Experience = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="experience">
      {/* Section glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full -z-10 blur-[160px]"
        style={{ background: 'rgba(196,53,86,0.06)' }}
      />

      <div className="content-wrap">
        <div className="section-header">
          <h2>WORK <span className="text-gradient">EXPERIENCE</span></h2>
          <div className="section-divider"></div>
        </div>
        <p className="text-slate-500 text-sm font-medium text-center max-w-md mx-auto mb-10 md:mb-12">
          Real-world projects delivered for clients — from architecture to deployment
        </p>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto">
        {/* Vertical line — starts just under the dot, not above it */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-[52px] bottom-0 w-px bg-gradient-to-b from-rose-500/60 via-rose-500/20 to-transparent" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-12"
          >
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={itemVariants} className="relative pl-20 md:pl-24">
                {/* Timeline dot — centered exactly on the vertical line */}
                <div className="absolute left-[14px] md:left-[22px] top-8 flex flex-col items-center">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-rose-500 flex items-center justify-center shadow-[0_0_16px_rgba(196,53,86,0.6)]"
                    style={{ background: '#050e10' }}
                  >
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                  </div>
                  {exp.status === 'active' && (
                    <div className="mt-2 flex flex-col items-center gap-1">
                      <span className="w-px h-3 bg-rose-500/40" />
                      <span
                        className="px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-rose-400 rounded-full border border-rose-500/20 whitespace-nowrap"
                        style={{ background: '#050e10' }}
                      >
                        Active
                      </span>
                    </div>
                  )}
                </div>

                {/* Card */}
                <div className="glass-card rounded-[36px] p-8 md:p-10 relative overflow-hidden group border border-white/5 hover:border-rose-500/20 transition-all duration-500">
                  {/* Glow */}
                  <div
                    className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: exp.glow }}
                  />
                  <div
                    className="absolute -top-1 left-10 right-10 h-px opacity-50"
                    style={{ background: `linear-gradient(to right, transparent, ${exp.glow.replace('0.2', '0.8')}, transparent)` }}
                  />

                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Company logo placeholder */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border border-white/10"
                        style={{ background: 'rgba(196,53,86,0.1)' }}
                      >
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-rose-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <span className="text-rose-400 font-bold text-sm">{exp.company}</span>
                          <span className="px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-rose-500/10 text-rose-400 rounded-full border border-rose-500/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                        <HiCalendar className="text-rose-500" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                        <HiLocationMarker className="text-teal-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key highlights */}
                  <div className="space-y-2 mb-8">
                    {exp.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: '#C43556' }}
                        />
                        <p className="text-slate-400 text-sm leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, j) => {
                        const Icon = t.icon;
                        return (
                          <span
                            key={j}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold bg-white/[0.03] border border-white/[0.06] text-slate-300 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-200"
                          >
                            <Icon style={{ color: t.color }} className="text-sm flex-shrink-0" />
                            {t.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Looking for more — CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-500 text-sm font-medium mb-4">
            Open to internships, freelance, and full-time opportunities
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-rose-600 text-sm font-black uppercase tracking-widest text-white hover:bg-rose-700 transition-all shadow-[0_10px_30px_-10px_rgba(196,53,86,0.5)] active:scale-95 hover:scale-105"
          >
            <HiBriefcase className="text-lg" />
            Let's Work Together
          </a>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Experience;
