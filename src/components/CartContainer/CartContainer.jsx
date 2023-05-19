
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { CartList } from "../CartList/CartList"
import { Formulary } from "../Formulario/Formulario"


export const CartContainer = () => {
    
    
    const {cartList, emptyCart, totalPrice, totalQuantity} = useCartContext()

  

    return (
        <div className="m-5">
            { cartList.length !== 0 ?
                <div className="w-50">
                        { <CartList/>}
                        
                        <h4 className="mt-5"> Cantidad Total de productos: {totalQuantity()} u.</h4>
                        <h4> Precio Total de la compra: ${totalPrice()}</h4>
                        <button onClick={emptyCart} className=" w-50 btn btn-outline-danger">Vaciar Carrito</button>
            
                        {<Formulary/>}

                </div>
            
                :

                <div>
                    <h2> No hay produstos en el carrito</h2>
                    <Link to="/"> Volver al panel de productos </Link>
                </div>
            }
        </div>
    )
}
