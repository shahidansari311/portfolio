import { useEffect, useRef, useState } from 'react';

// Each "scene" describes colors + CSS overlay that appears at different scroll positions
const SCENES = [
  {
    // Hero / Top — Deep dark teal with crimson bloom
    bg: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(196,53,86,0.35) 0%, transparent 65%), radial-gradient(ellipse 60% 60% at 80% 70%, rgba(134,221,228,0.12) 0%, transparent 60%), radial-gradient(ellipse 80% 80% at 10% 90%, rgba(123,24,47,0.25) 0%, transparent 60%)',
  },
  {
    // Skills / Projects — Mid — teal dominant with red glow
    bg: 'radial-gradient(ellipse 70% 70% at 20% 30%, rgba(25,112,116,0.35) 0%, transparent 65%), radial-gradient(ellipse 60% 60% at 80% 60%, rgba(196,53,86,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 50% 90%, rgba(8,45,54,0.8) 0%, transparent 70%)',
  },
  {
    // Stats / Achievements — Darker teal, cooler
    bg: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(8,45,54,0.9) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 20%, rgba(134,221,228,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 90% 80%, rgba(196,53,86,0.18) 0%, transparent 60%)',
  },
  {
    // Contact / Footer — Warm crimson close
    bg: 'radial-gradient(ellipse 80% 80% at 50% 80%, rgba(123,24,47,0.5) 0%, transparent 65%), radial-gradient(ellipse 60% 60% at 10% 40%, rgba(196,53,86,0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 90% 20%, rgba(25,112,116,0.2) 0%, transparent 60%)',
  },
];

// Floating particle canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const COLORS = ['#C43556', '#7B182F', '#86DDE4', '#197074', '#F9CCCB'];
    let particles = [];
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.28 }}
    />
  );
}

// Grid overlay
function GridOverlay() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(196,53,86,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(196,53,86,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
  );
}

export default function ScrollBackground() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [blendProgress, setBlendProgress] = useState(0);
  const nextSceneIndex = (sceneIndex + 1) % SCENES.length;

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'project', 'profiles', 'achievements', 'cert', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / totalHeight, 1);

      // 4 scenes across the full page scroll
      const raw = progress * (SCENES.length - 1);
      const idx = Math.min(Math.floor(raw), SCENES.length - 2);
      const blend = raw - idx;

      setSceneIndex(idx);
      setBlendProgress(blend);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Base dark teal bg */}
      <div className="fixed inset-0 -z-10" style={{ background: '#050e10' }} />

      {/* Proper background image layer — mobile + backend themed line-art, fixed and fully covering */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/bg-mobile-backend.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.32,
        }}
      />

      {/* Readability overlay — keeps theme colors intact while letting image show through */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(5,14,16,0.88) 0%, rgba(5,14,16,0.68) 45%, rgba(5,14,16,0.88) 100%)',
        }}
      />

      {/* Current scene gradient */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-700"
        style={{ background: SCENES[sceneIndex].bg, opacity: 1 - blendProgress * 0.5 }}
      />

      {/* Next scene gradient blending in */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-700"
        style={{ background: SCENES[nextSceneIndex].bg, opacity: blendProgress * 0.8 }}
      />

      {/* Animated vignette */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,14,16,0.8) 100%)',
        }}
      />

      {/* Floating glowing orbs that parallax */}
      <OrbLayer />

      {/* Subtle dot particles */}
      <ParticleCanvas />

      {/* Grid overlay */}
      <GridOverlay />
    </>
  );
}

function OrbLayer() {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (ref.current) {
        // orbs parallax at different speeds
        const orbs = ref.current.querySelectorAll('[data-speed]');
        orbs.forEach((orb) => {
          const speed = parseFloat(orb.dataset.speed);
          orb.style.transform = `translateY(${y * speed}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        data-speed="-0.15"
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: 'rgba(196,53,86,0.15)' }}
      />
      <div
        data-speed="-0.08"
        className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-[140px]"
        style={{ background: 'rgba(25,112,116,0.18)' }}
      />
      <div
        data-speed="-0.12"
        className="absolute bottom-0 left-1/4 w-[700px] h-[400px] rounded-full blur-[160px]"
        style={{ background: 'rgba(123,24,47,0.2)' }}
      />
      <div
        data-speed="-0.05"
        className="absolute top-2/3 left-1/2 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ background: 'rgba(134,221,228,0.08)' }}
      />
    </div>
  );
}
