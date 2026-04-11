import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: "SAH 2.0 - Smart ABES Hackathon",
    position: "1st Runner-Up (2nd Place)",
    organization: "ABES Engineering College",
    year: "2025",
    description: "Secured 2nd place out of teams from colleges across India in this national-level hackathon, delivering a working full-stack prototype under time constraints.",
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "KIET AI Arena Hackathon",
    position: "3rd Runner-Up",
    organization: "KIET Group of Institutions",
    year: "2025",
    description: "Achieved 3rd Runner-Up position out of 150+ participating teams. Developed an innovative AI-driven solution integrating advanced models and robust backend architecture.",
    color: "from-purple-500/20 to-pink-500/20"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Achievements = () => {
  return (
    <section className="section-padding py-24 relative overflow-hidden" id="achievements">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />
      
      {/* Header */}
      <div className="flex flex-col items-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
            MY <span className="text-gradient">ACHIEVEMENTS</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto" />
        </motion.div>
      </div>

      <motion.div 
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievementsData.map((achievement, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Tilt 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              scale={1.02} 
              transitionSpeed={2500} 
              className="h-full cursor-pointer"
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
            >
              <div className={`h-full glass-card p-8 rounded-[32px] border border-white/10 relative overflow-hidden bg-gradient-to-br ${achievement.color}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10" />
                
                <h3 className="text-2xl font-black text-white mb-2">{achievement.title}</h3>
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                   <span className="px-3 py-1 text-xs font-black uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded-lg">
                     {achievement.position}
                   </span>
                   <span className="text-sm font-bold text-slate-400">{achievement.year}</span>
                </div>
                
                <h4 className="text-sm font-bold text-slate-300 mb-4">{achievement.organization}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
