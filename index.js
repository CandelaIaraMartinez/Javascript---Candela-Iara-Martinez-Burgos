let formulario;
let inputNombre;
let inputCantidad;

//Creación del catálogo que contiene las prendas disponibles
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

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("inputNombreProducto");
    inputCantidad = document.getElementById("inputCantidad");
    contenedorProductos = document.getElementById("contenedorProductos");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let cantidad = parseInt(inputCantidad.value);
    vender();
}

const catalogo = [];
catalogo.push(new Catalogo("1", "Top Negro", "700", "10"))
catalogo.push(new Catalogo("2", "Short de Jean", "900", "23"))
catalogo.push(new Catalogo("3", "Buzo Oversize", "2500", "13"));

const mostrarProductos = document.getElementById("mostrar-productos");

//Creación de las tarjetas para cada producto
catalogo.forEach((producto) => {
    let column = document.createElement("div");
    column.className = "col-md-3 ml-2 mt-3";
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
    mostrarProductos.append(column)
});

//Creación del objeto carrito que obtendrá los productos seleccionados por el usuario
class Carrito{
    constructor(nombre, precioTotal, cantidad){
        this.nombre = nombre;
        this.cantidad = parseInt(cantidad);
        this.precioTotal = parseFloat(precioTotal);
    };
}

let carrito = [];

//Calculo del total para utilizar en el array carrito
function calcularTotal(){
    for (producto of carrito){
        if (carrito.nombre = catalogo.nombre){
            carrito.precioTotal = carrito.cantidad * catalogo.precio;
        }
    }
}

let productoExiste;

if (catalogo.some(el => el.nombre == inputNombre)){
    productoExiste = true
}

console.log(inputNombre);

if (productoExiste) {
    let producto = new Carrito(
        nombre,
        cantidad,
        calcularTotal(),
        );

    carrito.push(producto);
    console.log(carrito);
    formulario.reset();

    pintarProductos();
} else {
    alert("Ese producto no existe");
}

const compraFinal = document.getElementById("compra-final");

//Función para mostrar una tarjeta que obtenga los productos seleccionados por el usuario
function mostrarCarrito() {
    compraFinal.innerHTML = "";
    carrito.forEach((item) => {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3";
    column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">Nombre:
                    <b>${item.nombre}</b>
                </p>
                <p class="card-text">Cantidad:
                <b>${item.cantidad}</b>
                </p>
                <p class="card-text">Precio:
                    <b>${item.precioTotal}</b>
                </p>
                </div>
            </div>`;
    compraFinal.append(column);
    });
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
