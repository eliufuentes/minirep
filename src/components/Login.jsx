import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onLogin = async (data) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);

      // Guardar el token de usuario en localStorage
      const token = await userCredential.user.getIdToken();
      localStorage.setItem("authToken", token);

      alert("Inicio de sesión exitoso");
      navigate("/productos");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="card p-4" style={{ width: "350px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div className="text-center mb-4">
          <i
            className="bi bi-person-circle"
            style={{ fontSize: "4rem", color: "#007bff" }}
          ></i>
        </div>
        <form onSubmit={handleSubmit(onLogin)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email")}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password")}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>
        <div className="text-center mt-3">
          <span>¿No tienes cuenta?</span>{" "}
          <a
            href="/register"
            style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}
          >
            Registrarse
          </a>
        </div>
      </div>
    </div>
  );
}
