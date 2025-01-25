import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Home from "../components/Home";
import ListProducts from "../components/ListProducts";
import RegisterProduct from "../components/RegisterProduct";
import EditForm from "../components/EditForm";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Menu() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("authToken");

  const handleProtectedRoute = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      Swal.fire({
        icon: "warning",
        title: "Acceso Restringido",
        text: "Debes iniciar sesión para acceder a esta página.",
        confirmButtonText: "Iniciar Sesión",
        confirmButtonColor: "#007bff",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login"); // Redirige al login si el usuario lo confirma
        }
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      text: "Has cerrado sesión exitosamente.",
      timer: 1500,
      showConfirmButton: false,
    });
    navigate("/login");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Mini App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/productos"
                    onClick={(e) => handleProtectedRoute(e, "/productos")}
                  >
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/registro"
                    onClick={(e) => handleProtectedRoute(e, "/registro")}
                  >
                    Registro de Producto
                  </Link>
                </li>
                {!isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Iniciar Sesión
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Registrar Usuario
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={logout}>
                      Cerrar Sesión
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
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
    </>
  );
}
