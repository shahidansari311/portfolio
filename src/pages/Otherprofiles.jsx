import React, { useMemo } from 'react';
import Profilecard from '../components/Profilecard';

const profiles = [
  { handle: "shahid310",       platform: "LeetCode",         link: "https://leetcode.com/u/shahid310/" },
  { handle: "shahidansari310", platform: "HackerRank",       link: "https://www.hackerrank.com/profile/shahidansari310" },
  { handle: "shahidansari",    platform: "Google Developer",  link: "https://developers.google.com/profile/u/shahidansari" },
  { handle: "shahid_310",      platform: "CodeChef",          link: "https://www.codechef.com/users/shahid_310" },
  { handle: "_shahid_129_",    platform: "Instagram",         link: "https://www.instagram.com/_shahid_129_/" },
];

const STATS = {
  totalSolved:      612,
  easySolved:       114,
  mediumSolved:     39,
  hardSolved:       1,
  totalActiveDays:  97,
  totalContests:    11,
  globalRank:       '12,594',
  publicRepos:      20,
  codechefRating:   986,
  codechefMaxRating:1198,
  dsaTopics: [
    { name: 'Arrays',        count: 85 },
    { name: 'Binary Search', count: 24 },
    { name: 'Two Pointers',  count: 23 },
    { name: 'Math',          count: 23 },
    { name: 'HashMap & Set', count: 20 },
    { name: 'String',        count: 19 },
    { name: 'Sorting',       count: 19 },
    { name: 'Algorithms',    count: 14 },
  ],
};

// Small SVG radial ring
const Ring = ({ solved, label, color }) => {
  const r = 36, sw = 7;
  const circ = 2 * Math.PI * r;
  const dash = (solved / (STATS.totalSolved)) * circ * 1.8;
  const cx = r + sw / 2 + 2;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={cx * 2} height={cx * 2} className="-rotate-90">
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={sw} />
        <circle
          cx={cx} cy={cx} r={r}
          fill="none" stroke={color} strokeWidth={sw}
          strokeDasharray={`${Math.min(dash, circ)} ${circ}`}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 4px ${color}80)` }}
        />
        <text
          x="50%" y="50%"
          textAnchor="middle" dominantBaseline="middle"
          style={{ font: 'bold 14px sans-serif', fill: '#fff' }}
          transform={`rotate(90, ${cx}, ${cx})`}
        >
          {solved}
        </text>
      </svg>
      <span className="text-[9px] font-black uppercase tracking-widest" style={{ color }}>{label}</span>
    </div>
  );
};

const Otherprofiles = () => {
  const grid = useMemo(() =>
    [...Array(84)].map((_, i) => {
      const v = (i * 13) % 7;
      if (v === 0) return 'bg-indigo-500/90';
      if (v === 1) return 'bg-indigo-500/55';
      if (v === 2) return 'bg-indigo-500/25';
      return 'bg-white/5';
    }), []);

  const maxTopic = STATS.dsaTopics[0].count;

  return (
    <section className="section-padding py-24" id="profiles">
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
          CODING <br className="md:hidden" /> <span className="text-gradient">PROFILES</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full" />
      </div>

      {/* ═══════════════════════════════════
          Engineering Activity Dashboard Card
          ═══════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="glass-card border border-white/5 rounded-[40px] overflow-hidden">

          {/* Top KPI bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/5">
            {[
              { label: 'Questions Solved', value: STATS.totalSolved,    color: 'text-indigo-400' },
              { label: 'Active Days',      value: STATS.totalActiveDays, color: 'text-purple-400' },
              { label: 'Contests',         value: STATS.totalContests,   color: 'text-cyan-400'   },
              { label: 'Global Rank',      value: `#${STATS.globalRank}`, color: 'text-green-400' },
            ].map((s, i) => (
              <div key={s.label}
                className={`px-6 py-5 flex flex-col gap-1 ${i < 3 ? 'border-r border-white/5' : ''}`}>
                <span className={`text-2xl font-black ${s.color}`}>{s.value}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Main body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">

            {/* 1 — Heatmap */}
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Contribution Heatmap</h4>
              <div className="grid grid-cols-12 gap-1.5 flex-1">
                {grid.map((c, i) => <div key={i} className={`aspect-square rounded-sm ${c}`} />)}
              </div>
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-slate-600">
                <span>Less</span>
                <div className="flex gap-1">
                  {['bg-white/5','bg-indigo-500/25','bg-indigo-500/55','bg-indigo-500/90'].map(c => (
                    <div key={c} className={`w-2 h-2 rounded-sm ${c}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xl font-black text-purple-400">{STATS.publicRepos}+</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Public Repos on GitHub</span>
              </div>
            </div>

            {/* 2 — Rings + CodeChef */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Problems Solved</h4>
              <div className="flex justify-around items-center flex-wrap gap-4">
                <Ring solved={STATS.easySolved}   label="Easy"   color="#22c55e" />
                <Ring solved={STATS.mediumSolved}  label="Medium" color="#f59e0b" />
                <Ring solved={STATS.hardSolved}    label="Hard"   color="#ef4444" />
              </div>
              <div className="mt-auto px-5 py-4 rounded-2xl bg-orange-500/5 border border-orange-500/15 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5">CodeChef Rating</p>
                  <p className="text-3xl font-black text-orange-400">{STATS.codechefRating}</p>
                  <p className="text-[9px] text-slate-600 mt-0.5">max: {STATS.codechefMaxRating}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5">Total LeetCode</p>
                  <p className="text-3xl font-black text-indigo-400">{STATS.totalSolved}</p>
                  <p className="text-[9px] text-slate-600 mt-0.5">questions solved</p>
                </div>
              </div>
            </div>

            {/* 3 — DSA topic bars */}
            <div className="p-6 sm:p-8 flex flex-col gap-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">DSA Topic Analysis</h4>
              <div className="space-y-3 flex-1">
                {STATS.dsaTopics.map(({ name, count }) => (
                  <div key={name} className="flex items-center gap-3">
                    <span className="w-28 text-right text-[10px] font-bold text-slate-400 flex-shrink-0">{name}</span>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-indigo-500 to-purple-500"
                        style={{
                          width: `${Math.round((count / maxTopic) * 100)}%`,
                          boxShadow: '0 0 6px rgba(99,102,241,0.5)'
                        }}
                      />
                    </div>
                    <span className="w-5 text-[10px] font-black text-indigo-400">{count}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Profile marquee */}
      <div className="relative overflow-hidden py-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-linear-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-linear-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-scroll whitespace-nowrap px-4">
          {[...profiles, ...profiles, ...profiles].map((item, index) => (
            <Profilecard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Otherprofiles;