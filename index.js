let formulario;
let inputNombre;
let inputCantidad;
const recuperarCarrito = JSON.parse(localStorage.getItem("carritoJSON")) || [];

//Creación del catálogo que contiene las prendas disponibles
class Catalogo{
    constructor(id, nombre, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantidad = parseInt(cantidad);
    }

vender(){
    this.cantidad > 0 ? this.disminuirStock(1) : Swal.fire({ title: "Sin stock", text:"No contamos con stock del producto actualmente, por favor seleccione otro.", icon:"error", confirmButtonText: "Ok" });
}

disminuirStock = (cantidadADisminuir) =>
    (this.cantidad = this.cantidad - cantidadADisminuir);
aumentarStock = (cantidadAAumentar) =>
    (this.cantidad = this.cantidad + cantidadAAumentar);
}

const catalogo = [  {id: 1, nombre: "Top Negro", precio: 700, cantidad: 10},
                    {id: 2, nombre: "Short de Jean", precio: 900,cantidad: 23},
                    {id: 3, nombre: "Buzo Oversize", precio: 2500, cantidad: 13}
];

const mostrarProductos = document.getElementById("mostrar-productos");

//Creación de las tarjetas para cada producto
function tarjetas(){
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
})
};

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("input-nombre");
    inputCantidad = document.getElementById("input-cantidad");
    contenedorProductos = document.getElementById("contenedor-productos");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    inputNombre = inputNombre.value;
    inputCantidad = parseInt(inputCantidad.value);
    verificarProducto();
}

//Creación del objeto carrito que obtendrá los productos seleccionados por el usuario
class Carrito{
    constructor(nombre, cantidad, precioTotal){
        this.nombre = nombre;
        this.cantidad = parseInt(cantidad);
        this.precioTotal = parseInt(precioTotal);
    };
}

let carrito = [];

//Calculo del total para utilizar en el array carrito
function calcularTotal(){
    for (let nombre of catalogo){
        for (let product of carrito){
            if (product.nombre == nombre.nombre){
                    product.precioTotal = parseInt(product.cantidad * nombre.precio);
            }
        }
    }
}

let productoExiste;

let boton = document.getElementById("button")
boton.addEventListener("click", eventoInputs)
function eventoInputs(){
    console.log(inputNombre.value)
    console.log(inputCantidad.value)
}

function verificarProducto(){
    if (catalogo.some(el => el.nombre == inputNombre)){
        productoExiste = true
        let producto = new Carrito(
        inputNombre,
        inputCantidad
        );
    carrito.push(producto);
    calcularTotal();
    formulario.reset();

    mostrarCarrito();
    consulta();
    return carrito;
    } else {
    Swal.fire({
        title:"Error",
        text: "Ese producto no existe",
        icon: "error",
        confirmButtonText: "Ok",
    })
    }
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

let productosJSON = JSON.stringify(catalogo);
localStorage.setItem("productosJSON", productosJSON);
console.log(productosJSON); 

function actualizarCarritoStorage() {
    let carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carritoJSON", carritoJSON);
}

function obtenerCarritoStorage() {
    let carritoJSON = localStorage.getItem("carritoJSON");
    if (carritoJSON) {
        carrito = JSON.parse(carritoJSON);
        console.log(carritoJSON);
    }
}

function pagoCuotas(){
    let montoCuota = carrito[precioTotal] / 3; 
    alert("Su pago se realizara en 3 cuotas de " + montoCuota);
}

function consulta(){
    let cuotas = parseInt(prompt("¿Le gustaría pagar en tres cuotas sin interes? \n 1. Si \n 2. No"));
    cuotas == 1 ?  pagoCuotas() : alert("Seleccione su metodo de pago");
}

function main() {
    tarjetas();
    inicializarElementos();
    inicializarEventos();
    obtenerCarritoStorage();
}

main();
