/* eslint-disable react/jsx-no-undef */
import { NavLink } from "react-router-dom";

export default function Menu() {
  //const claseActiva = "active";

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Prueba
          </NavLink>
          <div className="collapse navbar-collapse" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/clientes"
                >
                  Clientes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
