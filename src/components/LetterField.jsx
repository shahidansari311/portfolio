import { useEffect, useRef } from 'react';

// Hidden message revealed from the noise — developer edition.
// Tracks the cursor window-wide so it works as a fixed full-page layer.
const MESSAGE = [
  'SHAHID ANSARI',
  'FULL-STACK DEVELOPER',
  'MERN | PERN | NATIVE',
  'NODE | POSTGRES | AWS',
];

const NOISE = '{}[]()<>/\\|;:=+-*#$&?!01';

export default function LetterField({ className = '', revealRadius = 170 }) {
  const canvasRef = useRef(null);
  const radiusRef = useRef(revealRadius);
  radiusRef.current = revealRadius;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext('2d');
    const holder = canvas.parentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0;
    let H = 0;
    let cols = 0;
    let rows = 0;
    let cell = 22;
    let grid = [];
    let raf = 0;
    let frame = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, active: false };

    const pickNoise = () => NOISE[(Math.random() * NOISE.length) | 0];

    const build = () => {
      const rect = holder.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cell = W < 640 ? 15 : W < 1024 ? 19 : 23;
      cols = Math.max(Math.floor(W / cell), 1);
      rows = Math.max(Math.floor(H / cell), 1);

      // 4 message rows with one empty row between each, vertically centered
      const startRow = Math.floor(rows / 2) - 3;
      grid = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let msg = null;
          let accent = false;
          const mi = (r - startRow) / 2;
          if (Number.isInteger(mi) && mi >= 0 && mi < MESSAGE.length) {
            const line = MESSAGE[mi];
            const off = Math.floor((cols - line.length) / 2);
            const ch = line[c - off];
            if (ch && ch !== ' ') {
              msg = ch;
              accent = mi >= 2; // stack rows glow teal, name rows glow rose
            }
          }
          grid.push({ c, r, msg, accent, ch: pickNoise(), timer: (Math.random() * 20) | 0 });
        }
      }

      ctx.font = `${Math.floor(cell * 0.72)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible || W === 0) return;
      frame += 1;

      // Autopilot sweep when there is no cursor (touch devices / idle)
      let px = pointer.x;
      let py = pointer.y;
      if (!pointer.active) {
        const t = frame / 60;
        px = W / 2 + Math.cos(t * 0.45) * W * 0.3;
        py = H / 2 + Math.sin(t * 0.7) * H * 0.26;
      }

      ctx.clearRect(0, 0, W, H);
      const R = radiusRef.current;
      const R2 = R * R;
      const scrambleTick = !reduced && frame % 6 === 0;

      for (const g of grid) {
        const x = (g.c + 0.5) * cell;
        const y = (g.r + 0.5) * cell;
        const dx = x - px;
        const dy = y - py;

        if (g.msg && dx * dx + dy * dy < R2) {
          const d = Math.sqrt(dx * dx + dy * dy) / R; // 0 (near) → 1 (edge)
          const a = (0.95 - d * 0.55).toFixed(3);
          ctx.fillStyle = g.accent
            ? `rgba(134,221,228,${a})`
            : `rgba(249,204,203,${a})`;
          ctx.fillText(g.msg, x, y);
        } else {
          if (scrambleTick && g.timer-- <= 0) {
            g.ch = pickNoise();
            g.timer = 4 + ((Math.random() * 14) | 0);
          }
          ctx.fillStyle = 'rgba(148,163,184,0.13)';
          ctx.fillText(g.ch, x, y);
        }
      }
    };

    const toLocal = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    };
    const onMouseMove = (e) => toLocal(e.clientX, e.clientY);
    const onMouseLeaveWindow = () => { pointer.active = false; };
    const onTouchMove = (e) => {
      if (e.touches.length > 0) toLocal(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchEnd = () => { pointer.active = false; };
    const onResize = () => build();

    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const resizer = new ResizeObserver(() => build());
    resizer.observe(holder);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseLeaveWindow);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    build();
    if (reduced) {
      // Static frame: reveal message around center for reduced-motion users
      pointer.x = W / 2;
      pointer.y = H / 2;
      pointer.active = true;
      ctx.clearRect(0, 0, W, H);
      for (const g of grid) {
        const x = (g.c + 0.5) * cell;
        const y = (g.r + 0.5) * cell;
        if (g.msg) {
          ctx.fillStyle = g.accent ? 'rgba(134,221,228,0.8)' : 'rgba(249,204,203,0.8)';
          ctx.fillText(g.msg, x, y);
        } else {
          ctx.fillStyle = 'rgba(148,163,184,0.13)';
          ctx.fillText(g.ch, x, y);
        }
      }
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeaveWindow);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
