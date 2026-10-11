import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'

const links = {
  github: 'https://github.com/shahidansari311',
  linkedin: 'https://www.linkedin.com/in/shahidansari-/',
  x: 'https://x.com/Shahid_310_',
  instagram: 'https://www.instagram.com/_shahid_129_/',
  mail: 'mailto:shahidansari945256@gmail.com',
  resume: 'https://drive.google.com/file/d/1O-Fp7k_-it_3bJ5OvpJ26QFUtYKYR4gz/view?usp=sharing',
}

const taglines = ['MERN Stack Developer', 'PERN Stack Developer', 'Open Source Contributor', 'Problem Solver', 'App Developer']

const skills = [
  { cat: 'Languages', jp: '言語', list: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++', 'C', 'SQL'] },
  { cat: 'Frontend', jp: '表', list: ['React.js', 'React Native', 'Expo', 'Redux Toolkit', 'Zustand', 'Tailwind CSS', 'NativeWind', 'Framer Motion', 'Vite', 'Figma'] },
  { cat: 'Backend', jp: '裏', list: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Socket.io', 'JWT', 'Clerk', 'Multer', 'Nodemailer', 'node-cron'] },
  { cat: 'Databases', jp: '蔵', list: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis', 'Prisma', 'Supabase'] },
  { cat: 'AI / ML', jp: '知', list: ['LangGraph', 'LangChain RAG', 'LLM Integration', 'OpenAI API', 'Anthropic API'] },
  { cat: 'DevOps & Cloud', jp: '雲', list: ['Docker', 'AWS EC2 / ECS', 'GitHub Actions', 'CI/CD', 'Vercel', 'Render'] },
  { cat: 'Tools', jp: '具', list: ['Git', 'GitHub', 'Postman', 'Linux'] },
  { cat: 'Soft Skills', jp: '心', list: ['Problem Solving', 'Team Collaboration', 'Communication', 'Quick Learner'] },
]

type Project = { kanji: string; title: string; cat: string; desc: string; tech: string[]; code: string; live?: string; img: string; pos?: string; zoom?: number; phone?: boolean }
const projects: Project[] = [
  { kanji: '金', title: 'PaisaPilot', img: '/paisapilot.png', pos: '50% 100%', zoom: 1.12, cat: 'Mobile App', desc: 'Offline-first personal finance app: income, expenses, budgets, a calendar view, group expense splitting with settle-up and a borrow/lend ledger. Runs on 100% on-device SQLite, with type-safe forms (React Hook Form + Zod) and CSV import/export.', tech: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Zustand'], code: 'https://github.com/shahidansari311/PaisaPilot', live: 'https://paisapilotapp.vercel.app/' },
  { kanji: '家', title: 'HomeHive', img: '/homehive.jpeg', phone: true, cat: 'Mobile App', desc: 'Cross-platform real estate app to browse, search and list properties, built with Expo and file-based routing.', tech: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Zustand'], code: 'https://github.com/shahidansari311/HomeHive' },
  { kanji: '銀', title: 'Bank Ledger System', img: '/bankledger.png', pos: '50% 100%', zoom: 1.12, cat: 'Backend', desc: 'RESTful banking API on Express v5 (MVC) with OTP email verification, JWT + bcrypt auth, role-based access, node-cron interest jobs and zero-touch GitHub Actions deploys to AWS EC2.', tech: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'JWT', 'AWS EC2'], code: 'https://github.com/shahidansari311/Bank-ledger', live: 'https://bank-ledger-5t7c.onrender.com/' },
  { kanji: '刃', title: 'RealCode', img: '/realcode.png', pos: '100% 100%', zoom: 1.15, cat: 'Full Stack / Cloud', desc: 'A Google Docs-style collaborative code editor with real-time sync via Yjs and Socket.io. Uses Dockerized multi-stage builds deployed to AWS ECS via ECR.', tech: ['React.js', 'Node.js', 'Socket.io', 'Yjs', 'Docker', 'AWS ECS'], code: 'https://github.com/shahidansari311/RealCode' },
  { kanji: '市', title: 'SocialBazar', img: '/socialbazar.png', cat: 'Full Stack', desc: 'Social commerce platform: product listings, follows, likes and comments, and peer-to-peer transactions. Built on a relational PostgreSQL schema with layered middleware, JWT auth and Zustand.', tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Zustand', 'JWT'], code: 'https://github.com/shahidansari311/Social_media_marketplace', live: 'https://socialbazar.vercel.app/' },
  { kanji: '商', title: 'Scatch', img: '/scatch.png', cat: 'Full Stack', desc: 'End-to-end e-commerce app covering registration, browsing, cart and orders, plus an admin dashboard for products, Multer image uploads, inventory and order tracking.', tech: ['Node.js', 'Express.js', 'MongoDB', 'Multer', 'EJS', 'JWT'], code: 'https://github.com/shahidansari311/Scatch', live: 'https://scatch-8fya.onrender.com/' },
]

const experience = {
  when: 'Aug 2026 – Present', role: 'Mobile App & Full-Stack Developer', org: 'Silver Vista Property LLP', mode: 'Freelance / Intern · Remote',
  points: [
    'Architected and delivered a role-based real estate platform spanning mobile, web, an admin dashboard and cloud, owning the full lifecycle',
    'Built the React Native + Expo + TypeScript app (NativeWind) with property search and filters by location, price, type and amenities',
    'Designed a Node/Express REST API serving 3 clients with Prisma and PostgreSQL (Supabase), OTP login and role-based access',
    'Implemented short-lived JWTs, device-bound refresh-token rotation, expo-secure-store and silent Axios session refresh',
    'Automated Dockerized releases to AWS with GitHub Actions; frontend on Vercel',
  ],
  tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Docker', 'AWS', 'Vercel'],
}

const achievements = [
  { year: '2025', title: 'SAH 2.0 · Smart ABES Hackathon', pos: '1st Runner-Up', org: 'ABES Engineering College', text: 'National-level hackathon with 200+ teams. Took 2nd place with a working full-stack prototype.' },
  { year: '2025', title: 'KIET AI Arena · 30h Hackathon', pos: '3rd Runner-Up', org: 'KIET Group of Institutions', text: 'An AI-powered interior designer that analyses room photos with LLM APIs and suggests redesigns.' },
  { year: '2026', title: "GSSoC '26", pos: 'Open Source Contributor', org: 'GirlScript Summer of Code', text: 'Merged 5+ pull requests, fixed issues and worked with maintainers on real-world codebases.' },
  { year: '2025', title: 'SRM IST Code Wizard 24', pos: 'Participant', org: 'SRM Institute of Science & Technology', text: 'Fake news detection using Hugging Face LLM perplexity scoring, ensemble active learning and NLP classification.' },
]

const profiles = [
  { name: 'LeetCode', user: 'shahid310', stat: '1581', label: 'rating', url: 'https://leetcode.com/u/shahid310/' },
  { name: 'CodeChef', user: 'shahid_310', stat: '1284', label: 'rating', url: 'https://www.codechef.com/users/shahid_310' },
  { name: 'GeeksforGeeks', user: 'shahidansari310', stat: '100+', label: 'solved', url: 'https://auth.geeksforgeeks.org/user/shahidansari310/' },
  { name: 'HackerRank', user: 'shahidansari310', stat: '150+', label: 'solved', url: 'https://www.hackerrank.com/profile/shahidansari310' },
  { name: 'GitHub', user: 'shahidansari311', stat: '20+', label: 'repos', url: links.github },
  { name: 'Google Dev', user: 'shahidansari', stat: 'GDP', label: 'profile', url: 'https://developers.google.com/profile/u/shahidansari' },
]

const topics = [['Arrays', 75], ['Math', 31], ['Binary Search', 29], ['String', 28], ['Sorting', 25], ['Hash Map & Set', 25], ['Two Pointers', 24], ['Algorithms', 18]] as const

const courses = [
  { t: 'AWS Academy Graduate – Cloud Architecting', i: 'AWS Academy · course', d: '2025' },
  { t: 'AWS Academy Graduate – Cloud Foundations', i: 'AWS Academy · course', d: 'Dec 2024', l: 'https://www.credly.com/badges/63b0fdaa-fc44-456f-8c98-96872b06f353/print' },
  { t: 'SQL (Advanced)', i: 'HackerRank', l: 'https://www.hackerrank.com/certificates/iframe/5f9a8f3f6a8d' },
  { t: 'AWS Cloud', i: 'GeeksforGeeks', l: 'https://media.geeksforgeeks.org/courses/certificates/35df6fe6dfc8d1dc54012dedbfbf973b.pdf' },
  { t: 'ReactJS Development', i: 'GeeksforGeeks', l: 'https://www.geeksforgeeks.org/certificate/9e2f28adb3b23623c472f349c34a265e' },
  { t: 'SQL Databases & Git', i: 'Udemy' },
]

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.12, rootMargin: '0px 0px -50px 0px' })
    document.querySelectorAll('.reveal,.slash').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    let raf = 0
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setY(window.scrollY)) }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return y
}

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  useEffect(() => {
    let w = 0, c = 0, del = false, t: number
    const tick = () => {
      const word = words[w]
      c += del ? -1 : 1
      setText(word.slice(0, c))
      let d = del ? 40 : 80
      if (!del && c === word.length) { del = true; d = 1600 } else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 300 }
      t = window.setTimeout(tick, d)
    }
    t = window.setTimeout(tick, 500)
    return () => clearTimeout(t)
  }, [words])
  return text
}

