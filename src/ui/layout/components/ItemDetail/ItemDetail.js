import React from 'react'
import ItemCount from '../ItemCount';

const ItemDetail = ({product}) => {
  return (
    <div className="detailContainer">
        <img src={product.image} alt={product.name} width="300"/>
        <div className='detail'>
            <h2>{product.name}</h2>
            <h2>${product.precio}</h2>
            <h2>{product.descripcion}</h2>
            <ItemCount stock={product.stock} initial={1} />
        </div>
    </div>

  )
}

export default ItemDetail;