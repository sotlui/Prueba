import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./menu/Menu";
import rutas from "./route-config";

function App() {
  //<Route path="/clientes" element={<ClienteList />} />
  return (
    <Router>
      <Menu />
      <div className="container">
        <Routes>
         {rutas.map((ruta) => (
                <Route key={ruta.path} path={ruta.path} element={<ruta.componente />}/>
              ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
