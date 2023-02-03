import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';

const SubMainTerritory = ({ name }) => {
  const Data = useContext(TerritoriesContext);

  const miniTerritory = (e) => {
    if (name !== 'Bulacan' || name !== 'Nueva Ecija' || name !== 'Pampanga') {
      if (e.parent === '101' && name === 'Manila') {
        return <p>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Makati') {
        return <p>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Marikina') {
        return <p>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Laguna') {
        return <p>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Cavite') {
        return <p>{e.name}</p>;
      }
      if (e.parent === '102' && name === 'Batangas') {
        return <p>{e.name}</p>;
      }
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
