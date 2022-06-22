import CartWidget from "../widget/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    
    return (
        <header>
            <Link to="/"><h1>Skykiddo</h1></Link>
            <nav>
                <Link to="/category/remeras">Remeras</Link>
                <Link to="/category/pantalones">Pantalones</Link>
                <Link to="/category/zapatillas">Zapatillas</Link>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar