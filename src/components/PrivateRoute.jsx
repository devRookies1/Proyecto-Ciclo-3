import React, {useEffect,  useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { obtenerDatosUsuario } from 'utils/api';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
 

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-vehiculos`,
      });
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
    await obtenerDatosUsuario(
      (response) => {
        console.log('response con datos del usuario', response);
      },
      (err) => {
        console.log('err', err);
    
      }
    );
  };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);
  
  
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return <>{children}</>;
};

export default PrivateRoute
