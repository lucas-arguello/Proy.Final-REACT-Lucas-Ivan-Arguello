import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

//creo este custom hook para no tener que importar 2 veces.
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    //ACA definimos los ESTADOS y FUNCIONES GLOBALES
    const [cartList, setCartList] = useState ([])

    const addToCart = (newProduct) => {

        const idx = cartList.findIndex (prod => newProduct.id === prod.id)

        if(idx === -1){
            setCartList ([ ...cartList, newProduct])
            //creo un Spread Operator para no pisar lo que ya tenemos agregado al carrito.

        }

        else {
            cartList[idx].cantidad += newProduct.cantidad
            setCartList( [...cartList])
        }
    }

    const emptyCart = () => {
        setCartList([])
    }

    const totalQuantity = () => cartList.reduce((cantTotal, objProd) => cantTotal += objProd.cantidad, 0)

    const totalPrice = () => cartList.reduce((total, objProd) => total += (objProd.cantidad * objProd.precio), 0)

    const deleteItem = (Itemid) => {
        setCartList (cartList.filter (prod => prod.id !== Itemid))
    }

    return (
            <CartContext.Provider value= {{
 
                cartList,
                addToCart,
                emptyCart,
                totalPrice,
                totalQuantity,
                deleteItem
            }}>

                {children}

            </CartContext.Provider>


    )
}