import React from 'react';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodeforces, SiHackerrank, SiGithub } from 'react-icons/si';

// ---------- Data (pulled straight from your Codolio profile) ----------
const topStats = [
  { label: 'Total Questions', value: '612' },
  { label: 'Total Active Days', value: '97' },
  { label: 'Total Contests', value: '11' },
  { label: 'Global Rank', value: '#12,594' },
];

const platforms = [
  { name: 'LeetCode',       icon: SiLeetcode,     color: 'text-yellow-400', border: 'border-yellow-400/20', bg: 'bg-yellow-400/5',    link: 'https://leetcode.com/u/shahid310/' },
  { name: 'GeeksForGeeks',  icon: SiGeeksforgeeks, color: 'text-green-400',  border: 'border-green-400/20',  bg: 'bg-green-400/5',     link: 'https://auth.geeksforgeeks.org/user/shahidansari310/' },
  { name: 'CodeChef',       icon: SiCodechef,      color: 'text-orange-400', border: 'border-orange-400/20', bg: 'bg-orange-400/5',    link: 'https://www.codechef.com/users/shahid_310' },
  { name: 'CodeForces',     icon: SiCodeforces,    color: 'text-blue-400',   border: 'border-blue-400/20',   bg: 'bg-blue-400/5',      link: 'https://codeforces.com/' },
  { name: 'HackerRank',     icon: SiHackerrank,    color: 'text-emerald-400',border: 'border-emerald-400/20',bg: 'bg-emerald-400/5',   link: 'https://www.hackerrank.com/profile/shahidansari310' },
  { name: 'GitHub',         icon: SiGithub,        color: 'text-slate-300',  border: 'border-slate-400/20',  bg: 'bg-slate-400/5',     link: 'https://github.com/shahidansari310' },
];

const problemRings = [
  {
    label: 'Fundamentals',
    total: 110,
    segments: [
      { name: 'GFG',        count: 60, color: '#22c55e' },
      { name: 'HackerRank', count: 50, color: '#34d399' },
    ],
  },
  {
    label: 'DSA',
    total: 154,
    segments: [
      { name: 'Easy',   count: 114, color: '#6366f1' },
      { name: 'Medium', count: 39,  color: '#a855f7' },
      { name: 'Hard',   count: 1,   color: '#ec4899' },
    ],
  },
  {
    label: 'Competitive',
    total: 348,
    segments: [
      { name: 'CodeChef', count: 348, color: '#f97316' },
    ],
  },
];

const dsaTopics = [
  { name: 'Arrays',        count: 85 },
  { name: 'Binary Search', count: 24 },
  { name: 'Two Pointers',  count: 23 },
  { name: 'Math',          count: 23 },
  { name: 'HashMap & Set', count: 20 },
  { name: 'String',        count: 19 },
  { name: 'Sorting',       count: 19 },
  { name: 'Algorithms',    count: 14 },
  { name: 'Bit Manipulation', count: 8 },
  { name: 'Mathematical',  count: 5 },
];

