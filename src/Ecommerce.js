import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import { useState } from "react"
import ItemCount from "./Components/ItemCount";

const Ecommerce = () => {

    const resultado = useState(0)
    const contador = resultado[0]
    const cambiarContador = resultado[1]

    console.log(contador)

    return (
        <>
        <NavBar/>
        <ItemListContainer greeting="¡Hola, bienvenido/a a mi ecommerce!"/>
        </>
    )
}

export default Ecommerce