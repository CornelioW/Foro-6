const productos = [
    { id: 1, nombre: 'Laptop', precio: 1500 },
    { id: 2, nombre: 'Teléfono', precio: 800 },
    { id: 3, nombre: 'Tablet', precio: 300 },
];

// Función que filtra y procesa un producto
function procesarProducto(producto) {
    return new Promise((resolve) => {
        if (producto.precio > 500) {
            resolve(`Producto aprobado: ${producto.nombre}`);
        } else {
            resolve(`Producto rechazado: ${producto.nombre}`);
        }
    });
}

// Usando Async/Await para procesar todos los productos
async function evaluarProductos() {
    for (const producto of productos) {
        const resultado = await procesarProducto(producto);
        console.log(resultado);
    }
}

evaluarProductos();
