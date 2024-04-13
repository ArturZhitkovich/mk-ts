import { useState, useEffect } from "react";

interface QueryFunction<T> {
  (): Promise<T>;
}

interface QueryResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

function useQuery<T>(queryFunction: QueryFunction<T>): QueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await queryFunction();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setData(null);
      setIsLoading(false);
      setError(null);
    };
  }, [queryFunction]);

  return { data, isLoading, error };
}

export default useQuery;
