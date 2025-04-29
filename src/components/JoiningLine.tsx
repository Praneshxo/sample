import React from 'react';

export const JoiningLine: React.FC<{ childPosition: 'left' | 'center' | 'right' }> = ({ childPosition }) => {
  const xPosition = React.useMemo(() => {
    switch (childPosition) {
      case 'left':
        return 577;
      case 'center':
        return 960;
      case 'right':
        return 1342;
      default:
        return 0;
    }
  }, [childPosition]);

  return (
    <div
      style={{
        width: 2,
        height: 50,
        backgroundColor: 'white',
        position: 'absolute',
        left: xPosition,
        top: 163,
      }}
    />
  );
};

