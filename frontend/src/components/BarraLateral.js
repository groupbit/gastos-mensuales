import React from "react";

class BarraLateral extends React.Component {
  render() {
    return (
      <div className="container">
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background Lateral" />
              <a href="https://outlook.live.com/mail/inbox">
                Valeria Grandi
              </a>
            </div>
          </li>
          <li>
            <a href="http://www.naturgy.com.ar/ar/1285084496929/inicio.html">
              Naturgy
            </a>
          </li>
          <li>
            <a href="https://hb.redlink.com.ar/bna/login.htm">Home Banking</a>
          </li>
          <li>
            <div class="divider" />
          </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
export default BarraLateral;
