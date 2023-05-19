import { Link } from "react-router-dom";

export const Item = ({
  id,
  categoria,
  nombre,
  cantidad,
  descr,
  precio,
  img,
}) => {
  return (
    <div className="card w-25 ">
      <Link to={`/detail/ ${id}`}>
        <img className="m-3" src={img} alt="imagen-card" />
      </Link>
      <div className="card-body">
        <h5> Nombre: {nombre}</h5>
        <label>
          <strong>Categoria:</strong> {categoria}
        </label>
        <p>
          <strong>Descripcion:</strong> {descr}
        </p>
        <p>
          <strong>Precio: </strong> ${precio}
        </p>
        <p>
          <strong>Cantidad en Stock:</strong> {cantidad}
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/detail/${id}`}>
          <button className="w-50 btn btn-outline-dark"> Detalle </button>
        </Link>
      </div>
    </div>
  );
};
