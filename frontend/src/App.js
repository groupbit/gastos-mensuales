import React from "react";
import Gastos from "./components/Gastos.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BarraLateral from "./components/BarraLateral.js"
import "./App.css";
import Seleccion from "./components/Seleccion.js"

function GastosComponent() {
  return <Gastos losGastos="Gastos" />;
}

function App() {
  return (
    <div className="Fondo">
      <Router>
        <header>
          <nav className="light-blue darken-4">
            <div className="container">
              <a href="/" className="brand-logo" role="button">
                Planilla de gastos
              </a>
            </div>
          </nav>
      <BarraLateral></BarraLateral>    
      
      <Seleccion ></Seleccion>
     
        </header>
        <main>
          <Switch>
            <Route path="/" component={GastosComponent} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
