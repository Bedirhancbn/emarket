import {useState, useEffect} from 'react';
import axios from 'react-native-axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: response} = await axios.get(url);
        setData(response);
      } catch (error) {
        console.error(error);
        setErrorLoading(false);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    errorLoading,
  };
}

export default useFetch;
