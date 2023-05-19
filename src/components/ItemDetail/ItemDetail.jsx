import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = (product) => {
  const [isCant, setIsCant] = useState(false);

  const { addToCart } = useCartContext();

  const onAdd = (cantidad) => {
    addToCart({ ...product, cantidad });
    setIsCant(true);
  };

  //console.log(cartList) //--- para probar si carga el carrito

  return (
    
      <div className="card w-25">
        <div className="card-body">
          <h5> Nombre: {product.nombre}</h5>
          <label>
            <strong>Categoria:</strong> {product.categoria}
          </label>
          <p>
            <strong>Descripcion:</strong> {product.descr}
          </p>
        </div>
        <div className="m-3">
          <img className="w-100 mb-2" src={product.img} alt="imagen-card" />
          <p className="text-center">
            <strong>Precio: </strong> ${product.precio}
          </p>
          <p className="text-center">
            <strong>Cantidad en Stock:</strong> {product.cantidad}
          </p>
        </div>

        <div className="card-footer">
          {!isCant ? (
            <ItemCount onAdd={onAdd} />
          ) : (
            <>
              <Link to={"/cart"} className="btn btn-outline-danger">
                {" "}
                Terminar Compra
              </Link>
              <Link to={"/"} className="btn btn-outline-success">
                {" "}
                Seguir Compra
              </Link>
            </>
          )}
        </div>
      </div>
    
  );
};
