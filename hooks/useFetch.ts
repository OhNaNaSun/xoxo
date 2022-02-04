import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
type FetcherCallback = () => Promise<AxiosResponse<any, any>>;

const useFetch = (fetcher: FetcherCallback) => {
  const [data, setData] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  // TODO cancellation
  // https://dev.to/tmns/usecanceltoken-a-custom-react-hook-for-cancelling-axios-requests-1ia4
  useEffect(() => {
    void (async function () {
      setIsLoading(true);
      try {
        const res: AxiosResponse<unknown> = await fetcher();
        // const res = await fetcher();
        setData(res?.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    })();
  }, []);
  return [data, isLoading, error];
};
export default useFetch;
