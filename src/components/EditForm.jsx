import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/appConfig";
import { useForm } from "react-hook-form";

export default function EditForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { id } = useParams(); // Obtener el ID del producto
  const navigate = useNavigate();

  // Cargar los datos actuales del producto
  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setValue("name", data.name); // Prellenar el campo de nombre
        setValue("description", data.description); // Prellenar el campo de descripción
      } else {
        console.error("El producto no existe.");
      }
    };

    fetchProduct();
  }, [id, setValue]);

  // Actualizar el producto
  const onSubmit = async (data) => {
    try {
      const docRef = doc(db, "products", id);
      await updateDoc(docRef, {
        name: data.name,
        description: data.description,
      });
      navigate("/productos"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre del Producto
            </label>
            <input
              type="text"
              id="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descripción
            </label>
            <textarea
              id="description"
              className={`form-control ${errors.description ? "is-invalid" : ""}`}
              rows="4"
              {...register("description", { required: "La descripción es obligatoria" })}
            ></textarea>
            {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}
