import React, { useEffect, useState } from 'react';

const DisplayTeritories = () => {
  const [teritories, setTeritories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All').then((res) => res.json());
        setTeritories(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Territories</h2>
      <p>Here are the list of territories</p>
      <ul>
        <li>
        </li>
      </ul>
    </div>
  );
};

export default DisplayTeritories;
