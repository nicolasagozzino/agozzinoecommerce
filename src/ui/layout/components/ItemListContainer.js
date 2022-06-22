import { useEffect } from "react"
import { useState } from "react"
import asyncMock from "./asyncMock"
import productos from "./productos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer () {
        const [items, setItems] = useState([])
        const {categoryId} = useParams()

        useEffect(() => {
            asyncMock(0, productos)
            .then(resultado => setItems(resultado))
        },[items])
    return (
        <>
            <ItemList productos= {items} /> 
        </>
)
}
export default ItemListContainer