
import Layout from 'layout/Layout';
import Index from 'pages';
import FormProductos from 'pages/FormProductos';
import FormVentas from 'pages/FormVentas';
import Login from 'pages/Login';
import Productos from 'pages/Productos';
import Usuarios from 'pages/Usuarios';
import Ventas from 'pages/Ventas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path = {["/login"]}>
          <Switch>
            <Route path = "/login">
              <Login/>
            </Route>
          </Switch>
        </Route>
        <Route path= {["/ventas","/ventas/form","/productos","/productos/form","/usuarios","/"]}>
          <Layout/>
          <Switch>
            <Route path= "/ventas/form">
              <FormVentas />
            </Route>
            <Route path= "/ventas">
              <Ventas/>
            
            </Route>
            <Route path= "/productos/form">
              <FormProductos />
            </Route>
            <Route path= "/productos">
              <Productos/>
            </Route>
            <Route path= "/usuarios">
              <Usuarios/>
            </Route>
            <Route path= "/">
              <Index/>
            </Route>
          </Switch>

        </Route>
      </Switch>

    </Router>
  )
}

export default App;
