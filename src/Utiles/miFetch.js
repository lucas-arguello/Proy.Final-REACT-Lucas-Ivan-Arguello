import { productos } from "../Utiles/InStock";

export const miFetch = (id) => {
  return new Promise((res, rej) => {
    setTimeout(
      () => {
        res(!id ? productos : productos.find((producto) => producto.id === id));
      },

      2000
    );
  });
};
