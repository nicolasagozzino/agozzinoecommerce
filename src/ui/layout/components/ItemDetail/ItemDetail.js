import React from 'react'
import ItemCount from '../ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContex'

const ItemDetail = ({product}) => {

  const [comprarProducto, setComprarProducto] = useState();
  const onAdd = (cantidadSeleccionada) => {
      setComprarProducto(cantidadSeleccionada);
      console.log("Se añadieron " + cantidadSeleccionada + " producto/s al carrito") 
  }

  const { addItem } = useContext(CartContext)

  const addToCart = (stock) => {
    addItem(product.name, product.image, product.precio, product.stock)
  }


  return (
    <div className="detailContainer">
        <img src={product.image} alt={product.name} width="300"/>
        <div className='detail'>
            <h2>{product.name}</h2>
            <h2>${product.precio}</h2>
            <h2>{product.descripcion}</h2>
            <ItemCount stock={product.stock} initial={1}  onAdd={onAdd} />
            <br />
            <Link to="/cart"><button>Terminar compra</button></Link>
        </div>
    </div>

  )
}

export default ItemDetail;