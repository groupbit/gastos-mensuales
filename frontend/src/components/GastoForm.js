import React from "react";

class GastoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gasto: props.gasto };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.estadoInicial = this.estadoInicial.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({ gasto: props.gasto });
  }
  handleChange(event) {
    console.log("editando");
    var newGasto = Object.assign({}, this.state.gasto);
    newGasto[event.target.name] = event.target.value;
    this.setState({ gasto: newGasto });
  }
  handleSubmit(event) {
    this.editarGasto();
    event.preventDeafult();
  }
  estadoInicial() {
    this.setState({ gasto: { fecha: "", concepto: "", importe: "" } });
  }
  editarGasto() {
    console.log(this.state);
    fetch("http://localhost:8888/gastos", {
      method: "PUT",
      body: JSON.stringify(this.state.gasto),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(this.estadoInicial());
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s5">
            <div className="card">
              <div className="card-content">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field s12">
                    <input
                      type="text"
                      name="fecha"
                      placeholder="12-02-2019"
                      value={this.state.gasto.fecha}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field s12">
                    <input
                      type="text"
                      name="concepto"
                      placeholder="gas"
                      value={this.state.gasto.concepto}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field s12">
                    <input
                      type="number"
                      name="importe"
                      placeholder="1200"
                      value={this.state.gasto.importe}
                      onChange={this.handleChange}
                    />
                    <input
                      type="submit"
                      value="Submit"
                      className="btn brn-light darken-4"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GastoForm;
