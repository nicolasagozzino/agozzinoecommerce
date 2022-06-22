import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../navbar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Ecommerce = () => {

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