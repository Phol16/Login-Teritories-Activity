import React, { useContext, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TerritoriesContext } from '../../pages/HomePage';

const ShowTerritory = ({name, id} ) => {
  const Data = useContext(TerritoriesContext); //gets the value from useContext hook
  const [open, setOpen] = useState(false); //state for dropdown

  const subTerritory = (e) => {
    //conditional statement if the mapped territory parent id is equal to the id of the current component 
      return e.parent === id ? <ShowTerritory {...e} key={e.id}/> : null;
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
        {Data.map(subTerritory)}
      </div>
    </div>
  );
};

export default ShowTerritory;
