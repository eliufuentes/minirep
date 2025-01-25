import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const auth = getAuth();

  const onLogin = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Inicio de sesión exitoso");
      navigate("/productos"); // Redirige a productos
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onLogin)}>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} required />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" {...register("password")} required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}
