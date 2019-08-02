import React from "react";

class Seleccion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gastos: [], value: "" };
    this.listadoPorMes = this.listadoPorMes.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  listadoPorMes() {
    
    // this.props.listadoDeGastoPorMes(this.state.value);
  }

  handleSelectChange(event) {

    console.log(event);
    this.setState({value: event});
//  this.props.listadoDeGastoPorMes(this.state.value);
  //  console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <form>
          <div className="input-field col s6">
            <select onChange={(event) => this.handleSelectChange(event.target.value)}>
              
            <option value=" " disabled selected>Selecciona el mes</option>
              <option value="0">Enero</option>
              <option value="1">Febrero</option>
              <option value="2">Marzo</option>
              <option value="3">Abril</option>
              <option value="4">Mayo</option>
              <option value="5">Junio</option>
              <option value="6">Julio</option>
              <option value="7">Agosto</option>
              <option value="8">Setpiembre</option>
              <option value="9">Octubre</option>
              <option value="10">Noviembre</option>
              <option value="11">Diciemnre</option>
            </select>
          </div>
        </form>
      </div>
      /* //   <select */
      //   name="value"
      //   onChange={() => this.listadoPorMes(this.state.value)}
    );
  }
}
export default Seleccion;
