import React, { useState } from 'react';

interface ImageFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'hero' | 'project' | 'cert' | 'avatar';
  title?: string;
}

export default function ImageFallback({
  src,
  alt,
  className = '',
  fallbackType = 'project',
  title = '',
}: ImageFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallbackType === 'hero') {
      return (
        <div className={`hero-doodle-placeholder ${className}`} style={{
          width: '100%',
          aspectRatio: '1/1',
          maxWidth: '420px',
          background: 'var(--accent-yellow)',
          border: '2.5px solid var(--border-color)',
          borderRadius: 'var(--radius)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          boxShadow: 'var(--shadow-md)',
          textAlign: 'center'
        }}>
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>
            <circle cx="50" cy="40" r="22" />
            <path d="M28 35 Q38 22 50 24 Q62 22 72 35" strokeWidth="3" />
            <circle cx="43" cy="38" r="2" fill="currentColor" />
            <circle cx="57" cy="38" r="2" fill="currentColor" />
            <path d="M44 48 Q50 54 56 48" />
            <path d="M22 88 Q32 68 50 68 Q68 68 78 88" />
            <rect x="36" y="74" width="28" height="16" rx="2" strokeWidth="2" fill="var(--card-bg)" />
            <line x1="42" y1="82" x2="58" y2="82" />
          </svg>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
            Keshav Pal
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)' }}>
            Software Researcher & Dev
          </span>
        </div>
      );
    }

    if (fallbackType === 'cert') {
      return (
        <div className={className} style={{
          width: '52px',
          height: '52px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--accent-yellow)',
          border: '1.5px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-main)',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.2rem',
          flexShrink: 0
        }}>
          📜
        </div>
      );
    }

    return (
      <div className={className} style={{
        width: '100%',
        height: '100%',
        background: 'var(--card-bg-alt)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        textAlign: 'center',
        border: '1px dashed var(--border-color)'
      }}>
        <span style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>✨</span>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
          {title || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
