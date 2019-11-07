import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  return hotels;
};

export default useInitialState;
