import React from "react";

class GastoRow extends React.Component {
  constructor(props) {
    super(props);
    this.selectGasto = this.selectGasto.bind(this);
    this.actualizar = this.actualizar.bind(this);
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
    }).then(this.actualizar());
  }
  render() {
    return (
      <tr key={this.props.gasto._id}>
        <td>{this.props.gasto.fecha}</td>
        <td>{this.props.gasto.concepto}</td>
        <td>{this.props.gasto.importe}</td>
        <td>
          {" "}
          <button
            type="button"
            className="btn btn-success"
            style={{ margin: "4px" }}
            onClick={this.selectGasto}
          >
            Editar
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              this.eliminarGasto(this.props.gasto._id);
            }}
          >
            Borrar
          </button>
        </td>
      </tr>
    );
  }
}
export default GastoRow;
