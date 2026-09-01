import React, { useRef, useEffect, useState } from 'react';

interface StackedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  zIndex: number;
  bg?: 'bg' | 'bg-subtle' | 'card-bg' | 'card-bg-alt';
}

export default function StackedSection({ children, id, className = '', zIndex, bg = 'bg' }: StackedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [top, setTop] = useState('0px');

  useEffect(() => {
    const updateTop = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        const vh = window.innerHeight;
        // 80px accounts for the navbar height
        if (height > vh - 80) {
          // If the section is taller than viewport minus nav, stick its bottom to the screen bottom
          setTop(`${vh - height}px`);
        } else {
          // Otherwise, stick it nicely beneath the navbar
          setTop('80px');
        }
      }
    };

    const observer = new ResizeObserver(updateTop);
    if (ref.current) observer.observe(ref.current);
    window.addEventListener('resize', updateTop);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateTop);
    };
  }, [children]); // Re-calculate if children change

  return (
    <section
      ref={ref}
      id={id}
      className={`section stacked-section ${className}`}
      style={{
        zIndex,
        top,
        backgroundColor: `var(--${bg})`,
      }}
    >
      {zIndex > 1 && <div className="section-tape"></div>}
      {children}
    </section>
  );
}
