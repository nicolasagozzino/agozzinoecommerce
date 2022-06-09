import CartWidget from "./CartWidget"

const NavBar = () => {
    
    return (
        <header>
            <h1>Mi Ecommerce</h1>
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