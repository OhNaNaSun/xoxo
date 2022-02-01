import { useState, useEffect } from 'react';
const useFetch = (fetcher) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // TODO cancellation
  useEffect(() => {
    void (async function () {
      setIsLoading(true);
      try {
        const res = await fetcher();
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    })();
  }, []);
  return [data, isLoading, error];
};
export default useFetch;
