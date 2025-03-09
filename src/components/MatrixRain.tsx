'use client';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const fps = isMobile ? 20 : 30; // Lower FPS on mobile
    const density = isMobile ? 0.5 : 1; // Reduce density on mobile
    const fpsInterval = 1000 / fps;

    // Set canvas size to match container size
    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      
      canvas.style.width = `${container.clientWidth}px`;
      canvas.style.height = `${container.clientHeight}px`;
    };
    
    resize();

    // Matrix characters (mix of Latin and katakana)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコサシスセソタチツテト'.split('');
    
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(0);
    let positions = Array(columns).fill(0);
    
    const speed = 0.5; // Controls rain drop speed
    
    // Animation loop
    const draw = (currentTime: number) => {
      // Throttle FPS
      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime - (elapsed % fpsInterval);

      // Semi-transparent fade effect
      ctx.fillStyle = 'rgba(20, 28, 51, 0.12)'; // Tech Lumina's navy
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw characters
      ctx.font = `${fontSize}px monospace`; // Set font once
      drops.forEach((_, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        
        // Draw character with varying opacity
        const opacity = Math.random() * 0.3 + 0.7;
        ctx.fillStyle = `rgba(239, 245, 250, ${opacity})`; // Tech Lumina's light gray
        ctx.fillText(char, x, Math.floor(positions[i]) * fontSize);

        // Reset drop
        if (positions[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          positions[i] = 0;
        } else {
          positions[i] += speed;
          drops[i] = Math.floor(positions[i]);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Handle resize
    const handleResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
      positions = Array(columns).fill(0);
    };

    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(draw);

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
        style={{ backgroundColor: '#141c33' }}
      />
    </div>
  );
};

export default MatrixRain;
