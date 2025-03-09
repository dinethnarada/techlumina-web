'use client';
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas size to match container size
    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const scale = window.devicePixelRatio || 1;
      canvas.width = container.clientWidth * scale;
      canvas.height = container.clientHeight * scale;
      ctx.scale(scale, scale);
      
      canvas.style.width = `${container.clientWidth}px`;
      canvas.style.height = `${container.clientHeight}px`;
    };
    
    resize();

    // Matrix characters (mix of Latin and katakana)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコサシスセソタチツテト'.split('');
    
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(0);
    
    // Animation loop
    const draw = () => {
      // Semi-transparent fade effect
      ctx.fillStyle = 'rgba(20, 28, 51, 0.1)'; // Using Tech Lumina's navy (#141c33)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw characters
      drops.forEach((y, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        
        // Vary the opacity for a more dynamic effect
        const opacity = Math.random() * 0.5 + 0.5;
        ctx.fillStyle = `rgba(239, 245, 250, ${opacity})`; // Tech Lumina's light gray (#eff5fa)
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, x, y * fontSize);

        // Reset drop
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Handle resize
    const handleResize = () => {
      resize();
      // Recalculate columns and drops
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ backgroundColor: '#141c33' }} // Tech Lumina's navy color
      />
    </div>
  );
};

export default MatrixRain;
