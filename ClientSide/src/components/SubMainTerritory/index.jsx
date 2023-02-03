import React, { useContext } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';

const SubMainTerritory = ({ name, id }) => {
  const Data = useContext(TerritoriesContext);

  const miniTerritory = (e) => {
    if (e.parent === '101' && name === 'Manila') {
      return <p>{e.name}</p>;
    }
    if (e.parent === '102' && name === 'Makati') {
      return <p>{e.name}</p>;
    }
    if (e.parent === '102' && name === 'Marikina') {
      return <p>{e.name}</p>;
    }
    if(e.parent === '102' && name === 'Laguna'){
      return <p>{e.name}</p>
   }
   if(e.parent === '102' && name === 'Cavite'){
    return <p>{e.name}</p>
 }
 if(e.parent === '102' && name === 'Batangas'){
  return <p>{e.name}</p>
}
  };
  return (
    <div>
      <p className='text-red-300'>{name}</p>
      {Data.map(miniTerritory)}
    </div>
  );
};

export default SubMainTerritory;
