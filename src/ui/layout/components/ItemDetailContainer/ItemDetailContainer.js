import React, { useEffect } from 'react'
import { useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../asyncMock';
import { useParams } from 'react-router-dom'

// A diferencia del ItemListContainer que trae un array, este solo va a traer un producto en especifico

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getProductsById(parseInt(id))
            .then((res) => {
                setProduct(res);
    });
}, [id]);
  return  <ItemDetail product={product}/>
};

export default ItemDetailContainer;

