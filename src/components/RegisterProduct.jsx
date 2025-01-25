import React, { useState } from "react";
import { db } from "../firebase/appConfig";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export default function RegisterProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Registrar un nuevo producto en Firestore
      await addDoc(collection(db, "products"), {
        name: productName,
        price: parseFloat(productPrice),
      });

      Swal.fire({
        icon: "success",
        title: "Producto registrado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });

      // Limpiar los campos del formulario
      setProductName("");
      setProductPrice("");
    } catch (error) {
      console.error("Error al registrar el producto:", error);
      Swal.fire({
        icon: "error",
        title: "Error al registrar el producto",
        text: error.message,
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">Registrar Producto</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Nombre del Producto
            </label>
            <input
              type="text"
              id="productName"
              className="form-control"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Precio del Producto
            </label>
            <input
              type="number"
              id="productPrice"
              className="form-control"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Registrar Producto
          </button>
        </form>
      </div>
    </div>
  );
}
