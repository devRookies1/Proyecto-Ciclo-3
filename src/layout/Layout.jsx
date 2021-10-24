//import Footer from 'components/Footer';
import React, { useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useAuth0 } from '@auth0/auth0-react';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';


const Layout = ({children}) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();
  const { setUserData } = useUser();
 
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
        setUserData(response.data)
      },
      (err) => {
        console.log('err', err);
        logout({ returnTo: 'http://localhost:3000'});
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

    return (
    
    <div className='flex flex-col w-full h-screen overflow-y-hidden  '>
      <Navbar/>
        <main className='flex bg-gray-100 w-full h-full overflow-y-hidden '>
          <Sidebar/>
             {children}   
        </main>
      </div>
        
    
    );
};

export default Layout