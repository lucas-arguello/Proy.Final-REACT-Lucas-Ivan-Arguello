import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "Firebase/firestore";
import { useCartContext } from "../../Context/CartContext";


export const Formulary = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });

  const { cartList, emptyCart, totalPrice } = useCartContext();

  const [errors, setErrors] = useState({});

  const generateOrder = (evt) => {
    evt.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const order = {
        buyer: dataForm,
        items: cartList.map(({ nombre, id, precio, cantidad }) => ({
          nombre,
          id,
          precio,
          cantidad,
        })),
        total: totalPrice(),
      };

      const dbFirestore = getFirestore();
      const orderCollection = collection(dbFirestore, "orders");

      addDoc(orderCollection, order)
        .then((res) =>
          alert(`Su compra fue confirmada y su Order Id es: ${res.id}`)
        )
        .catch((err) => console.log(err))
        .finally(() => {
          emptyCart();
          setDataForm({
            name: "",
            phone: "",
            email: "",
            confirmEmail: "",
          });
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleOnChange = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  const validateForm = () => {
    const errors = {};

    if (!dataForm.name.trim()) {
      errors.name = "El nombre es requerido";
    }

    if (!dataForm.phone.trim()) {
      errors.phone = "El teléfono es requerido";
    }

    if (!dataForm.email.trim()) {
      errors.email = "El email es requerido";
    } 

    if (dataForm.email !== dataForm.confirmEmail) {
      errors.confirmEmail = "Los emails no coinciden";
    }

    return errors;
  };

 return (
    <div className= "text-center w-60">
        <form className= "d-grid content-center mt-5 col-3" onSubmit={generateOrder}>
        
        
          {errors.name && (
            <span className="m-2 text-danger me-auto">{errors.name}</span>
          )}
          <input
            className= "m-2 text-center"
            type="text"
            name="name"
            onChange={handleOnChange}
            value={dataForm.name}
            placeholder="Ingrese su Nombre y Apellido"
          />
          {errors.phone && (
            <span className="m-2 text-danger me-auto">{errors.phone}</span>
          )}
          <input
            className= "m-2 text-center"
            type="num"
            name="phone"
            onChange={handleOnChange}
            value={dataForm.phone}
            placeholder="Ingrese su Telefono"
          />
          {errors.email && (
            <span className="m-2 text-danger me-auto">{errors.email}</span>
          )}
          <input
            className= "m-2 text-center"
            type="text"
            name="email"
            onChange={handleOnChange}
            value={dataForm.email}
            placeholder="Ingrese su email"
          />
          {errors.confirmEmail && (
            <span className="text-danger me-auto">{errors.confirmEmail}</span> 
            )}
            <input
              className= "m-2 text-center"
              type="text"
              name="confirmEmail"
              onChange={handleOnChange}
              value={dataForm.confirmEmail}
              placeholder="Confirme su email"/>

            <button className="text- center mt-3 btn btn-outline-success">Generar Orden</button>
        </form>

    </div>
        
      )}