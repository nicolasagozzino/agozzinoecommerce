import { useEffect } from "react"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {


    useEffect(() => {
        console.log("Cargando productos")
    },[])
    
    const [contador, setContador] = useState(initial)

const aumentarContador = () => {
    if(contador < stock){
        setContador(contador + 1)
    }else{
        alert("No tenemos mas stock :(")
    }
}

const bajarContador = () => {
    if(contador > 1){
        setContador(contador - 1)
    }
}

const confirmarContador = () => {
        alert("Se agregaron " + contador + " productos al carrito")
}

    return (
        <>
            <button onClick={aumentarContador} className="botonCarrito">Aumentar</button>
            <span>{contador}</span>
            <button onClick={bajarContador} className="botonCarrito">Disminuir</button>
            <br />
            <button onClick={confirmarContador} className="botonAgregar">Agregar al carrito</button>
    
        </>
    )
}

export default ItemCount