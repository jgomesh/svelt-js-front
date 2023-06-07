import { useEffect } from 'react';

const useLogged = (history) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if((token && !!token.length) && token !== 'undefined') {
      history.push('/home');
    }
  }, []);
}

export default useLogged;
