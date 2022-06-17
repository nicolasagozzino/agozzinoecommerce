import React, { useEffect } from 'react'
import { useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail';
import { traerProducto } from '../productos';

// A diferencia del ItemListContainer que trae un array, este solo va a traer un producto en especifico

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        traerProducto()
            .then((res) => {
                setProduct(res);
    })
        .catch((error) => {
        console.log(error);
    });
}, []);
  return  <ItemDetail product={product}/>
};

export default ItemDetailContainer;


