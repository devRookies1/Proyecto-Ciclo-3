
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
        <Route path= {["/ventas","/ventasform","/productos","/productosform","/usuarios","/"]}>
          <Switch>
            <Route path= "/ventas">
              <Ventas/>
            </Route>
            <Route path= "/ventasform">
              <FormVentas />
            </Route>
            <Route path= "/productos">
              <Productos/>
            </Route>
            <Route path= "/productosform">
              <FormProductos />
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
