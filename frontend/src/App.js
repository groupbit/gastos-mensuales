import React from "react";
import Gastos from "./components/Gastos.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";


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
       
              <a href="/gastos" className="brand-logo" role="button">
                {" "}
                Planilla de gastos
              </a>
            </div>
          </nav>
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
