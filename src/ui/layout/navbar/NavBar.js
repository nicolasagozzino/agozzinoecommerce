import CartWidget from "../widget/CartWidget"

const NavBar = () => {
    
    return (
        <header>
            <h1>Skykiddo</h1>
            <nav>
                <a href="#">Productos</a> <br />
                <a href="#">Ofertas</a> <br />
                <a href="#">Nosotros</a> <br />
                <a href="#">Contacto</a> <br />
                <a href="#">Login</a>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar