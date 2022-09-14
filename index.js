class Catálogo{
    constructor(objeto, precio, cantidad){
        this.cantidad = parseInt(cantidad);
        this.objeto = objeto;
        this.precio = parseFloat(precio);
    }

vender(){
    if (this.cantidad > 0){
        this.disminuirStock(1);
    } else {
        alert("No contamos con stock del producto actualmente")
    }
}
}

disminuirStock = (cantidadADisminuir) =>
    (this.cantidad = this.cantidad - cantidadADisminuir);
aumentarStock = (cantidadAAumentar) =>
    (this.cantidad = this.cantidad + cantidadAAumentar);

const catálogo = [];
catálogo.push(new Catálogo("10", "Top Negro", "700"))
catálogo.push(new Catálogo("23", "Short de Jean", "900"))
catálogo.push(new Catálogo("13", "Buzo Oversize", "2500"))

const compra = [];

function seleccionarProducto(){
    let producto = parseInt(prompt("Seleccione el producto que desea comprar \n 1. Top Negro \n 2. Short de Jean \n 3. Buzo Oversize"));
    vender()
    compra.push(producto.Catálogo)
    let compra = parseInt(prompt("¿Le gustaría continuar comprando? \n 1. Si \n 2. No"));
    while (compra == 1){
        seleccionarProducto();
    }
    alert("Sus productos seleccionados son:" + compra.join(","))
}

seleccionarProducto();

let total = 0;

function calcularMonto(producto){
    for (producto of compra) total += compra.producto.precio;
    alert("El total de su compra es de: "+ total);
    return total
}

calcularMonto(producto);

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
