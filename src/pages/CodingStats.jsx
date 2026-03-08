import React, { useMemo } from 'react';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces, SiHackerrank, SiGithub } from 'react-icons/si';
import Profilecard from '../components/Profilecard';

// ---------- Configuration & Data ----------
const STATS = {
  totalSolved: 617,
  activeDays: 99,
  totalContests: 12,
  globalRank: '12,613',
  publicRepos: 20,
  codechefRating: 1071,
  codechefMaxRating: 1198,
  codechefRank: '28,175',
  lcRating: 1571,
  lcMaxRating: 1614,
};

const platforms = [
  { name: 'LeetCode', icon: SiLeetcode, color: 'text-yellow-400', border: 'border-yellow-400/20', bg: 'bg-yellow-400/5', link: 'https://leetcode.com/u/shahid310/' },
  { name: 'GeeksForGeeks', icon: SiGeeksforgeeks, color: 'text-green-400', border: 'border-green-400/20', bg: 'bg-green-400/5', link: 'https://auth.geeksforgeeks.org/user/shahidansari310/' },
  { name: 'CodeChef', icon: SiCodechef, color: 'text-orange-400', border: 'border-orange-400/20', bg: 'bg-orange-400/5', link: 'https://www.codechef.com/users/shahid_310' },
  { name: 'CodeForces', icon: SiCodeforces, color: 'text-blue-400', border: 'border-blue-400/20', bg: 'bg-blue-400/5', link: 'https://codeforces.com/' },
  { name: 'HackerRank', icon: SiHackerrank, color: 'text-emerald-400', border: 'border-emerald-400/20', bg: 'bg-emerald-400/5', link: 'https://www.hackerrank.com/profile/shahidansari310' },
  { name: 'GitHub', icon: SiGithub, color: 'text-slate-300', border: 'border-slate-400/20', bg: 'bg-slate-400/5', link: 'https://github.com/shahidansari310' },
];

const profiles = [
  { handle: "shahid310", platform: "LeetCode", link: "https://leetcode.com/u/shahid310/" },
  { handle: "shahidansari310", platform: "HackerRank", link: "https://www.hackerrank.com/profile/shahidansari310" },
  { handle: "shahidansari", platform: "Google Developer", link: "https://developers.google.com/profile/u/shahidansari" },
  { handle: "shahid_310", platform: "CodeChef", link: "https://www.codechef.com/users/shahid_310" },
  { handle: "_shahid_129_", platform: "Instagram", link: "https://www.instagram.com/_shahid_129_/" },
];

const problemRings = [
  {
    label: 'Fundamentals',
    total: 110,
    segments: [
      { name: 'GeeksForGeeks', count: 61, color: '#22c55e' },
      { name: 'HackerRank', count: 49, color: '#34d399' },
    ],
  },
  {
    label: 'DSA',
    total: 155,
    segments: [
      { name: 'Easy', count: 115, color: '#6366f1' },
      { name: 'Medium', count: 36, color: '#a855f7' },
      { name: 'Hard', count: 4, color: '#ec4899' },
    ],
  },
  {
    label: 'Competitive',
    total: 352,
    segments: [
      { name: 'CodeChef', count: 352, color: '#f97316' },
    ],
  },
];

const dsaTopics = [
  { name: 'Arrays', count: 65 },
  { name: 'Binary Search', count: 51 },
  { name: 'Two Pointers', count: 41 },
  { name: 'Hash Table', count: 34 },
  { name: 'Math', count: 31 },
  { name: 'String', count: 30 },
  { name: 'Sorting', count: 29 },
  { name: 'Algorithms', count: 18 },
  { name: 'Bit Manipulation', count: 14 },
  { name: 'Mathematical', count: 12 },
];

// ---------- Sub-Components ----------

const RadialRing = ({ data }) => {
  const radius = 40;
  const stroke = 7;
  const circumference = 2 * Math.PI * radius;
  const size = (radius + stroke) * 2 + 4;
  let offset = 0;
  const totalCount = data.segments.reduce((s, seg) => s + seg.count, 0);
  const gap = 0.02;

  const arcs = data.segments.map((seg) => {
    const fraction = (seg.count / totalCount) * (1 - gap * data.segments.length);
    const dashLen = fraction * circumference;
    const dashArr = `${dashLen} ${circumference - dashLen}`;
    const rotate = offset * 360;
    offset += fraction + gap;
    return { ...seg, dashArr, rotate };
  });

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
        {arcs.map((arc, i) => (
          <circle
            key={i} cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke={arc.color} strokeWidth={stroke}
            strokeDasharray={arc.dashArr} strokeDashoffset={0} strokeLinecap="round"
            transform={`rotate(${arc.rotate} ${size / 2} ${size / 2})`}
            style={{ filter: `drop-shadow(0 0 4px ${arc.color}80)` }}
          />
        ))}
        <text
          x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
          className="fill-white font-black text-lg" transform={`rotate(90, ${size / 2}, ${size / 2})`}
        >
          {data.total}
        </text>
      </svg>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{data.label}</span>
    </div>
  );
};

