
import Login from 'pages/Login';
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
      </Switch>

    </Router>
  )
}

export default App;
