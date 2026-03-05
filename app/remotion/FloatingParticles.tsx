import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const FloatingParticles: React.FC = () => {
  const frame = useCurrentFrame();

  const particles = Array.from({ length: 12 }, (_, i) => {
    const delay = i * 15;
    const adjustedFrame = Math.max(0, frame - delay);
    
    const y = interpolate(
      adjustedFrame,
      [0, 300],
      [100, -20],
      { extrapolateRight: 'clamp' }
    );
    
    const x = interpolate(
      adjustedFrame,
      [0, 300],
      [0, Math.sin(adjustedFrame * 0.02 + i) * 30],
      { extrapolateRight: 'clamp' }
    );
    
    const opacity = interpolate(
      adjustedFrame,
      [0, 50, 250, 300],
      [0, 0.6, 0.6, 0],
      { extrapolateRight: 'clamp' }
    );
    
    const scale = interpolate(
      adjustedFrame,
      [0, 100, 200, 300],
      [0.5, 1, 1, 0.5],
      { extrapolateRight: 'clamp' }
    );

    return {
      id: i,
      x: 50 + (i % 4) * 25 + x,
      y: 50 + Math.floor(i / 4) * 25 + y,
      opacity,
      scale,
      color: i % 3 === 0 ? '#2563EB' : i % 3 === 1 ? '#10B981' : '#6366F1'
    };
  });

  return (
    <AbsoluteFill style={{ background: 'transparent' }}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
