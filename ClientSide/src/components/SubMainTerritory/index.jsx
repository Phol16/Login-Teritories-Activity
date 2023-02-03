import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';

const SubMainTerritory = ({ name }) => {
  const Data = useContext(TerritoriesContext); //gets the value from useContext hook

  const miniTerritory = (e) => {
      if (e.parent === '101' && name === 'Manila') {
        return <p key={e.id}>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Makati') {
        return <p key={e.id}>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Marikina') {
        return <p key={e.id}>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Laguna') {
        return <p key={e.id}>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Cavite') {
        return <p key={e.id}>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Batangas') {
        return <p key={e.id}>{e.name}</p>;
      }
  };
  return (
    <div className='flex flex-col gap-2 mb-2 p-2'>
      <section className='flex jsutify-center items-center gap-2'>
      <button className='text-black px-1 py-0 rounded-full text-xs'>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <p className='text-white'>{name}</p>
      </section>
      <div className='bg-slate-400 p-2 rounded-lg ml-5'>{Data.map(miniTerritory)}</div>
    </div>
  );
};

export default SubMainTerritory;
