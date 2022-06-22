import React from 'react'
// import ItemCount from './ItemCount'
import {Link} from "react-router-dom"

function Item({id, name, image, precio, stock, detail}){
    return (
        <div key={id} className="item">
            <h1>{name}</h1>
            <img src={image} alt={id} />
            <p>${precio}</p>
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item


// borre abajo del link: 
//<ItemCount stock={stock} initial={1} />