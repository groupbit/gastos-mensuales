import React from 'react';

class GastoRow extends React.Component{
  constructor(props){
    super(props);
     this.selectGasto=this.selectGasto.bind(this);
    
  }
  selectGasto(){
    this.props.selector(this.props.gasto)
  }

  

render(){
    return(
    <tr key={this.props.gasto._id} >
      <td>{this.props.gasto.fecha}</td>
      <td>{this.props.gasto.concepto}</td>
      <td>{this.props.gasto.importe}</td>
      <td> <button type="button" className="btn btn-success"
       style={{margin:'4px'}} onClick={this.selectGasto}>Editar</button>
       
      
       <button type="button" class="btn btn-danger" onClick={this.eliminarGasto}> Borrar</button></td>
    </tr>)

}
}
export default GastoRow;