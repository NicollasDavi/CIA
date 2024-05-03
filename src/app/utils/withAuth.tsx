// utils/withAuth.tsx
"use client"
import { useEffect } from 'react';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuth = (props: P) => {
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token && window.location.pathname !== '/') {
        window.location.replace('/'); 
      }
    }, []);
    const token = localStorage.getItem('token');

    return token ? <WrappedComponent {...props} /> : null;
  };

  return WithAuth;
};

export default withAuth;
