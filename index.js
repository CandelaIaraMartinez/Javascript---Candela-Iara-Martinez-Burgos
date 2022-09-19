class Catalogo{
    constructor(id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);
    }

vender(){
    if (this.cantidad > 0){
        this.disminuirStock(1);
    } else {
        alert("No contamos con stock del producto actualmente")
    }
}

disminuirStock = (cantidadADisminuir) =>
    (this.cantidad = this.cantidad - cantidadADisminuir);
aumentarStock = (cantidadAAumentar) =>
    (this.cantidad = this.cantidad + cantidadAAumentar);
}

const catalogo = [];
catalogo.push(new Catalogo("1", "Top Negro", "700", "10"))
catalogo.push(new Catalogo("2", "Short de Jean", "900", "23"))
catalogo.push(new Catalogo("3", "Buzo Oversize", "2500", "13"));

const contenedorProductos = document.getElementById("contenedor-productos");

catalogo.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3";
    column.id = `columna-${producto.id}`
    column.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nombre:<b>${producto.nombre}</b></p>
                <p class="card-text">Precio:<b>${producto.precio}</b></p>
                <p class="card-text">Cantidad:<b>${producto.cantidad}</b></p>
            </div>
        </div>
    `
    contenedorProductos.append(column)
});

let carrito = [];

function crearMensaje (){
    let mensaje = 'Que producto desea comprar?'
    let count = 1

for(let producto of catalogo){
    mensaje += `\n${count}. ${producto.nombre} - $ ${producto.precio}`
    count++
}

mensaje += `\n${count}. Salir`

return mensaje
}

function cantidad (producto){
    return prompt(`Cuantas unidades de ${producto.nombre} desea comprar?`);
}

function subtotal (cantidad, producto){
    alert(`Compro ${cantidad} unidad de ${producto.nombre} por $ ${cantidad * producto.precio}`)
    let suma = cantidad * producto.precio;
    carrito.push(cantidad, producto.nombre, suma);
    console.log(carrito);
    return suma;
}

function calcularTotal (arr){
    return arr.reduce((acc, el) => acc + el, 0)
}

let opcion = 0
let total = []

do {
    opcion = parseInt(prompt(crearMensaje()));

    if(opcion === catalogo.length + 1){
        alert(`Su total fue de $ ${calcularTotal(total)}.`)
    break
}

    total.push(subtotal(cantidad(catalogo[opcion - 1]), catalogo[opcion - 1]))

} while (true)

const lista = document.getElementById("lista");

carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    
    lista.appendChild(li)
})

function pagoCuotas(){
    let montoCuota = total / 3; 
    alert("Su pago se realizara en 3 cuotas de " + montoCuota);
}

let cuotas = parseInt(prompt("¿Le gustaría pagar en tres cuotas sin interes? \n 1. Si \n 2. No"));

if ((cuotas == 1)){  
    pagoCuotas()
} else {
    alert("Seleccione su metodo de pago")
}
