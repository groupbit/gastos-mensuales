import React from 'react';
import GastoRow from './GastoRow'
import GastoForm from './GastoForm'


class Gastos extends React.Component{
    constructor(props){
        super(props)
    this.state={gastos:[], selected:{}}
    this.select=this.select.bind(this);
    // this.componentWillMount=this.componentWillMount.bind(this);
    this.gastoChange=this.gastoChange.bind(this);
    }

    componentWillMount(){
      fetch(`http://localhost:8888/gastos`)
      .then(res=>res.json())
      .then(gtos=>this.setState({gastos:gtos}));
      
    }

    render() {
        if( this.state.gastos.length > 0 ) {
          
          return(
            <div className="gastosCSS">
            <GastoForm gasto={this.state.selected}  gastoChange={this.gastoChange}></GastoForm>

                <h1>Listado de gastos</h1>
            
            <table className="table">
              <thead>
                <tr>
                   <th>fecha</th>
                   <th>concepto</th>
                   <th>importe</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </table>
           
          </div>)
        }
        else {
          return(
            <div className="gastosCSS">
                <h2>Gastos</h2>
                CARGANDO
            </div>);  
        }
  
    }
      renderRows(){
        return this.state.gastos.map((unGasto, index)=> {
          return(
              <GastoRow gasto={unGasto} selector={this.select}/>
          );
          })
          
      }
      select(unGasto){
        this.setState({selected:unGasto})
      }

      gastoChange(unGasto){
        var newGastos= this.state.gastos.map((item)=>(unGasto._id !==item._id) ? item:unGasto)
        this.setState({gastos:newGastos});
       
      }
     
}
export default Gastos;



