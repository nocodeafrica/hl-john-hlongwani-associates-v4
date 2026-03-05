import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const ServicesBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow rotation for the main gradient
  const rotate = interpolate(frame, [0, 300], [0, 360], {
    extrapolateRight: 'wrap',
  });

  // Pulsing opacity for accent elements
  const pulse1 = interpolate(frame, [0, 60, 120], [0.3, 0.7, 0.3], {
    extrapolateRight: 'wrap',
  });

  const pulse2 = interpolate(frame, [30, 90, 150], [0.2, 0.6, 0.2], {
    extrapolateRight: 'wrap',
  });

  // Floating movement for decorative circles
  const float1Y = interpolate(frame, [0, 150, 300], [0, -20, 0], {
    extrapolateRight: 'wrap',
  });

  const float2Y = interpolate(frame, [0, 200, 300], [0, 15, 0], {
    extrapolateRight: 'wrap',
  });

  return (
    <AbsoluteFill style={{ backgroundColor: '#f8fafc' }}>
      {/* Main rotating gradient background */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 0deg, #10b981, #3b82f6, #8b5cf6, #10b981)',
          opacity: 0.1,
          transform: `rotate(${rotate}deg)`,
        }}
      />

      {/* Floating accent circles */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #10b981, transparent)',
          opacity: pulse1,
          transform: `translateY(${float1Y}px)`,
          filter: 'blur(60px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #3b82f6, transparent)',
          opacity: pulse2,
          transform: `translateY(${float2Y}px)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%2310b981' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />
    </AbsoluteFill>
  );
};
