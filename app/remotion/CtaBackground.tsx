import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const CtaBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = frame / durationInFrames;
  
  const moveX1 = interpolate(progress, [0, 0.5, 1], [-50, 50, -50]);
  const moveY1 = interpolate(progress, [0, 0.5, 1], [-30, 30, -30]);
  
  const moveX2 = interpolate(progress, [0, 0.5, 1], [50, -50, 50]);
  const moveY2 = interpolate(progress, [0, 0.5, 1], [30, -30, 30]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0B132B', overflow: 'hidden' }}>
      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`
      }} />
      
      {/* Animated blue glow */}
      <div style={{
        position: 'absolute',
        top: '-30%',
        right: '-10%',
        width: '70%',
        height: '120%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(0,0,0,0) 70%)',
        transform: `translate(${moveX1}px, ${moveY1}px)`,
      }} />

      {/* Animated emerald glow */}
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-10%',
        width: '70%',
        height: '120%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(0,0,0,0) 70%)',
        transform: `translate(${moveX2}px, ${moveY2}px)`,
      }} />
    </AbsoluteFill>
  );
};
