import { NavLink } from 'react-router-dom'
import React from 'react'



const CartWidget = () => {

    return (
        <>
        <span className="material-symbols-outlined carrito">
            shopping_cart 
            <NavLink to="/cart"><p>Mi carrito  {`(0)`}</p></NavLink>
        </span>
        </>
    )
}

export default CartWidget