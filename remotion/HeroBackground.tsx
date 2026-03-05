import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Create smooth animations
  const opacity = interpolate(
    frame,
    [0, 30, durationInFrames - 30, durationInFrames],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const scale = interpolate(
    frame,
    [0, 60],
    [1.2, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const rotation = interpolate(
    frame,
    [0, durationInFrames],
    [0, 360],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        opacity,
      }}
    >
      {/* Animated background elements */}
      <AbsoluteFill
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
          `,
          transform: `scale(${scale}) rotate(${rotation * 0.1}deg)`,
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const particleRotation = interpolate(
          frame,
          [0, durationInFrames],
          [0, 360 + i * 10],
          {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }
        );
        
        const particleY = interpolate(
          frame,
          [0, durationInFrames],
          [Math.random() * 100, Math.random() * 100 - 20],
          {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }
        );

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${10 + (i * 4) % 80}%`,
              top: `${particleY}%`,
              width: 4 + (i % 3),
              height: 4 + (i % 3),
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              transform: `rotate(${particleRotation}deg)`,
              opacity: interpolate(
                frame,
                [i * 5, i * 5 + 30],
                [0, 1],
                {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }
              ),
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