const Heatmap = () => {
  const grid = useMemo(() =>
    [...Array(84)].map((_, i) => {
      const v = (i * 13) % 7;
      if (v === 0) return 'bg-indigo-500/90';
      if (v === 1) return 'bg-indigo-500/55';
      if (v === 2) return 'bg-indigo-500/25';
      return 'bg-white/5';
    }), []);

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Contribution Heatmap</h4>
      <div className="grid grid-cols-12 gap-1">
        {grid.map((c, i) => <div key={i} className={`aspect-square rounded-xs ${c}`} />)}
      </div>
      <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-widest text-slate-600">
        <span>Less</span>
        <div className="flex gap-1">
          {['bg-white/5', 'bg-indigo-500/25', 'bg-indigo-500/55', 'bg-indigo-500/90'].map(c => (
            <div key={c} className={`w-2 h-2 rounded-xs ${c}`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

const RatingGraph = () => {
  // Simulated path for the rating graph
  const points = "0,80 20,70 40,85 60,60 80,75 100,50 120,65 140,40 160,55 180,30 200,45 220,20";
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">LeetCode Progress</h4>
        <div className="text-right">
          <span className="text-2xl font-black text-white">{STATS.lcRating}</span>
          <p className="text-[8px] font-black uppercase text-slate-500">Max: {STATS.lcMaxRating}</p>
        </div>
      </div>
      <div className="h-24 w-full bg-white/5 rounded-2xl overflow-hidden relative">
        <svg viewBox="0 0 220 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path
            d={`M ${points}`}
            fill="none" stroke="url(#graphGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 0 8px rgba(99,102,241,0.5))' }}
          />
          <defs>
            <linearGradient id="graphGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const DsaBar = ({ name, count, max }) => {
  const pct = Math.round((count / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 text-[10px] font-bold text-slate-400 text-right flex-shrink-0">{name}</span>
      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-purple-500"
          style={{ width: `${pct}%`, boxShadow: '0 0 6px rgba(99,102,241,0.4)' }}
        />
      </div>
      <span className="w-5 text-[10px] font-black text-indigo-400">{count}</span>
    </div>
  );
};

// ---------- Main Section ----------

const CodingStats = () => {
  const maxDsa = dsaTopics[0].count;

  return (
    <section className="section-padding py-24 relative overflow-hidden bg-black" id="profiles">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
          CODING <span className="text-gradient">PROFILES</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/5 rounded-[32px] overflow-hidden mb-8 glass">
          {[
            { label: 'Total Questions', value: STATS.totalSolved, color: 'text-white' },
            { label: 'Active Days', value: STATS.activeDays, color: 'text-white' },
            { label: 'Total Contests', value: STATS.totalContests, color: 'text-white' },
            { label: 'Global Rank', value: `#${STATS.globalRank}`, color: 'text-white' },
          ].map((s, i) => (
            <div key={s.label} className={`p-6 flex flex-col items-center justify-center gap-1 ${i < 3 ? 'md:border-r border-white/5' : ''}`}>
              <span className={`text-2xl md:text-3xl font-black ${s.color}`}>{s.value}</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

          {/* Left: Heatmap & GitHub */}
          <div className="glass-card p-8 rounded-[40px] flex flex-col gap-8">
            <Heatmap />
            <div className="mt-auto px-5 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group hover:border-indigo-500/30 transition-colors">
              <SiGithub className="text-3xl text-slate-300" />
              <div>
                <h5 className="text-xl font-black text-white">{STATS.publicRepos}+ Repos</h5>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Public Repositories</p>
              </div>
            </div>
          </div>

          {/* Middle: Rating Graph & CodeChef */}
          <div className="glass-card p-8 rounded-[40px] flex flex-col gap-8">
            <RatingGraph />
            <div className="mt-auto px-5 py-5 rounded-3xl bg-orange-500/5 border border-orange-500/15 flex items-center justify-between group">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">CodeChef Rating</p>
                <p className="text-4xl font-black text-orange-400">{STATS.codechefRating}</p>
                <p className="text-[9px] text-slate-600 mt-1">Global: {STATS.codechefRank}</p>
              </div>
              <SiCodechef className="text-5xl text-orange-400/20 group-hover:text-orange-400/40 transition-colors" />
            </div>
          </div>

          {/* Right: Rings */}
          <div className="glass-card p-8 rounded-[40px] flex flex-col justify-between">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6 text-center">Problem Complexity</h4>
            <div className="grid grid-cols-3 gap-2">
              {problemRings.map(r => <RadialRing key={r.label} data={r} />)}
            </div>
          </div>

        </div>

        {/* Bottom Bar: DSA Topics */}
        <div className="glass-card p-10 rounded-[40px] mb-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-black text-white mb-4">DSA Topic Analysis</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                A detailed breakdown of problems solved by category, demonstrating proficiency across various algorithms and data structures.
              </p>
              <div className="mt-8 flex gap-4">
                {platforms.slice(0, 3).map((p, i) => {
                  const Icon = p.icon;
                  return <a key={i} href={p.link} className={`p-3 rounded-xl bg-white/5 border border-white/10 ${p.color} hover:scale-110 transition-all`}><Icon /></a>
                })}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {dsaTopics.map(t => <DsaBar key={t.name} name={t.name} count={t.count} max={maxDsa} />)}
            </div>
          </div>
        </div>

        {/* Profile Marquee */}
        <div className="relative overflow-hidden py-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-scroll whitespace-nowrap px-4 hover:[animation-play-state:paused]">
            {[...profiles, ...profiles, ...profiles].map((item, index) => (
              <Profilecard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
