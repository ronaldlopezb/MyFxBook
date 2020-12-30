import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Menu from './components/Menu';
import Inicio from './components/Inicio';

function App() {
  return (
    <div className="container mt-5">
      <Router>
      <div className="container mt-5">
        <h1>MyFxBook - APi</h1>
        <Menu/>
        <hr />

        <Switch>
          <Route path="/civilizacion/:idCivilizacion">
            
          </Route>
          
          <Route path="/civilizacion">
            
          </Route>

          <Route path="/equipo">
            
          </Route>

          <Route path="/" exact>
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
