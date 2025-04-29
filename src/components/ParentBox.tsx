import React from 'react';

export const ParentBox: React.FC = () => {
  return (
    <div
      style={{
        width: 140,
        height: 70,
        backgroundColor: 'lightgreen',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize:"1.4rem"
      }}
    >
      Parent
    </div>
  );
};
