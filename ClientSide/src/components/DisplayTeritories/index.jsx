import React, { useContext } from 'react';
import { TerritoriesContext } from '../../pages/HomePage';
import Logout from '../Logout';
import MainTerritory from '../MainTerritory';

const DisplayTeritories = () => {
  const Data = useContext(TerritoriesContext); //gets the value from useContext hook

  const mainTeritory = (e) => {
    if (e.parent === null) {
      return <MainTerritory name={e.name} key={e.id} />;
    }
  };

  return (
    <>
      <div className='flex flex-col gap-2'>
        <section>
          <h2>Territories</h2>
          <p>Here are the list of territories</p>
        </section>
        <ul className='py-2 pb-15'>
          <li>{Data.map(mainTeritory)}</li>
        </ul>
      </div>
      <Logout />
    </>
  );
};

export default DisplayTeritories;
