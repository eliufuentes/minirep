import React from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const auth = getAuth();

  const onRegister = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert("Usuario registrado exitosamente");
      navigate("/login"); // Redirige al inicio de sesión
    } catch (error) {
      alert("Error al registrar usuario: " + error.message);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit(onRegister)}>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} required />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" {...register("password")} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
