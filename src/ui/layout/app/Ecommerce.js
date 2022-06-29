import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../navbar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart  from "../components/Cart"
import { MiProvider } from "../components/CartContext"

const Ecommerce = () => {

    return (

        <MiProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}></Route>
                    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path="/detail/:id" element={<ItemDetailContainer/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                </Routes>
            </BrowserRouter>  
        </MiProvider> 
    )
}

export default Ecommerce