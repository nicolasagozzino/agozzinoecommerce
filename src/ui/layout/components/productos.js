export const productos = [
    {
        id: 1,
        name: 'Remeras',
        image: 'https://picsum.photos/200/300',
        precio: 100,
        stock: 5,
        descripcion: 'Remeras de algodon',
        categoryId: "Remera"
    }
    ,   
    {
        id: 2,
        name: 'Pantalon',
        image: 'https://picsum.photos/200/300',
        precio: 200,
        stock: 7,
        descripcion: 'Pantalon de Jeans',
        categoryId: "Pantalon"
    },
    {
        id: 3,
        name: 'Zapatillas',
        image: 'https://picsum.photos/200/300',
        precio: 300,
        stock: 9,
        descripcion: 'Zapatillas Adidas',
        categoryId: "Zapatillas"
        
    },
    {
        id: 4,
        name: 'Remeras',
        image: 'https://picsum.photos/200/300',
        precio: 100,
        stock: 5,
        descripcion: 'Remeras de algodon',
        categoryId: "Remera"
    }
    ,   
    {
        id: 5,
        name: 'Pantalon',
        image: 'https://picsum.photos/200/300',
        precio: 200,
        stock: 7,
        descripcion: 'Pantalon de Jeans',
        categoryId: "Pantalon"
        
    },
    {
        id: 6,
        name: 'Zapatillas',
        image: 'https://picsum.photos/200/300',
        precio: 300,
        stock: 9,
        descripcion: 'Zapatillas Adidas',
        categoryId: "Zapatillas"
    },
    {
        id: 7,
        name: 'Remeras',
        image: 'https://picsum.photos/200/300',
        precio: 100,
        stock: 5,
        descripcion: 'Remeras de algodon',
        categoryId: "Remera"
    }
    ,   
    {
        id: 8,
        name: 'Pantalon',
        image: 'https://picsum.photos/200/300',
        precio: 200,
        stock: 7,
        descripcion: 'Pantalon de Jeans',
        categoryId: "Pantalon"
    },
    {
        id: 9,
        name: 'Zapatillas',
        image: 'https://picsum.photos/200/300',
        precio: 300,
        stock: 9,
        descripcion: 'Zapatillas Adidas',
        categoryId: "Zapatillas"
    }
] // Array de productos 


const producto = {
    id: 1,
    name: 'Remeras',
    image: 'https://deliverind.com.ar/wp-content/uploads/2021/09/remera-oversize-x3-scaled.jpg',
    precio: 100,
    stock: 5,
    descripcion: 'ESTO ES LA DESCRIPCION DEL PRODUCTOOOOO' 
}

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto);
        }, 2000);
    });
}

export default productos;
