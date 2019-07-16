import React from "react";

class GastoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gasto: props.gasto };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
//    this.estadoInicial = this.estadoInicial.bind(this);
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
    this.editarGasto();
    event.preventDefault();
  }

  estadoInicial() {
    this.setState({ gasto: { fecha: "", concepto: "", importe: "" } });
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
                <form onSubmit={this.handleSubmit} className="responsive-form">
                  <div className="input-field s12">
                    <input
                      className="#fce4ec pink lighten-5"
                      type="text"
                      name="fecha"
                      placeholder="2019-12-28"
                      value={this.state.gasto.fecha}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field s12">
                    <input
                      className="#fce4ec pink lighten-5"
                      type="text"
                      name="concepto"
                      placeholder="gas"
                      value={this.state.gasto.concepto}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field s12">
                    <input
                      className="#fce4ec pink lighten-5"
                      type="number"
                      name="importe"
                      placeholder="1200"
                      value={this.state.gasto.importe}
                      onChange={this.handleChange}
                    />
                    <input
                      className="btn #283593 indigo darken-3"
                      type="submit"
                      value="Submit"
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
