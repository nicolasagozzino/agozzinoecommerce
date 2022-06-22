import React from 'react'
import {Link} from "react-router-dom"

function Item({id, name, image, precio, stock, detail}){
    return (
        <div key={id} className="item">
            <h1>{name}</h1>
            <img src={image} alt={id} />
            <p>${precio}</p>
            <Link to={`/detail/${id}`} className="buttonDetail">Ver Detalle</Link>
        </div>
    )
}

export default Item