import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';

const SubMainTerritory = ({ name }) => {
  const Data = useContext(TerritoriesContext); //gets the value from useContext hook
  const [open, setOpen] = useState(false);

  const miniTerritory = (e) => {
    //conditional statement if the current territory name and the child parentId is true it will display the children
    if (e.parent === '101' && name === 'Manila') {
      return (
        <p key={e.id} className='text-slate-800'>
          {e.name}
        </p>
      );
    }
    if (e.parent === '102' && name === 'Makati') {
      return (
        <p key={e.id} className='text-slate-800'>
          {e.name}
        </p>
      );
    }
    if (e.parent === '102' && name === 'Marikina') {
      return (
        <p key={e.id} className='text-slate-800'>
          {e.name}
        </p>
      );
    }
    if (e.parent === '102' && name === 'Laguna') {
      return (
        <p key={e.id} className='text-slate-800'>
          {e.name}
        </p>
      );
    }
    if (e.parent === '102' && name === 'Cavite') {
      return (
        <p key={e.id} className='text-slate-800'>
          {e.name}
        </p>
      );
    }
    if (e.parent === '102' && name === 'Batangas') {
      return (
        <p key={e.id} className='text-slate-800'>
          {e.name}
        </p>
      );
    }
  };
  return (
    <div className='flex flex-col gap-2 mb-2 p-2'>
      <section className='flex jsutify-center items-center gap-2 '>
        <button
          className='bg-transparent border-none text-white px-1 py-0 rounded-full text-xs'
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <p
          className='text-slate-200 cursor-pointer'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {name}
        </p>
      </section>
      <div className='bg-slate-400 p-2 rounded-lg ml-5' style={{ display: open ? 'block' : 'none' }}>
        {Data.map(miniTerritory)}
      </div>
    </div>
  );
};

export default SubMainTerritory;
