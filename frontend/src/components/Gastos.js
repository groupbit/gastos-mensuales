import React from "react";
import GastoRow from "./GastoRow";
import GastoForm from "./GastoForm";


class Gastos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gastos: [], selected: {} };
    this.select = this.select.bind(this);
    this.gastoChange = this.gastoChange.bind(this);
    this.actualizarListaDeGastos = this.actualizarListaDeGastos.bind(this);
    this.sumarGastos = this.sumarGastos.bind(this);
    this.gastoAdd = this.gastoAdd.bind(this);
  }

  componentWillMount() {
    this.listado();
  }

  listado() {
    fetch(`http://localhost:8888/gastos`)
      .then(res => res.json())
      .then(gtos => this.setState({ gastos: gtos }));
  }

  render() {
    if (this.state.gastos.length > 0) {
      return (
        <div className="container">
      
          <GastoForm
            gasto={this.state.selected}
            gastoChange={this.gastoChange}
            actualizarListaDeGastos={this.actualizarListaDeGastos}
            gastoAdd={this.gastoAdd}
          />

          <div className="container">
            <div className="row">
              <table className="left responsive-table">
                <thead>
                  <tr>
                    <th>fecha</th>
                    <th>concepto</th>
                    <th>importe</th>
                  </tr>
                </thead>
                <tbody className="bordered hoverable">
                  {this.renderRows()}
                </tbody>
                <td>Total</td>
                <td />
                <td>{this.sumarGastos()}</td>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="gastosCSS">
          <h2>Gastos</h2>
          CARGANDO
        </div>
      );
    }
  }
  renderRows() {
    return this.state.gastos.map((unGasto, index) => {
      return (
        <GastoRow
          gasto={unGasto}
          selector={this.select}
          actualizarListaDeGastos={this.actualizarListaDeGastos}
          gastoChange={this.gastoChange}
        />
      );
    });
  }
  select(unGasto) {
    this.setState({ selected: unGasto });
  }

  gastoChange(unGasto) {
    var newGastos = this.state.gastos.map(item =>
      unGasto._id !== item._id ? item : unGasto
    );
    this.setState({ gastos: newGastos, selected: {} });
  }

  actualizarListaDeGastos(unGasto) {
    var gastoActualizado = this.state.gastos.filter(
      item => unGasto._id !== item._id
    );
    this.setState({ gastos: gastoActualizado });
  }
  sumarGastos() {
    var inicio = 0;
    this.state.gastos.forEach(g => {
      inicio += parseFloat(g.importe);
    });
    return inicio;
  }
  gastoAdd() {
    this.listado();
  }
}

export default Gastos;
