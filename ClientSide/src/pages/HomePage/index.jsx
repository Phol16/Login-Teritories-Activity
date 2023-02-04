import React, { createContext, useEffect, useState } from 'react';
import DisplayTeritories from '../../components/DisplayTeritories';


export const TerritoriesContext = createContext();

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try { // fetch the data from given link
        const response = await fetch('http://localhost:3000/Territories/All').then((res) => res.json());
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bg-gray-500 w-screen h-screen text-white flex justify-center overflow-auto py-10 '>
      <TerritoriesContext.Provider value={data}> {/* wraps DisplayTeritories in useContext hook to avoid prop drilling */}
        <DisplayTeritories />
      </TerritoriesContext.Provider>
    </div>
  );
};

export default HomePage;
