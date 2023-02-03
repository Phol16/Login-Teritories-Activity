import React, { createContext, useEffect, useState } from 'react';
import DisplayTeritories from '../../components/DisplayTeritories';


export const TerritoriesContext = createContext();

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All').then((res) => res.json());
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bg-gray-500 w-screen h-screen text-white flex justify-center overflow-auto py-10 '>
      <TerritoriesContext.Provider value={data}>
        <DisplayTeritories />
      </TerritoriesContext.Provider>
    </div>
  );
};

export default HomePage;
