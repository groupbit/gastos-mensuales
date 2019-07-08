import React from 'react';
import Gastos from './components/Gastos.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import './App.css';

function GastosComponent(){
  return (<Gastos losGastos="Gastos" />)

}

function App() {
  return (
  <div>
    <Router>
      <header>
         <div>
			    <nav  className="light-blue darken-4">
            <div class="container">
            <a> Los gastos del mes</a> 
            </div>
          </nav>
        </div>
      </header>
      <main>
      <Switch>
            <Route path="/gastos" component={GastosComponent} />

      </Switch>
      </main>
      </Router>
     
      </div>
  
  );
  
}

export default App;



