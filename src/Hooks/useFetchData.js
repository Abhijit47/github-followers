import axios from 'axios';
import { useEffect, useState } from 'react';

const queryParams = {
  query: "?per_page="
};

const useFetchData = (url = '', perPage = 10) => {
  // console.log(url);
  // console.log(`${url}${queryParams.query}${perPage}`);

  // create a state of data
  const [data, setData] = useState([]);
  // create a state of isLoading
  const [isLoading, setIsLoading] = useState(false);
  // create a state of error
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    // Getting the data using axios library
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}${queryParams.query}${perPage}`);
        setData(res.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, perPage]);


  return [data, isLoading, error];

};

export default useFetchData;