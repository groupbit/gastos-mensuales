import React from "react";

class GastoRow extends React.Component {
  constructor(props) {
    super(props);
    this.selectGasto = this.selectGasto.bind(this);
    this.actualizar=this.actualizar.bind(this);
  
  }
  estadoInicial() {
    this.setState({ gasto: { fecha: "" , concepto: "", importe: "" } });
  }
  selectGasto() {
    this.props.selector(this.props.gasto);
  }
  actualizar() {
    this.props.actualizarListaDeGastos(this.props.gasto);
  }
 
  eliminarGasto(id) {
    fetch("http://localhost:8888/gastos/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(this.actualizar)
   
    
  }
  render() {
    return (
      
      <tr key={this.props.gasto._id}>
        <td>{this.props.gasto.fecha}</td>
        <td>{this.props.gasto.concepto}</td>
        <td>{this.props.gasto.importe}</td>
        <td>
            <button
            type="button"
            className="btn #283593 indigo darken-3"
            style={{ margin: "2px" }}
            onClick={this.selectGasto}
          >
            <i className="material-icons">edit</i>
          </button>
          <button
            type="button"
            class="btn #283593 indigo darken-3"
            onClick={() => {
              this.eliminarGasto(this.props.gasto._id);
            }}
          >
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
      
    );
  }
}
export default GastoRow;
