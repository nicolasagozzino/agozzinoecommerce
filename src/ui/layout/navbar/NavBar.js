import CartWidget from "../widget/CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
    
    return (
        <header>
            <Link to="/"><h1>Skykiddo</h1></Link>
            <nav>
                <Link to="/remeras">Remeras</Link>
                <Link to="/pantalones">Pantalones</Link>
                <Link to="/zapatillas">Zapatillas</Link>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar