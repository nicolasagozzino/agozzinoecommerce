import CartWidget from "../widget/CartWidget"
import {Link} from "react-router-dom"
import { useContext } from 'react' // para usar el context

const NavBar = () => {
    
    return (
        <header>
            <Link to="/"><h1>Skykiddo</h1></Link>
            <nav>
                <Link to="/category/Remeras">Remeras</Link>
                <Link to="/category/Pantalones">Pantalones</Link>
                <Link to="/category/Zapatillas">Zapatillas</Link>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar