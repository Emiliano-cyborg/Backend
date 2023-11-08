const objetos = [
    {
        manzanas: 3,
        peras:2,
        carne: 1,
        jugos:5,
        dulces:2
    },
    {
        manzanas: 1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

const productos = []

objetos.forEach(element => {
    const obKeys = Object.keys(element)
    productos.push(...obKeys)
})

console.log(productos)


const productosUnicos = productos.reduce((acc,item)=>{
    if(!acc.includes(item)){
        acc.push(item)
    }
    return acc;

},[])

const cantProductos = [];

objetos.forEach(element => {
    cantProductos.push(...Object.values(element));
})

console.log(cantProductos)

const total = cantProductos