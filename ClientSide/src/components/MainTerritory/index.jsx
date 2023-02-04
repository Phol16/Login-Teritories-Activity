import React, { useContext, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TerritoriesContext } from '../../pages/HomePage';
import SubMainTerritory from '../SubMainTerritory';

const MainTerritory = ({ name }) => {
  const Data = useContext(TerritoriesContext); //gets the value from useContext hook
  const [open, setOpen] = useState(false); //state for dropdown

  const subMainTerritory = (e) => {
    //conditional statement if the current territory name and the child parentId is true it will display the children
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
      <div className='bg-slate-600 rounded-lg ml-5' style={{ display: open ? 'block' : 'none' }}>
        {Data.map(subMainTerritory)}
      </div>
    </div>
  );
};

export default MainTerritory;
