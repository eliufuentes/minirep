import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ListProducts from "../components/ListProducts";
import RegisterProduct from "../components/RegisterProduct";
import EditForm from "../components/EditForm";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Menu() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/registro">Registro de Producto</Link>
            </li>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/register">Registrar Usuario</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ListProducts />} />
        <Route path="/registro" element={<RegisterProduct />} />
        <Route path="/editar/:id" element={<EditForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
