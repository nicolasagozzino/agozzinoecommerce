import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../navbar/NavBar";
// import { useState } from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const Ecommerce = () => {

    //const resultado = useState(0)
    //const contador = resultado[0]
    //const cambiarContador = resultado[1]

    //console.log(contador)
    

    return (
        <>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        </>
    )
}

export default Ecommerce