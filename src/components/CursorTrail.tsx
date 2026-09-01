import React, { useEffect } from 'react';

export default function CursorTrail() {
  useEffect(() => {
    // Only enable on non-touch devices for performance
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    let lastX = 0;
    let lastY = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle creation rate to avoid lag (optimized for low-end devices)
      if (now - lastTime < 35) return;
      
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Only draw if moved enough distance
      if (dist < 15) return;

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;

      const splat = document.createElement('div');
      splat.className = 'ink-splat';
      splat.style.left = `${e.clientX}px`;
      splat.style.top = `${e.clientY}px`;
      
      // Randomize size and rotation for doodle feel (small size)
      const size = Math.random() * 6 + 4;
      splat.style.width = `${size}px`;
      splat.style.height = `${size}px`;
      splat.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
      
      // Randomize doodle colors (dark ink, yellow highlight, blue accent)
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const colors = isDark 
        ? ['#f4f4f5', '#ca8a04', '#60a5fa', '#0891b2']
        : ['#18181b', '#fef08a', '#2563eb', '#a5f3fc'];
      
      splat.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(splat);

      // Cleanup slower for more trail effect
      setTimeout(() => {
        if (splat.parentNode) splat.remove();
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

