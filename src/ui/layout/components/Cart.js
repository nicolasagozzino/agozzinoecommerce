import React from 'react'
import { useContext } from 'react'
import { CartContext  } from './CartContext'
import productos from './productos'

function Cart() {
    const {cartItems, removeItem, clear} = useContext(CartContext)
    return (
      <>    
      <div>
        <div>
        <h2>Mi Carrito</h2>
        {cartItems.map((products) => (
          <div key={products.id}>
              <img src={products.pictureUrl} alt="" />
              <h2>{products.title}</h2>
              <p>${products.price}</p>
              <p>{products.quantity}</p>     
              <button onClick={() => removeItem(products.id)} >Borrar producto</button>
              <div><button onClick={clear}>Vaciar Carrito</button></div>
          </div>
              ))}
      </div>
      </div>
      </>
    )}

export default Cart