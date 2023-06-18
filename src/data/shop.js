const Shop = [
    {
        "id": 1,
        "nombre": "Bolsa Proplan",
        "precioProducto": "$10.000",
        "imagen": "/src/assets/bolsaproplan.jpg",
        "stock": 5
    },
    {
        "id": 2,
        "nombre": "Juguete",
        "precioProducto": "$6.000",
        "imagen": "/src/assets/juguete.jpg",
        "stock": 4
    },
    {
        "id": 3,
        "nombre": "Pelota",
        "precioProducto": "$1.500",
        "imagen": "/src/assets/pelota.jpg",
        "stock": 5
    },
    {
        "id": 4,
        "nombre": "Plato",
        "precioProducto": "$5.000",
        "imagen": "/src/assets/plato.jpg",
        "stock": 5
    },
    {
        "id": 5,
        "nombre": "Rascador para Gatos",
        "precioProducto": "$20.000",
        "imagen": "/src/assets/rascador.png",
        "stock": 2
    }
]

export default Shop;

export const getShop = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve (Shop)
        }, 1000)
    })
}

export const getShoppingById = (shoppingId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(Shop.find(sho=>sho.id === shoppingId))
        }, 500)
    })
}

export const getShopByShopp = (shoppId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(Shop.filter(sh=>sh.sh === shoppId))
        }, 500)
    })
}