// ---------- Radial Ring Component ----------
const RadialRing = ({ data }) => {
  const radius = 52;
  const stroke = 9;
  const circumference = 2 * Math.PI * radius;
  const size = (radius + stroke) * 2 + 4;

  let offset = 0;
  const totalCount = data.segments.reduce((s, seg) => s + seg.count, 0);
  const gap = 0.02; // gap fraction between segments

  const arcs = data.segments.map((seg) => {
    const fraction = (seg.count / totalCount) * (1 - gap * data.segments.length);
    const dashLen = fraction * circumference;
    const dashArr = `${dashLen} ${circumference - dashLen}`;
    const rotate = offset * 360;
    offset += fraction + gap;
    return { ...seg, dashArr, rotate };
  });

  return (
    <div className="cursor-target glass-card p-8 rounded-[32px] flex flex-col items-center gap-4 group transition-all">
      <svg width={size} height={size} className="overflow-visible -rotate-90 drop-shadow-lg">
        {/* track */}
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
        {arcs.map((arc, i) => (
          <circle
            key={i}
            cx={size/2} cy={size/2} r={radius}
            fill="none"
            stroke={arc.color}
            strokeWidth={stroke}
            strokeDasharray={arc.dashArr}
            strokeDashoffset={0}
            strokeLinecap="round"
            transform={`rotate(${arc.rotate} ${size/2} ${size/2})`}
            style={{ filter: `drop-shadow(0 0 6px ${arc.color}80)` }}
          />
        ))}
        <text
          x={size/2} y={size/2}
          textAnchor="middle" dominantBaseline="middle"
          className="fill-white font-black text-2xl"
          style={{ font: 'bold 24px sans-serif', fill: '#fff' }}
          transform={`rotate(90 ${size/2} ${size/2})`}
        >
          {data.total}
        </text>
      </svg>

      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
        {data.label}
      </h4>

      <div className="w-full space-y-2">
        {data.segments.map((seg) => (
          <div key={seg.name} className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-slate-400 font-semibold">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: seg.color }} />
              {seg.name}
            </span>
            <span className="font-black" style={{ color: seg.color }}>{seg.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- DSA Bar Component ----------
const DsaBar = ({ name, count, max }) => {
  const pct = Math.round((count / max) * 100);
  return (
    <div className="flex items-center gap-4">
      <span className="w-32 text-[11px] font-bold text-slate-400 text-right flex-shrink-0">{name}</span>
      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-6 text-[11px] font-black text-indigo-400">{count}</span>
    </div>
  );
};

// ---------- Main Section ----------
const CodingStats = () => {
  const maxDsa = dsaTopics[0].count;

  return (
    <section className="section-padding py-24 relative overflow-hidden" id="stats">
      {/* section dividers */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* heading */}
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
          CODING <span className="text-gradient">STATS</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full mb-6" />
        <p className="text-slate-400 text-sm font-medium text-center max-w-lg">
          A live snapshot of my competitive programming journey across platforms.
        </p>
      </div>

      {/* ── Top 4 KPIs ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
        {topStats.map((s) => (
          <div key={s.label} className="cursor-target glass-card p-7 rounded-[28px] flex flex-col gap-2 group">
            <span className="text-3xl md:text-4xl font-black text-white group-hover:text-indigo-400 transition-colors">{s.value}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Platforms ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {platforms.map((p) => {
          const Icon = p.icon;
          return (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-target glass-card ${p.bg} border ${p.border} flex flex-col items-center gap-3 py-6 px-4 rounded-[24px] group`}
            >
              <Icon className={`text-3xl ${p.color} group-hover:scale-110 transition-transform`} />
              <span className={`text-[10px] font-black uppercase tracking-widest ${p.color}`}>{p.name}</span>
            </a>
          );
        })}
      </div>

      {/* ── Problems Solved Rings + DSA Topics ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Rings */}
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-6">Problems Solved</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {problemRings.map((r) => <RadialRing key={r.label} data={r} />)}
          </div>

          {/* CodeChef rating card */}
          <div className="cursor-target glass-card p-7 rounded-[32px] flex items-center justify-between group mt-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">CodeChef Rating</p>
              <p className="text-4xl font-black text-orange-400 group-hover:text-orange-300 transition-colors">986</p>
              <p className="text-[10px] text-slate-500 mt-1">max: 1198</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Contest Rank</p>
              <p className="text-2xl font-black text-white">Starters 224</p>
              <p className="text-[10px] text-slate-500 mt-1">Global Rank #20817</p>
            </div>
            <SiCodechef className="text-orange-400 text-5xl opacity-20 group-hover:opacity-40 transition-opacity absolute right-10" />
          </div>
        </div>

        {/* DSA Topics */}
        <div className="glass-card p-8 rounded-[32px]">
          <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-8">DSA Topic Analysis</h3>
          <div className="space-y-4">
            {dsaTopics.map((t) => (
              <DsaBar key={t.name} name={t.name} count={t.count} max={maxDsa} />
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-600">
            <span>Topic</span>
            <span>Problems Solved</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
