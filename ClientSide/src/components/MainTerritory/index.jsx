import React, { useContext } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';
import SubMainTerritory from '../SubMainTerritory';

const MainTerritory = ({ name }) => {
  const Data = useContext(TerritoriesContext);

  const subMainTerritory = (e) => {
    if (e.parent === '1' && name === 'Metro Manila') {
      return <SubMainTerritory name={e.name} key={e.id} />;
    }
    if (e.parent === '2' && name ==='CALABARZON') {
      return <SubMainTerritory name={e.name} key={e.id} />;
    }
    if (e.parent === '3' && name === 'Central Luzon') {
      return <SubMainTerritory name={e.name} key={e.id} />;
    }
  };

  return (
    <div>
      <p className='text-blue-300'>{name}</p>
      {Data.map(subMainTerritory)}
    </div>
  );
};

export default MainTerritory;
