import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])


    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity +=1 
            return setCart(newCart)
        }
        
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
        // [
        //     ...cart.slice(0, productInCartIndex),
        //     {...cart[productInCartIndex], quantity: cart[productInCartIndex].quantity++},
        //     ...cart.slice(productInCartIndex++),
        // ] :
        // [
        //     ...cart,
        //     {
        //         quantity:  1
        //     }
        // ]
    } 

    const removeFromCart = product => {
        const newCart = cart.filter(item => item.id !== product.id)
        return setCart(newCart)
    }

    const clearCart = () => setCart([])
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}