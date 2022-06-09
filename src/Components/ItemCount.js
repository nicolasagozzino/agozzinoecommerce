import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(initial)

const aumentarContador = () => {
    if(contador < 5){
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
            <p className="contador"> El contador va: {contador}</p>
            <button onClick={aumentarContador} className="botonCarrito">Aumentar</button>
            <button onClick={confirmarContador} className="botonCarrito">Agregar al carrito</button>
            <button onClick={bajarContador} className="botonCarrito">Bajar</button>
        </>
    )
}

export default ItemCount