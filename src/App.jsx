
import React, { useState, useEffect } from 'react';
import Layout from 'layout/Layout';
import Index from 'pages';
import FormProductos from 'pages/FormProductos';
import FormVentas from 'pages/FormVentas';
import Login from 'pages/Login';
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
      redirectUri="http://localhost:3000"
      audience="api-autenticacion-vehiculos"
    >
    <UserContext.Provider value={{ userData, setUserData }}>
    <Router>
      <Switch>
        <Route path= {["/ventas","/ventas/form","/vehiculos","/vehiculos/form","/usuarios","/"]}>
          <Layout>
          <Switch>
            <Route path= "/ventas/form">
              <FormVentas />
            </Route>
            <Route path= "/ventas">
              <Ventas/>
            </Route>
            <Route path= "/vehiculos/form">
              <FormProductos />
            </Route>
            <Route path= "/vehiculos">
              <Productos/>
            </Route>
            <Route path='/usuarios'>
            <PrivateRoute roleList={['admin']}>
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
