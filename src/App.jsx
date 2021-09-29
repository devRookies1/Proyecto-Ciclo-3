import Layout from 'layout/Layout';
import Index from 'pages';
import FormProductos from 'pages/FormProductos';
import FormVentas from 'pages/index'
import Productos from 'pages/Productos'
import Usuarios from 'pages/Usuarios'
import Ventas from 'pages/Ventas'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './styles/App.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route path='/Usuarios'>
              <Usuarios/>
            </Route>
          <Route path='/Productos'>
              <Productos/>
            </Route>
            <Route path='/Ventas'>
              <Ventas/>
            </Route>
            <Route path='/'>
              <Index/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App;
