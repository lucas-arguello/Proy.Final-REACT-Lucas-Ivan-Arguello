import { useCartContext } from "../../Context/CartContext";

export const CartList = () => {
  const { cartList, deleteItem } = useCartContext();

  return (
    <div className="w-100 m-2">
      {cartList.map((prod) => (
        <div className="d-grid w-75 mt-3" key={prod.id}>
          <p><strong>Nombre:</strong> {prod.nombre}</p>
          <img className="w-50 " src={prod.img} alt="imagen" />
          <label className="m-2">
            {" "}
            <strong>Precio:</strong> ${prod.precio} - <strong>Cantidad:</strong> {prod.cantidad}
          </label>

          <button className="w-50" onClick={() => deleteItem(prod.id)}>
            {" "}
            Eliminar Producto
          </button>
        </div>
      ))}
    </div>
  );
};
