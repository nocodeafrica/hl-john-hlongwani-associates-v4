import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity1 = interpolate(frame, [0, 150, 300], [0.15, 0.3, 0.15], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale1 = interpolate(frame, [0, 150, 300], [1, 1.1, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const rotate1 = interpolate(frame, [0, 300], [0, 360]);

  return (
    <AbsoluteFill style={{ overflow: 'hidden', backgroundColor: '#0B132B' }}>
      {/* Abstract Background Pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <svg style={{ height: '100%', width: '100%' }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Blue Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '800px',
          height: '800px',
          backgroundColor: '#2563EB',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: opacity1,
          transform: `scale(${scale1}) rotate(${rotate1}deg)`,
        }}
      />
      
      {/* Emerald Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          backgroundColor: '#10B981',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: opacity1,
          transform: `scale(${scale1}) rotate(-${rotate1}deg)`,
        }}
      />
    </AbsoluteFill>
  );
};
