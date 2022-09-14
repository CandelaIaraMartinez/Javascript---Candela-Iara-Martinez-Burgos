class Catalogo{
    constructor(nombre, precio, cantidad){
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
catalogo.push(new Catalogo("Top Negro", "700", "10"))
catalogo.push(new Catalogo("Short de Jean", "900", "23"))
catalogo.push(new Catalogo("Buzo Oversize", "2500", "13"))

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
    return cantidad * producto.precio;
}

function calcularTotal (arr){
    return arr.reduce((acc, el) => acc + el, 0)
}

let opcion = 0
let total = []

do {
    opcion = parseInt(prompt(crearMensaje()))

    if(opcion === catalogo.length + 1){
        alert(`Su total fue de $ ${calcularTotal(total)}.`)
    break
}

    total.push(subtotal(cantidad(catalogo[opcion - 1]), catalogo[opcion - 1]))

} while (true)

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