function Tilt({ children, className = '', max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: MouseEvent) => {
    const el = ref.current!
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`
  }
  const leave = () => { ref.current!.style.transform = 'perspective(1000px)' }
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`group ${className}`} style={{ transition: 'transform .3s ease-out', transformStyle: 'preserve-3d' }}>{children}</div>
}

function Embers() {
  return <>{Array.from({ length: 18 }, (_, i) => <span key={i} className="ember" style={{ left: `${(i * 41) % 100}vw`, animationDuration: `${9 + (i % 7) * 2}s`, animationDelay: `${-i * 1.1}s`, ['--dx' as string]: `${(i % 2 ? 1 : -1) * (30 + i * 4)}px`, opacity: 0.35 + (i % 3) * 0.2 }} />)}</>
}

function Title({ no, jp, file, children }: { no: string; jp: string; file: string; children: ReactNode }) {
  return (
    <div className="reveal mb-12">
      <p className="font-mono text-xs text-ash"><span className="text-ember">~/shahid</span>/{file}</p>
      <p className="font-display mt-3 text-lg tracking-[0.4em] text-ember">{no} · <span className="font-jp tracking-normal">{jp}</span></p>
      <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl md:text-8xl">{children}</h2>
      <div className="slash mt-5 w-40" />
    </div>
  )
}

const Tag = ({ children }: { children: ReactNode }) => <span className="font-mono border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-[#d9d1d3] transition hover:border-ember hover:text-ember">{children}</span>

function Cursor() {
  const blade = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    setOn(true)
  }, [])
  useEffect(() => {
    if (!on) return
    document.documentElement.classList.add('custom-cursor')
    const cv = canvas.current!, ctx = cv.getContext('2d')!
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    const size = () => { cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0) }
    size()
    let mx = -200, my = -200, angle = -45, target = -45, hover = false, raf = 0, swing = 0
    const trail: { x: number; y: number; t: number }[] = []
    const slashes: { x: number; y: number; a: number; t: number }[] = []
    const move = (e: PointerEvent) => {
      const dx = e.clientX - mx, dy = e.clientY - my
      if (Math.hypot(dx, dy) > 2) target = (Math.atan2(dy, dx) * 180) / Math.PI + 180
      mx = e.clientX; my = e.clientY
      trail.push({ x: mx, y: my, t: performance.now() })
      hover = !!(e.target as HTMLElement).closest('a,button,[role=button]')
    }
    const press = (e: PointerEvent) => { swing = 1; slashes.push({ x: e.clientX, y: e.clientY, a: Math.random() * Math.PI, t: performance.now() }) }
    const loop = () => {
      const now = performance.now()
      ctx.clearRect(0, 0, innerWidth, innerHeight)
      while (trail.length && now - trail[0].t > 180) trail.shift()
      // tapered crimson blade trail
      for (let i = 1; i < trail.length; i++) {
        const p = trail[i - 1], q = trail[i], k = i / trail.length
        ctx.strokeStyle = `rgba(255,46,63,${k * 0.9})`
        ctx.shadowColor = '#ff2e3f'; ctx.shadowBlur = 12
        ctx.lineWidth = k * 4; ctx.lineCap = 'round'
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
      }
      ctx.shadowBlur = 0
      for (let i = slashes.length - 1; i >= 0; i--) {
        const s = slashes[i], age = (now - s.t) / 420
        if (age > 1) { slashes.splice(i, 1); continue }
        const len = 90 * Math.min(1, age * 3), w = 5 * (1 - age)
        const cx = Math.cos(s.a), sy = Math.sin(s.a)
        const g = ctx.createLinearGradient(s.x - cx * len, s.y - sy * len, s.x + cx * len, s.y + sy * len)
        g.addColorStop(0, 'rgba(255,46,63,0)'); g.addColorStop(0.5, `rgba(255,255,255,${1 - age})`); g.addColorStop(1, 'rgba(255,46,63,0)')
        ctx.fillStyle = g; ctx.shadowColor = '#ff2e3f'; ctx.shadowBlur = 20
        ctx.beginPath(); ctx.moveTo(s.x - cx * len, s.y - sy * len); ctx.quadraticCurveTo(s.x - sy * w, s.y + cx * w, s.x + cx * len, s.y + sy * len); ctx.quadraticCurveTo(s.x + sy * w * 0.2, s.y - cx * w * 0.2, s.x - cx * len, s.y - sy * len); ctx.fill()
        ctx.shadowBlur = 0
      }
      let d = ((target - angle + 540) % 360) - 180
      angle += d * 0.12
      swing *= 0.85
      if (blade.current) blade.current.style.transform = `translate3d(${mx}px,${my}px,0) rotate(${(hover ? -90 : angle) - swing * 70}deg) scale(${hover ? 1.15 : 1})`
      raf = requestAnimationFrame(loop)
    }
    addEventListener('pointermove', move, { passive: true })
    addEventListener('pointerdown', press)
    addEventListener('resize', size)
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); removeEventListener('pointermove', move); removeEventListener('pointerdown', press); removeEventListener('resize', size); document.documentElement.classList.remove('custom-cursor') }
  }, [on])
  if (!on) return null
  return (
    <>
      <canvas ref={canvas} className="pointer-events-none fixed inset-0 z-[99] h-screen w-screen" />
      {/* katana: tip sits exactly at the pointer, handle trails behind */}
      <div ref={blade} className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ transition: 'scale .2s', transformOrigin: '0 0', filter: 'drop-shadow(0 0 6px #ff2e3f)' }}>
        <svg width="64" height="14" viewBox="0 0 64 14" style={{ transform: 'translate(0,-7px)', display: 'block' }}>
          <defs><linearGradient id="edge" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset=".5" stopColor="#d9d1d3" /><stop offset="1" stopColor="#8a7f81" /></linearGradient></defs>
          <path d="M0 7 L6 4.2 Q22 3 38 4.6 L38 9.4 Q22 10.4 6 9.2 Z" fill="url(#edge)" />
          <path d="M3 7 Q20 6.2 37 6.6" stroke="#ff2e3f" strokeWidth=".8" fill="none" opacity=".9" />
          <rect x="38" y="2" width="3" height="10" rx="1" fill="#c1121f" />
          <rect x="41" y="4.6" width="22" height="4.8" rx="1.5" fill="#1a1012" stroke="#c1121f" strokeWidth=".8" />
          <path d="M43 4.6 l3 4.8 M47 4.6 l3 4.8 M51 4.6 l3 4.8 M55 4.6 l3 4.8 M59 4.6 l3 4.8" stroke="#c1121f" strokeWidth=".9" />
        </svg>
      </div>
    </>
  )
}

export default function App() {
  useReveal()
  const y = useScrollY()
  const typed = useTypewriter(taglines)
  const [menu, setMenu] = useState(false)
  const [view, setView] = useState<Project | null>(null)
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && setView(null); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  const docH = typeof document !== 'undefined' ? document.documentElement.scrollHeight - window.innerHeight : 1
  const progress = Math.min(1, y / Math.max(1, docH))
  const nav = ['About', 'Arsenal', 'Missions', 'Work', 'Record', 'Contact']

  return (
    <div className="grain relative min-h-screen">
      <Embers />
      <Cursor />
      <div className="fixed left-0 top-0 z-50 h-[2px] bg-ember shadow-[0_0_12px_#ff2e3f]" style={{ width: `${progress * 100}%` }} />

      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${y > 40 || menu ? 'border-b border-white/10 bg-ink/85 py-3 backdrop-blur-md' : 'py-6'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="font-mono flex items-center gap-2 text-sm"><span className="font-jp text-xl text-ember">斬</span><span className="text-ash">&lt;</span>shahid<span className="text-ember">.dev</span><span className="text-ash">/&gt;</span></a>
          <nav className="hidden gap-7 lg:flex">{nav.map((n, i) => <a key={n} href={`#${n.toLowerCase()}`} className="font-mono text-xs text-ash transition hover:text-ember"><span className="text-ember">0{i + 1}.</span> {n}</a>)}</nav>
          <a href={links.resume} target="_blank" className="font-mono hidden border border-ember px-4 py-2 text-xs text-ember transition hover:bg-ember hover:text-white lg:block">resume.pdf ↗</a>
          <button onClick={() => setMenu(!menu)} className="font-mono text-sm text-ember lg:hidden" aria-label="Menu">{menu ? '[ close ]' : '[ menu ]'}</button>
        </div>
        {menu && <nav className="mx-auto mt-3 flex max-w-6xl flex-col px-5 lg:hidden">{nav.map((n, i) => <a key={n} onClick={() => setMenu(false)} href={`#${n.toLowerCase()}`} className="font-display border-b border-white/5 py-3 text-2xl tracking-widest"><span className="font-mono mr-3 text-sm text-ember">0{i + 1}</span>{n}</a>)}<a href={links.resume} target="_blank" className="font-mono py-4 text-sm text-ember">resume.pdf ↗</a></nav>}
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32">
        <div className="moon pointer-events-none absolute right-[-15%] top-[6%] h-[60vmin] w-[60vmin] rounded-full bg-gradient-to-br from-[#ff3b4a] via-[#a10d1a] to-[#3a0006] opacity-80" style={{ transform: `translateY(${y * 0.4}px)` }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div style={{ transform: `translateY(${y * -0.12}px)`, opacity: Math.max(0, 1 - y / 750) }}>
            <p className="font-mono mb-6 inline-flex items-center gap-2 border border-ember/40 bg-ember/10 px-3 py-1.5 text-xs text-ember"><span className="h-2 w-2 animate-pulse rounded-full bg-[#3ddc84]" />status: available_for_internships</p>
            <h1 className="font-display text-7xl leading-[0.85] tracking-wide sm:text-8xl lg:text-[8.5rem]">SHAHID<br /><span className="text-transparent" style={{ WebkitTextStroke: '1.5px #ff2e3f' }}>ANSARI</span></h1>
            <p className="font-mono mt-6 h-7 text-base text-[#d9d1d3] sm:text-lg"><span className="text-ember">&gt;</span> {typed}<span className="caret ml-1" /></p>
            <p className="mt-5 max-w-lg leading-relaxed text-ash">Full-Stack & Mobile Developer and 3rd-year CS student at ABES Engineering College. I build production-ready PERN, MERN and React Native apps end to end, from database design and REST APIs to polished interfaces and cloud deployment.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="bg-blood px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-ember hover:shadow-[0_0_30px_#ff2e3f88]" style={{ clipPath: 'polygon(0 0,100% 0,100% 70%,90% 100%,0 100%)' }}>View Work</a>
              <a href={links.github} target="_blank" className="font-mono border border-white/20 px-5 py-3.5 text-sm transition hover:border-ember hover:text-ember">git clone ↗</a>
              <a href={links.resume} target="_blank" className="font-mono border border-white/20 px-5 py-3.5 text-sm transition hover:border-ember hover:text-ember">resume ↗</a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm" style={{ transform: `translateY(${y * 0.06}px)` }}>
            <Tilt max={12}>
              <div className="blade p-2">
                <div className="font-mono flex items-center gap-1.5 px-2 pb-2 pt-1 text-[10px] text-ash"><span className="h-2.5 w-2.5 rounded-full bg-ember" /><span className="h-2.5 w-2.5 rounded-full bg-[#ffb547]" /><span className="h-2.5 w-2.5 rounded-full bg-[#3ddc84]" /><span className="ml-2">shahid.jpeg</span></div>
                <div className="relative overflow-hidden">
                  <img src="/me.jpeg" alt="Shahid Ansari" className="aspect-[4/5] w-full object-cover grayscale-[35%] contrast-110 transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a0006]/80 via-transparent to-transparent mix-blend-multiply" />
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ember/20 to-transparent" style={{ animation: 'scan 3.5s linear infinite' }} />
                </div>
              </div>
            </Tilt>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[['850+', 'solved'], ['1581', 'leetcode'], ['20+', 'repos']].map(([n, l]) => <div key={l} className="border-l-2 border-ember bg-white/[0.03] px-3 py-2"><p className="font-display text-2xl leading-none">{n}</p><p className="font-mono text-[10px] text-ash">{l}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 -rotate-1 overflow-hidden bg-blood py-3">
        <div className="font-display flex w-max gap-10 whitespace-nowrap text-3xl tracking-widest text-ink" style={{ animation: 'marquee 30s linear infinite' }}>
          {Array(2).fill(['REACT', 'TYPESCRIPT', 'NODE.JS', 'EXPRESS', 'NEXT.JS', 'REACT NATIVE', 'POSTGRESQL', 'MONGODB', 'PRISMA', 'DOCKER', 'AWS', 'LANGCHAIN', 'TAILWIND', 'LINUX']).flat().flatMap((t, i) => [<span key={i}>{t}</span>, <span key={`s${i}`} className="font-jp text-white">斬</span>])}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-28">
        <Title no="01" jp="経歴" file="about.ts">Profile</Title>
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Tilt className="reveal" max={4}><div className="blade h-full p-7 md:p-10">
            <p className="text-lg leading-relaxed text-[#e4dcde] md:text-xl">I build production-ready applications end to end, from database design and REST APIs to polished, responsive interfaces. As a freelance developer for <span className="text-ember">Silver Vista Property LLP</span>, I shipped a complete property platform spanning web, mobile, an admin dashboard and cloud deployment.</p>
            <p className="mt-5 leading-relaxed text-ash">My core stacks are PERN, MERN and React Native. I'm a GSSoC '26 open source contributor and a National Hackathon Runner-Up (SAH 2.0). Right now I'm deep into LLM-powered features, AI-driven app logic and mobile development.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-ember pl-4"><p className="font-mono text-[11px] text-ember">2024 — 2028</p><p className="font-semibold">B.Tech CSE · ABES Engineering College</p><p className="text-sm text-ash">3rd year · CGPA 8.11</p></div>
              <div className="border-l-2 border-white/20 pl-4"><p className="font-mono text-[11px] text-ash">2022 — 2024</p><p className="font-semibold">Class X & XII (CBSE)</p><p className="text-sm text-ash">Amrit Public School, Mau</p></div>
            </div>
          </div></Tilt>
          <Tilt className="reveal" max={6}><div className="blade font-mono h-full overflow-x-auto p-6 text-[13px] leading-7">
            <p className="mb-3 text-[10px] text-ash">// developer.json</p>
            <pre className="whitespace-pre-wrap break-words">{'{'}
{'\n'}  <span className="text-ember">"name"</span>: <span className="text-[#ffb547]">"Shahid Ansari"</span>,
{'\n'}  <span className="text-ember">"role"</span>: <span className="text-[#ffb547]">"Full-Stack Developer"</span>,
{'\n'}  <span className="text-ember">"location"</span>: <span className="text-[#ffb547]">"Ghaziabad, UP, IN"</span>,
{'\n'}  <span className="text-ember">"stack"</span>: [<span className="text-[#ffb547]">"PERN"</span>, <span className="text-[#ffb547]">"MERN"</span>, <span className="text-[#ffb547]">"RN"</span>],
{'\n'}  <span className="text-ember">"learning"</span>: <span className="text-[#ffb547]">"LLM apps"</span>,
{'\n'}  <span className="text-ember">"openTo"</span>: [<span className="text-[#ffb547]">"internship"</span>, <span className="text-[#ffb547]">"freelance"</span>, <span className="text-[#ffb547]">"full-time"</span>],
{'\n'}  <span className="text-ember">"chai"</span>: <span className="text-[#7cc4ff]">true</span>
{'\n'}{'}'}</pre>
          </div></Tilt>
        </div>
      </section>

      {/* SKILLS */}
      <section id="arsenal" className="mx-auto max-w-6xl px-5 py-28">
        <Title no="02" jp="帝具" file="skills.config.ts">Arsenal</Title>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <Tilt key={s.cat} className="reveal"><div className="blade h-full p-6">
              <div className="flex items-start justify-between gap-3"><p className="font-display text-2xl tracking-wider">{s.cat}</p><span className="font-jp text-3xl text-ember/70 transition group-hover:text-ember">{s.jp}</span></div>
              <div className="mt-4 flex flex-wrap gap-1.5">{s.list.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div></Tilt>
          ))}
        </div>
      </section>

      {/* EXPERIENCE + ACHIEVEMENTS */}
      <section id="missions" className="mx-auto max-w-6xl px-5 py-28">
        <Title no="03" jp="任務" file="git log --missions">Missions</Title>
        <Tilt className="reveal" max={3}><div className="blade p-7 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div><p className="font-mono text-xs text-ember">commit a3f9c21 · HEAD → main</p><p className="font-display mt-2 text-3xl tracking-wide md:text-4xl">{experience.role}</p><p className="text-ash">{experience.org}</p></div>
            <div className="text-left sm:text-right"><p className="font-mono inline-flex items-center gap-2 text-xs text-[#3ddc84]"><span className="h-2 w-2 animate-pulse rounded-full bg-[#3ddc84]" />active</p><p className="font-mono text-xs text-ash">{experience.when}</p><p className="font-mono text-xs text-ash">{experience.mode}</p></div>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">{experience.points.map((p) => <li key={p} className="flex gap-3 text-sm leading-relaxed text-[#cfc6c8]"><span className="font-mono text-ember">+</span>{p}</li>)}</ul>
          <div className="mt-6 flex flex-wrap gap-1.5">{experience.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </div></Tilt>
        <p className="font-display reveal mb-6 mt-16 text-3xl tracking-widest">Hackathons & <span className="text-ember">Open Source</span></p>
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((a) => (
            <Tilt key={a.title} className="reveal"><div className="blade h-full p-6">
              <div className="flex items-center justify-between gap-3"><span className="font-mono bg-ember/15 px-2 py-1 text-[11px] text-ember">{a.pos}</span><span className="font-mono text-xs text-ash">{a.year}</span></div>
              <p className="font-display mt-3 text-2xl tracking-wide">{a.title}</p>
              <p className="text-xs text-ash">{a.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#cfc6c8]">{a.text}</p>
            </div></Tilt>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-28">
        <Title no="04" jp="作品" file="projects/">Selected Work</Title>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Tilt key={p.title} className="reveal" max={6}><div className="blade flex h-full flex-col">
              <div className="border-b border-white/10 bg-[#120c0c]">
                <div className="font-mono flex items-center gap-1.5 px-3 py-2 text-[10px] text-ash"><span className="h-2 w-2 rounded-full bg-ember" /><span className="h-2 w-2 rounded-full bg-[#ffb547]" /><span className="h-2 w-2 rounded-full bg-[#3ddc84]" /><span className="ml-2 truncate">{p.live ? p.live.replace(/^https?:\/\//, '').replace(/\/$/, '') : `./${String(i + 1).padStart(2, '0')}_${p.title.toLowerCase().replace(/\s+/g, '-')}`}</span><span className="font-jp ml-auto text-sm text-ember">{p.kanji}</span></div>
                <button type="button" onClick={() => setView(p)} aria-label={`View ${p.title} screenshot`} className={`relative block h-56 w-full cursor-zoom-in overflow-hidden sm:h-64 ${p.phone ? 'bg-gradient-to-br from-[#3a0006] to-ink' : ''}`}>
                  {p.phone ? (
                    <div className="absolute left-1/2 top-5 w-36 -translate-x-1/2 rounded-[1.6rem] border-[5px] border-[#2a2223] bg-black shadow-[0_20px_50px_#000] transition duration-700 group-hover:-translate-y-2">
                      <img src={p.img} alt={`${p.title} screenshot`} className="block w-full rounded-[1.2rem]" />
                    </div>
                  ) : (
                    <img src={p.img} alt={`${p.title} screenshot`} style={p.pos ? { objectPosition: p.pos, transform: `scale(${p.zoom ?? 1})`, transformOrigin: p.pos } : undefined} className="absolute inset-0 h-full w-full object-cover object-top transition duration-[1.2s] ease-out group-hover:brightness-110" />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0909] via-transparent to-transparent" />
                  <span className="font-mono absolute right-4 top-3 bg-ink/80 px-2 py-1 text-[10px] text-ash opacity-0 backdrop-blur transition group-hover:opacity-100">click to expand ⤢</span>
                  <span className="font-mono absolute bottom-3 left-4 bg-ink/80 px-2 py-1 text-[11px] text-ember backdrop-blur">{p.cat}</span>
                  {p.live && <span className="font-mono absolute bottom-3 right-4 inline-flex items-center gap-1.5 bg-ink/80 px-2 py-1 text-[11px] text-[#3ddc84] backdrop-blur"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3ddc84]" />live</span>}
                </button>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-3xl tracking-wide">{p.title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#cfc6c8]">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <div className="font-mono mt-5 flex gap-3 text-xs">
                  <a href={p.code} target="_blank" className="flex-1 border border-white/20 py-2.5 text-center transition hover:border-ember hover:text-ember">&lt;/&gt; source</a>
                  {p.live ? <a href={p.live} target="_blank" className="flex-1 bg-blood py-2.5 text-center text-white transition hover:bg-ember">live demo ↗</a> : <span className="flex-1 border border-dashed border-white/15 py-2.5 text-center text-white/40">demo soon</span>}
                </div>
              </div>
            </div></Tilt>
          ))}
        </div>
        <a href={links.github} target="_blank" className="font-mono reveal mt-10 block text-center text-sm text-ash transition hover:text-ember">$ ls ~/github --all ↗</a>
      </section>

      {/* STATS */}
      <section id="record" className="mx-auto max-w-6xl px-5 py-28">
        <Title no="05" jp="戦績" file="stats --verbose">Battle Record</Title>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[['850+', 'Problems solved'], ['150+', 'Active days'], ['15+', 'Contests'], ['11,410', 'Global rank']].map(([n, l]) => (
            <Tilt key={l} className="reveal"><div className="blade p-5 md:p-7"><p className="font-display text-4xl transition group-hover:text-ember md:text-6xl">{n}</p><p className="font-mono mt-1 text-[11px] text-ash">{l}</p></div></Tilt>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal blade p-6 md:p-8">
            <p className="font-display text-2xl tracking-widest">DSA Topics</p>
            <div className="mt-5 space-y-3">{topics.map(([n, c]) => <div key={n} className="font-mono grid grid-cols-[110px_1fr_32px] items-center gap-3 text-xs"><span className="text-ash">{n}</span><div className="h-1.5 bg-white/5"><div className="bar h-full bg-gradient-to-r from-blood to-ember" style={{ width: `${(c / 75) * 100}%` }} /></div><span className="text-right">{c}</span></div>)}</div>
            <div className="font-mono mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center text-xs">{[['Easy', 180, '#3ddc84'], ['Medium', 100, '#ffb547'], ['Hard', 20, '#ff2e3f']].map(([d, c, col]) => <div key={d as string}><p className="font-display text-3xl" style={{ color: col as string }}>{c}</p><p className="text-ash">{d}</p></div>)}</div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {profiles.map((p) => (
              <a key={p.name} href={p.url} target="_blank" className="reveal blade group block p-5 transition hover:bg-[#1c1212]">
                <div className="flex items-baseline justify-between gap-2"><p className="font-display text-xl tracking-wider">{p.name}</p><span className="text-ash transition group-hover:text-ember">↗</span></div>
                <p className="font-mono truncate text-[11px] text-ash">@{p.user}</p>
                <p className="font-display mt-2 text-3xl text-ember">{p.stat} <span className="font-mono text-[10px] text-ash">{p.label}</span></p>
              </a>
            ))}
          </div>
        </div>
        <div className="reveal blade mt-6 p-6 md:p-8">
          <p className="font-display text-2xl tracking-widest">Courses & <span className="text-ember">Credentials</span></p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{courses.map((c) => {
            const body = <><p className="flex items-start gap-3 text-sm font-medium"><span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-ember" />{c.t}</p><p className="font-mono ml-5 text-[11px] text-ash">{c.i}{c.d ? ` · ${c.d}` : ''}{c.l ? ' ↗' : ''}</p></>
            return c.l ? <a key={c.t} href={c.l} target="_blank" className="transition hover:text-ember">{body}</a> : <div key={c.t}>{body}</div>
          })}</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-5 py-32">
        <div className="moon pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ff3b4a] via-[#a10d1a] to-[#3a0006] opacity-25" />
        <div className="reveal relative mx-auto max-w-3xl">
          <div className="text-center"><p className="font-jp text-2xl text-ember">次の任務</p><h2 className="font-display mt-2 text-6xl leading-none tracking-wide md:text-8xl">Your Next Mission</h2></div>
          <div className="blade font-mono mt-10 p-6 text-sm leading-8 md:p-8">
            <div className="mb-4 flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-ember" /><span className="h-2.5 w-2.5 rounded-full bg-[#ffb547]" /><span className="h-2.5 w-2.5 rounded-full bg-[#3ddc84]" /></div>
            <p><span className="text-[#3ddc84]">shahid@night-raid</span>:<span className="text-ember">~</span>$ ./contact --open</p>
            <p className="text-ash">→ Open to internships, freelance and full-time roles.</p>
            <p className="break-all">email&nbsp;&nbsp;&nbsp;&nbsp;<a href={links.mail} className="text-[#ffb547] hover:underline">shahidansari945256@gmail.com</a></p>
            <p>location Ghaziabad, Uttar Pradesh, India</p>
            <p>phone&nbsp;&nbsp;&nbsp;&nbsp;<a href="tel:+918858369783" className="hover:text-ember">+91 8858369783</a></p>
            <p><span className="text-[#3ddc84]">shahid@night-raid</span>:<span className="text-ember">~</span>$ <span className="caret" /></p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={links.mail} className="bg-blood px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-ember hover:shadow-[0_0_40px_#ff2e3f]">Send Email</a>
            {[['GitHub', links.github], ['LinkedIn', links.linkedin], ['X', links.x], ['Instagram', links.instagram], ['Resume', links.resume]].map(([l, h]) => <a key={l} href={h} target="_blank" className="font-mono border border-white/15 px-4 py-3 text-xs text-ash transition hover:border-ember hover:text-ember">{l} ↗</a>)}
          </div>
        </div>
      </section>
      <a href="#top" aria-label="Back to top" className={`font-mono fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center border border-ember bg-ink/90 text-ember backdrop-blur transition hover:bg-ember hover:text-white ${y > 600 ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>↑</a>
      {view && (
        <div onClick={() => setView(null)} className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="blade flex max-h-[92vh] w-full max-w-5xl flex-col">
            <div className="font-mono flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-xs"><span className="text-ember">{view.title}</span><button onClick={() => setView(null)} className="text-ash hover:text-ember">[ esc ]</button></div>
            <div className="overflow-auto p-3"><img src={view.img} alt={`${view.title} full screenshot`} className={`mx-auto ${view.phone ? 'max-h-[80vh] w-auto' : 'w-full'}`} /></div>
          </div>
        </div>
      )}
      <footer className="font-mono border-t border-white/10 px-5 py-8 text-center text-[11px] text-ash">© 2026 Shahid Ansari · built with React + Tailwind · <span className="font-jp text-ember">斬</span> v3.0.0</footer>
    </div>
  )
}
