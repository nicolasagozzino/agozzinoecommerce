import { useEffect } from "react"
import { useState } from "react"
import asyncMock from "./asyncMock"
import productos from "./productos"
import ItemList from "./ItemList"

function ItemListContainer () {
        const [items, setItems] = useState([])

        useEffect(() => {
            asyncMock(2000, productos)
            .then(resultado => setItems(resultado))
        },[items])
    return (
        <>
            <ItemList productos= {items} stock={5} onAdd={() => {}} initial={1} />
        </>
)
}
export default ItemListContainer