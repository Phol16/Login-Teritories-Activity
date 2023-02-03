import React, { useEffect, useState, useContext } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';
import MainTerritory from '../MainTerritory';

const DisplayTeritories = () => {
  const Data = useContext(TerritoriesContext)

  const mainTeritory = (e) => {
    if(e.parent === null){
     return <MainTerritory name={e.name} key={e.id} />
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <section>
      <h2>Territories</h2>
      <p>Here are the list of territories</p>
      </section>
      <ul>
        <li>{Data.map(mainTeritory)}</li>
      </ul>
    </div>
  );
};

export default DisplayTeritories;
