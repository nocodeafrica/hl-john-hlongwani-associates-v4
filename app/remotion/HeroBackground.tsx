import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();
  
  const pulse = interpolate(frame, [0, 150, 300], [1, 1.15, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const drift = interpolate(frame, [0, 150, 300], [0, 40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #064e3b 100%)' }}>
      {/* Emerald glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          transform: `scale(${pulse}) translateX(${drift}px)`,
        }}
      />
      {/* Blue glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          transform: `scale(${pulse}) translateX(-${drift}px)`,
        }}
      />
      {/* Subtle overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(16,185,129,0.05), rgba(59,130,246,0.05))',
          mixBlendMode: 'overlay',
        }}
      />
    </AbsoluteFill>
  );
};
