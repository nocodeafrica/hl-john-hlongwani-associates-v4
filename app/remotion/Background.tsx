import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const duration = 300;
  const progress = frame / duration;
  
  // Sine waves for smooth, seamless looping movement
  const waveX = Math.sin(progress * Math.PI * 2);
  const waveY = Math.cos(progress * Math.PI * 2);
  
  const tx = waveX * 4;
  const ty = waveY * 4;

  return (
    <AbsoluteFill style={{ background: '#F8FAFC', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.04) 0%, rgba(248, 250, 252, 0) 40%)',
          transform: `translate(${tx}%, ${ty}%)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at 50% 50%, rgba(11, 19, 43, 0.03) 0%, rgba(248, 250, 252, 0) 40%)',
          transform: `translate(${-tx}%, ${-ty}%)`,
        }}
      />
    </AbsoluteFill>
  );
};
