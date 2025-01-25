import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./rutas/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
}
