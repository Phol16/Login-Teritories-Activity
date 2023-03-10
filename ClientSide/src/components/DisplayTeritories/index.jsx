import React, { useContext } from 'react';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TerritoriesContext } from '../../pages/HomePage';
import Logout from '../Logout';
import ShowTerritory from '../ShowTerritory';

const DisplayTeritories = () => {
  const Data = useContext(TerritoriesContext); //gets the value from useContext hook

  const mainTeritory = (e) => {
      return e.parent === null ? <ShowTerritory {...e} key={e.id}/> : null;
  };

  return (
    <>
      <div className='flex flex-col gap-2 z-10'>
        <section >
          <h2 className='text-xl'>
            <FontAwesomeIcon icon={faCity}/>
            Territories</h2>
          <p>Here are the list of territories</p>
        </section>
        <ul className='py-2 pb-15'>
          {Data.length ? <li>{Data.map(mainTeritory)}</li> : <p>Loading...</p> }
        </ul>
      </div>
      <Logout /> {/*component to logout*/}
    </>
  );
};

export default DisplayTeritories;
