class Catalogo{
    constructor(objeto, precio, cantidad){
        this.objeto = objeto;
        this.precio = parseFloat(precio);
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

const compra = [];

function seleccionarProducto(){
    let producto = parseInt(prompt("Seleccione el producto que desea comprar \n 0. Top Negro \n 1. Short de Jean \n 2. Buzo Oversize"));
    catalogo[producto].vender();
    compra.push(catalogo[producto.objeto], catalogo[producto.precio]);
    let consulta = parseInt(prompt("¿Le gustaría continuar comprando? \n 1. Si \n 2. No"));
    while (consulta == 1){
        seleccionarProducto();
    }
}

seleccionarProducto();

compra.forEach((producto) => {
    alert(`Sus productos seleccionados son: ${compra.objeto}`)
})

calcularMonto();

let total = 0;

function calcularMonto(){
    for (producto of compra) total += compra.producto.precio;
    alert("El total de su compra es de: "+ total);
    return total
}

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
