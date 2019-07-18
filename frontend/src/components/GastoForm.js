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
    var newGasto = Object.assign({}, this.state.gasto);
    newGasto[event.target.name] = event.target.value;
    this.setState({ gasto: newGasto });
  }

  handleSubmit(event) {
    if (this.state.gasto._id) {
      this.editarGasto();
    } else {
      this.agregarGasto();
    }
    event.preventDefault();
  }

  estadoInicial() {
    this.setState({ gasto: { fecha: "", concepto: "", importe: "" } });
  }

  agregarGasto() {
    fetch(`http://localhost:8888/gastos`, {
      method: "POST",
      body: JSON.stringify(this.state.gasto),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => this.props.gastoAdd())
      .then(this.estadoInicial);
  }

  editarGasto() {
    fetch("http://localhost:8888/gastos", {
      method: "PUT",
      body: JSON.stringify(this.state.gasto),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => this.props.gastoChange(this.state.gasto))
      .then(this.estadoInicial);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s5">
            <div className="card">
              <div className="card-panel blue-grey ">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field s12">
                    <input
                      className="#fce4ec pink lighten-5"
                      type="date"
                      name="fecha"
                      placeholder="2019-12-28"
                      value={this.state.gasto.fecha}
                      onChange={this.handleChange}
                    />
                  </div>

                  <input
                    className="#fce4ec pink lighten-5"
                    type="text"
                    name="concepto"
                    placeholder="gas"
                    value={this.state.gasto.concepto}
                    onChange={this.handleChange}
                  />

                  <div className="input-field s12">
                    <input
                      className="#fce4ec pink lighten-5"
                      type="text"
                      required
                      name="importe"
                      placeholder="1200"
                      value={this.state.gasto.importe}
                      onChange={this.handleChange}
                    />
                    <button
                      type="submit"
                      className="btn #283593 indigo darken-3 "
                      style={{ margin: "2px" }}
                      
                    >
                      Guardar
                    </button>
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
