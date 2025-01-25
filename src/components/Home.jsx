import React from "react";

export default function Home() {
  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <div className="container text-center py-5">
      <h1 className="display-4 mb-3 text-primary">Bienvenido a Mini App</h1>
      <p className="lead">
        {isLoggedIn
          ? "Estás autenticado. ¡Disfruta de la aplicación!"
          : "Por favor, inicia sesión para continuar."}
      </p>
      {!isLoggedIn && (
        <a href="/login" className="btn btn-primary btn-lg mt-4">
          Iniciar Sesión
        </a>
      )}
    </div>
  );
}
