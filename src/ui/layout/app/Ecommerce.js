import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../navbar/NavBar";
// import { useState } from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Ecommerce = () => {

    //const resultado = useState(0)
    //const contador = resultado[0]
    //const cambiarContador = resultado[1]

    //console.log(contador)
    

    return (
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}></Route>
                    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route>
                </Routes>
            </BrowserRouter>   
    )
}

export default Ecommerce