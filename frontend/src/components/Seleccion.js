import React from "react";

class Seleccion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gastos: [], value: " " };
  }

  render() {
    return (
      <form>
        <select
          value={this.state.value}
          onChange={this.props.listadoDeGastoPorMes}
        >
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
      </form>
    );
  }
}

export default Seleccion;
