import React from 'react';
import { HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Project Manager, TechFlow",
    text: "Shahid's ability to translate complex logic into seamless UI is unparalleled. He's not just a developer; he's a digital architect who understands the user journey.",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Founder, GreenLeaf Solutions",
    text: "The MERN stack expertise Shahid brought to our project was a game-changer. Scalability and performance were evident from day one. Highly recommended!",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Rodriquez",
    role: "Lead Engineer, BlueSky Apps",
    text: "Extremely dedicated and precise. Shahid's problem-solving skills saved us weeks of development time. A true asset to any engineering team.",
    stars: 5,
    avatar: "https://i.pravatar.cc/150?u=michael"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding py-24 relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
          KUDOS & <span className="text-gradient">FEEDBACK</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div 
            key={index} 
            className="cursor-target glass-card p-10 rounded-[40px] relative group h-full flex flex-col"
          >
            <div className="absolute top-10 right-10 opacity-5 text-indigo-400 group-hover:opacity-20 transition-all duration-500">
              <FaQuoteLeft size={60} />
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(t.stars)].map((_, i) => (
                <HiStar key={i} className="text-yellow-500" />
              ))}
            </div>

            <p className="text-slate-300 italic mb-10 leading-relaxed font-medium flex-1">
              "{t.text}"
            </p>

            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:border-indigo-500/50 transition-all">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-white font-bold tracking-tight">{t.name}</h4>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
