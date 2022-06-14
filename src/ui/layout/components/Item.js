import React from 'react'
import ItemCount from './ItemCount'

function Item({id, name, image, precio, stock}){
    return (
        <div key={id} className="item">
            <h1>{name}</h1>
            <img src={image} alt={id} />
            <p>${precio}</p>
            <ItemCount stock={stock} initial={1} />
        </div>
    )
}

export default Item

