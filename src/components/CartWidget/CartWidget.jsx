import { useCartContext } from "../../Context/CartContext"


export const CartWidget = () => {

      const  {totalQuantity} = useCartContext ()


  return (
    <div className="fs-5 fw-bolder">
      {totalQuantity() !== 0 && totalQuantity()} 🛒
    </div>
  )
}












// const CartWidget = () => {
//   return (
//     <div>

//       2🛒 
//     </div>
//   )
// }

// export default CartWidget

