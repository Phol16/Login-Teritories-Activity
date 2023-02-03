import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';
import SubMainTerritory from '../SubMainTerritory';

const MainTerritory = ({ name }) => {
  const Data = useContext(TerritoriesContext); //gets the value from useContext hook

  const subMainTerritory = (e) => {
    if (e.parent === '1' && name === 'Metro Manila') {
      return <SubMainTerritory name={e.name} key={e.id} />;
    }
    if (e.parent === '2' && name === 'CALABARZON') {
      return <SubMainTerritory name={e.name} key={e.id} />;
    }
    if (e.parent === '3' && name === 'Central Luzon') {
      return <SubMainTerritory name={e.name} key={e.id} />;
    }
  };

  return (
    <div className='flex flex-col gap-2 mb-2'>
      <section className='flex jsutify-center items-center gap-2'>
        <button className='bg-transparent border-none text-white px-1 py-0 rounded-full text-xs'>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <p className='text-white'>{name}</p>
      </section>
      <div className='bg-slate-600 rounded-lg ml-5'>{Data.map(subMainTerritory)}</div>
    </div>
  );
};

export default MainTerritory;
