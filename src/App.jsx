
import React, { useState, useEffect } from 'react';
import Layout from 'layout/Layout';
import Index from 'pages';
import FormProductos from 'pages/FormProductos';
import FormVentas from 'pages/FormVentas';

import Productos from 'pages/Productos';
import Usuarios from 'pages/Usuarios';
import Ventas from 'pages/Ventas';
import { Auth0Provider } from "@auth0/auth0-react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import { UserContext } from 'context/userContext';
import PrivateComponent from 'components/PrivateComponent';
import PrivateRoute from 'components/PrivateRoute';


function App() {
  const [userData, setUserData] = useState({});
  return (
    <Auth0Provider
      domain="devrookies-vehiculos.us.auth0.com"
      clientId="QRist1WXxRBfrEvMdx2wR3rRAHnmAquA"
      redirectUri="https://boiling-crag-86589.herokuapp.com/"
      audience="api-autenticacion-vehiculos"
    >
    <UserContext.Provider value={{ userData, setUserData }}>
    <Router>
      <Switch>
        <Route path= {["/ventas","/ventas/form","/vehiculos","/vehiculos/form","/usuarios","/"]}>
          <Layout>
          <Switch>
            <Route path= "/ventas/form">
            <PrivateRoute roleList={['admin']} estadoList={['autorizado']} >  
              <FormVentas />
            </PrivateRoute>  
            </Route>
            <Route path= "/ventas">
            <PrivateRoute roleList={['admin']} estadoList={['autorizado']} >
              <Ventas/>
            </PrivateRoute>  
            </Route>
            <Route path= "/vehiculos/form">
            <PrivateRoute roleList={['admin']} estadoList={['autorizado']} >
              <FormProductos />
            </PrivateRoute>  
            </Route>
            <Route path= "/vehiculos">
            <PrivateRoute roleList={['admin']} estadoList={['autorizado']}>
              <Productos/>
            </PrivateRoute>
            </Route>
            <Route path='/usuarios'>
            <PrivateRoute roleList={['admin']} estadoList={['autorizado']} >
            <Usuarios/>
            </PrivateRoute>
            </Route>
            <Route path= "/">
              <Index/>
            </Route>
          </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    </Auth0Provider>
  )
}

export default App;
