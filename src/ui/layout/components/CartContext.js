import { createContext, useState, } from "react";

// Contexto 

 export const CartContext = createContext();

// Provider

const Provider = contexto.Provider

export const MiProvider = ({children}) => {

    const [cartItems, setcartItems] = useState ([])

        // Para agregar productos al carrito

        const addItem = (id, name, image, precio, stock) => {
            if (isInCart(id)) {
                let index = cartItems.findIndex((index) => (index.id === id))
        let copiaCart = [...cartItems]
        copiaCart[index].stock += stock
        setcartItems(copiaCart)
        } else {
        const itemToAdd = {id, name, image, precio, stock}
        setcartItems([...cartItems, itemToAdd])
    }

    // Agrega cantidad al icono del Cart en NavBar
        const addItemNavBar = () => {
            let stock = 0
        cartItems.forEach((product) => {
        stock = stock + product.stock
        })
        return stock
        }

    // Verifica si el producto ya fue agrgado al Cart
        const isInCart = (id) => {
            return cartItems.some((item) => (item.id === id))
        }

    //Quitar prducto del Cart
        const removeItem = (id) => {
        setcartItems(cartItems.filter((item) => (item.id !== id)))
        }

    //Vaciar Cart
        const clear = () => {
        setcartItems ([])
        }
 }

    return (
        <Provider value={{cartItems, addItem, addItemNavBar, isInCart, removeItem, clear}}>
            {children}
        </Provider>
    )
}
