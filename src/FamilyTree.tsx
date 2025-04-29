import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AbsoluteFill } from 'remotion';
import { ParentBox } from './components/ParentBox';
import { HorizontalLine } from './components/HorizontalLine';
import { JoiningLine } from './components/JoiningLine';
import { ChildBoxComponent, ChildBox } from './components/ChildBoxComponent';

export const FamilyTree: React.FC = () => {
  const [childBoxes, setChildBoxes] = useState<ChildBox[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/childboxes');
        setChildBoxes(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AbsoluteFill style={{ 
      backgroundColor: 'black', 
      height: '100vh', 
      width: '100vw' }}>

      <ParentBox />
      <HorizontalLine />
      {childBoxes.map((box) => (
        <React.Fragment key={box.label}>
          <ChildBoxComponent {...box} />
          <JoiningLine childPosition={box.position} />
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};


