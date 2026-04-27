"use client";

import { useEffect, useRef, memo, useId, useState } from 'react';

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  className?: string;
  [key: string]: any;
}

const TWO_PI = Math.PI * 2;

const DotField = memo(({
  dotRadius = 2,
  dotSpacing = 24,
  cursorRadius = 400,
  cursorForce = 0.1,
  bulgeOnly = true,
  bulgeStrength = 80,
  glowRadius = 300,
  sparkle = true,
  waveAmplitude = 0,
  gradientFrom = '#00D2FF',
  gradientTo = '#0088CC',
  glowColor = 'rgba(0, 210, 255, 0.2)',
  className = "",
  ...rest
}: DotFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const dotsRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const rafRef = useRef<number>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const engagement = useRef(0);
  const uniqueId = useId();
  const glowId = `dot-field-glow-${uniqueId.replace(/:/g, '')}`;

  // Use a ref for props to avoid closure issues in the animation loop
  const propsRef = useRef({ 
    dotRadius, dotSpacing, cursorRadius, cursorForce, 
    bulgeOnly, bulgeStrength, sparkle, waveAmplitude, 
    gradientFrom, gradientTo 
  });

  useEffect(() => {
    propsRef.current = { 
      dotRadius, dotSpacing, cursorRadius, cursorForce, 
      bulgeOnly, bulgeStrength, sparkle, waveAmplitude, 
      gradientFrom, gradientTo 
    };
  }, [dotRadius, dotSpacing, cursorRadius, cursorForce, bulgeOnly, bulgeStrength, sparkle, waveAmplitude, gradientFrom, gradientTo]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameCount = 0;

    const buildDots = (w: number, h: number) => {
      const p = propsRef.current;
      const step = p.dotRadius + p.dotSpacing;
      const cols = Math.ceil(w / step) + 1;
      const rows = Math.ceil(h / step) + 1;
      const dots = [];
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * step;
          const y = row * step;
          dots.push({ ax: x, ay: y, sx: x, sy: y, vx: 0, vy: 0 });
        }
      }
      dotsRef.current = dots;
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        
        sizeRef.current = { w: width, h: height };
        buildDots(width, height);
      }
    });

    resizeObserver.observe(container);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      
      const dx = mouseRef.current.x - mouseRef.current.prevX;
      const dy = mouseRef.current.y - mouseRef.current.prevY;
      mouseRef.current.speed = Math.sqrt(dx * dx + dy * dy);
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
    };

    const render = () => {
      frameCount++;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const m = mouseRef.current;
      const dots = dotsRef.current;

      ctx.clearRect(0, 0, w, h);

      if (dots.length === 0) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      // Update engagement (how much the mouse is moving)
      const targetEng = Math.min(m.speed / 10, 1);
      engagement.current += (targetEng - engagement.current) * 0.1;
      if (engagement.current < 0.01) engagement.current = 0;

      // Update Glow
      if (glowRef.current) {
        glowRef.current.setAttribute('cx', m.x.toString());
        glowRef.current.setAttribute('cy', m.y.toString());
        glowRef.current.style.opacity = Math.min(engagement.current * 2, 1).toString();
      }

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, p.gradientFrom);
      grad.addColorStop(1, p.gradientTo);
      ctx.fillStyle = grad;

      ctx.beginPath();
      const crSq = p.cursorRadius * p.cursorRadius;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = m.x - d.ax;
        const dy = m.y - d.ay;
        const distSq = dx * dx + dy * dy;

        if (distSq < crSq) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / p.cursorRadius) * p.bulgeStrength;
          const angle = Math.atan2(dy, dx);
          
          d.sx = d.ax - Math.cos(angle) * force;
          d.sy = d.ay - Math.sin(angle) * force;
        } else {
          d.sx += (d.ax - d.sx) * 0.1;
          d.sy += (d.ay - d.sy) * 0.1;
        }

        let drawX = d.sx;
        let drawY = d.sy;

        if (p.sparkle) {
          const isSparkle = (i + frameCount) % 200 === 0;
          const r = isSparkle ? p.dotRadius * 1.5 : p.dotRadius;
          ctx.moveTo(drawX + r, drawY);
          ctx.arc(drawX, drawY, r, 0, TWO_PI);
        } else {
          ctx.moveTo(drawX + p.dotRadius, drawY);
          ctx.arc(drawX, drawY, p.dotRadius, 0, TWO_PI);
        }
      }
      ctx.fill();

      // Reduce speed over time
      m.speed *= 0.95;

      rafRef.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`} {...rest}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2
        }}
      >
        <defs>
          <radialGradient id={glowId}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle
          ref={glowRef}
          cx="-9999"
          cy="-9999"
          r={glowRadius}
          fill={`url(#${glowId})`}
          style={{ opacity: 0, willChange: 'transform, opacity' }}
        />
      </svg>
    </div>
  );
});

DotField.displayName = 'DotField';

export default DotField;
