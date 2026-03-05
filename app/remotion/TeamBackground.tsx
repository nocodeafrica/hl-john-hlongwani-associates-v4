import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const TeamBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Smooth, subtle floating motion for the background blobs
  const moveY1 = interpolate(frame, [0, 150, 300], [0, 80, 0]);
  const moveX1 = interpolate(frame, [0, 150, 300], [0, -50, 0]);
  
  const moveY2 = interpolate(frame, [0, 150, 300], [0, -100, 0]);
  const moveX2 = interpolate(frame, [0, 150, 300], [0, 60, 0]);

  return (
    <AbsoluteFill style={{ background: 'transparent', overflow: 'hidden' }}>
      {/* Blue gradient blob */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(37,99,235,0) 70%)',
          borderRadius: '50%',
          transform: `translate(${moveX1}px, ${moveY1}px)`,
        }}
      />
      {/* Emerald gradient blob */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '1000px',
          height: '1000px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0) 70%)',
          borderRadius: '50%',
          transform: `translate(${moveX2}px, ${moveY2}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
