'use client';
import { useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const FONT_SIZE = 18;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function initStreams(cols, h) {
  return Array.from({ length: cols }, () => ({
    pos: Math.random() * -(h / FONT_SIZE),
    speed: 0.3 + Math.random() * 1.5,
    length: 8 + Math.floor(Math.random() * 22),
    chars: Array.from({ length: 35 }, randomChar),
    glitch: false,
  }));
}

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w, h, cols, streams, animId;

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / FONT_SIZE);
      streams = initStreams(cols, h);
    }

    // Load Yautja font for canvas
    const yautjaFont = new FontFace('YautjaRain', "url(/fonts/yautja-regular.woff2) format('woff2')");
    yautjaFont.load().then(f => document.fonts.add(f)).catch(() => {});

    init();

    function draw() {
      animId = requestAnimationFrame(draw);

      // Full black clear each frame for clean gradient rendering
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${FONT_SIZE}px YautjaRain, monospace`;

      for (let i = 0; i < cols; i++) {
        const s = streams[i];
        const head = Math.floor(s.pos);

        // Occasional glitch: scramble chars briefly
        if (Math.random() < 0.002) {
          s.chars = Array.from({ length: 35 }, randomChar);
        }

        // Draw stream from head downward (j=0 is head tip)
        for (let j = 0; j < s.length; j++) {
          const row = head - j;
          if (row < 0) continue;
          const yPx = row * FONT_SIZE;
          if (yPx > h) continue;

          const char = s.chars[j % s.chars.length];
          const xPx = i * FONT_SIZE;

          if (j === 0) {
            // Head: bright white with subtle glow
            ctx.shadowColor = 'rgba(255,255,255,0.6)';
            ctx.shadowBlur = 10;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
          } else {
            ctx.shadowBlur = 0;
            // Trail: white fading to black
            const alpha = Math.pow(1 - j / s.length, 1.4);
            const isGlitch = Math.random() < 0.004;
            if (isGlitch) {
              ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha + 0.5)})`;
            } else {
              ctx.fillStyle = `rgba(200, 200, 200, ${alpha})`;
            }
          }

          ctx.fillText(char, xPx, yPx);
        }

        ctx.shadowBlur = 0;

        s.pos += s.speed;

        // Reset when entire stream has passed the bottom
        if ((head - s.length) * FONT_SIZE > h) {
          s.pos = Math.random() * -40;
          s.speed = 0.3 + Math.random() * 1.5;
          s.length = 8 + Math.floor(Math.random() * 22);
          s.chars = Array.from({ length: 35 }, randomChar);
        }
      }
    }

    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
