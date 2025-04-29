import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export interface ChildBox {
  label: string;
  startFrame: number;
  position: 'left' | 'center' | 'right';
}

export const ChildBoxComponent: React.FC<ChildBox> = ({ label, startFrame, position }) => {
  const frame = useCurrentFrame();
  const boxWidth = 100;
  const boxHeight = 50;
  const parentBoxHeight = 50;

  const xPosition = React.useMemo(() => {
    switch (position) {
      case 'left':
        return 530;
      case 'center':
        return 910;
      case 'right':
        return 1300;
      default:
        return 0;
    }
  }, [position]);

  const yPosition = parentBoxHeight + 160;

  const opacity = interpolate(frame, [startFrame - 20, startFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: boxWidth,
        height: boxHeight,
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: xPosition,
        top: yPosition,
        opacity,
        fontSize:"1.3rem",
      }}
    >
      {label}
    </div>
  );
};

export default ChildBoxComponent;