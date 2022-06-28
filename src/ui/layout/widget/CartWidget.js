import { NavLink } from 'react-router-dom'

const CartWidget = () => {
    return (
        <>
        <span className="material-symbols-outlined carrito">
            shopping_cart 
            <NavLink to="/cart"><p>Mi carrito</p></NavLink>
        </span>
        </>
    )
}

export default CartWidget