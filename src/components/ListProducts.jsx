import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/appConfig";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      const array_products = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(array_products);
    });
  }, []);

  const deleteProduct = (id) => {
    if (!user) {
      alert("Debe iniciar sesión para realizar esta acción");
      return;
    }
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(doc(db, "products", id));
        Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
      }
    });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Lista de Productos</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  {user && (
                    <>
                      <Link
                        to={`/editar/${product.id}`}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Eliminar
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hay productos por el momento.</p>
        )}
      </div>
    </div>
  );
}
