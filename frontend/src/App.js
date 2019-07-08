import React from 'react';
import Gastos from './components/Gastos.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import './App.css';
// import GastoForm from './components/GastoForm.js';


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
   
      {/* <Gastos></Gastos>  */}
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



// import React from 'react';
// import Gastos from "./components/Gastos"

// import './App.css';


// function App() {
//   return (
//     <div className="container">
    
//         <header className="App-header">
      
//          <div>
// 			    <nav  class="navbar navbar-default navbar-fixed-top navbar-custom App">
//             <div class="navbar-header">
//      		    <a href="/clientes" class="btn btn-info" role="button">Gastos Mensuales</a>   		    
//        	    </div>
//        	  </nav>
//          </div>
//       </header>     
//       <main className="App">
//         </main>
    
//     </div>
//   );
// }







// export default App;
