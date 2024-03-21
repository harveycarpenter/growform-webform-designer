import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export default function useTokenFromQueryString() {
  const { search } = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get('token'); // Directly fetch and return the 'token' parameter
  }, [search]);
}
