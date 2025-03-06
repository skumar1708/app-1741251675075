import React, { useEffect, useState } from 'react';
import Snack from '../components/Snack';
import { fetchSnacks } from '../services/api';

function Home() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const getSnacks = async () => {
      const data = await fetchSnacks();
      setSnacks(data);
    };

    getSnacks();
  }, []);

  return (
    <main>
      <h1>Snacks List</h1>
      <div className="snacks-list">
        {snacks.map(snack => (
          <Snack key={snack.id} {...snack} />
        ))}
      </div>
    </main>
  );
}

export default Home;