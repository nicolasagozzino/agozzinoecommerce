import productos from "./productos";

const asyncMock = (time, task) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time)
}) 

}

export default asyncMock


export const getProductsById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id));
        }, 500)
    })
}

export const getProducByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
        resolve(productos.filter(prod => prod.categoryId === categoryId));
    }, 0)
    })
}