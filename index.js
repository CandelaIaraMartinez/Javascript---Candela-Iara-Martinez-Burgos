// Variables
let arrayCarrito = [];
let total = 0;
let contenedorProductos = document.querySelector(".shop-items");
let elementoTotal = document.querySelector(".carrito-total-titulo");

// Petición de productos 
let res = await fetch('https://fakestoreapi.com/products?limit=5')
let data = await res.json()

let arrayProductos = data;
console.log(arrayProductos);

// Mostrar productos
arrayProductos.forEach(producto => {
    contenedorProductos.innerHTML = `
    <div class="shop-item card" style="width: 18rem;"" id="${producto.id}">
        <img class="shop-item-imagen card-img-top" src="${producto.image}">
        <div class="card-body">
            <h5 class="card-title shop-item-titulo">${producto.title}</h5>
            <span class="shop-item-precio">${producto.price}</span>
            <button class="btn btn-warning shop-item-boton" type="button">Agregar al carrito</button>
        </div>
    </div>`;
});

let botones = document.querySelectorAll (".shop-item-boton");
botones = [...botones];

let contenedorCarrito = document.querySelector(".carrito-items");

//Agregar productos al carrito

botones.forEach(boton=>{
    boton.addEventListener(`click`, event => {
        let idActual = parseInt(event.target.parentNode.parentNode.id);
        let productoActual = arrayProductos.find(item => item.id == idActual)
        if (productoActual.cantidad === undefined){
            productoActual.cantidad = 1;
        }
        let existe = false;
        arrayCarrito.forEach(producto => {
            if(idActual == producto.id){
                existe = true}
            })

        if(existe){
            productoActual.cantidad++
        } else {
            arrayCarrito.push(productoActual)}

        console.log(arrayCarrito);
        Swal.fire({
            title:"Agregado al carrito",
            text: "su producto fue agregado exitósamente",
            icon: "success",
            confirmButtonText: "Ok",
        })
        pintarProductos();
        obtenerTotal();
        actualizarCantidad();
        descartarProducto();
    })
})

// Calculo del total de la compra

function obtenerTotal(){
    let sumaTotal;
    let total = arrayCarrito.reduce((sum,producto)=>{
        sumaTotal = sum + producto.cantidad*producto.price;
        return sumaTotal;
    }, 0);
    elementoTotal.innerText = `Total : $${total}`;
}

function pintarProductos(){
    contenedorCarrito.innerHTML = ``;
    arrayCarrito.forEach(item =>{
        contenedorCarrito.innerHTML += `
            <div class="row">
                    <div class="col-sm"> Producto: 
                        <img class="carrito-item-imagen" src="${item.image}" width="100" height="100">
                    <span class="carrito-item-titulo">${item.title}</span>
                    </div>
                    <span class="col-sm carrito-precio carrito-column">Precio: ${item.price}</span>
                    <div class="col-sm carrito-cantidad">Cantidad: 
                        <input class="carrito-cantidad-input" min="1" type="number" value="${item.cantidad}"> 
                        <button class="btn btn-danger" type="button">Descartar</button>
                    </div>
            </div>`;
    })
    descartarProducto();
}

function actualizarCantidad(){
    let inputNumero = document.querySelectorAll(".carrito-cantidad-input");
    inputNumero = [...inputNumero];
    inputNumero.forEach(producto =>{
        producto.addEventListener(`click`, event=>{
            let tituloActual = event.target.parentElement.parentElement.childNodes[1].innerText;
            let cantidadActual = parseInt(event.target.value);
            let objetoActual = arrayCarrito.find(item => item.title == tituloActual);
            objetoActual.cantidad == cantidadActual;

            obtenerTotal();
        })
    })
}

function descartarProducto(){
    let botonDescartar = document.querySelectorAll(`.btn-danger`);
    botonDescartar = [...botonDescartar];
    botonDescartar.forEach(btn =>{
        btn.addEventListener(`click`, event=>{
            let tituloActual = event.target.parentElement.parentElement.childNodes[1].innerText;
            let objetoActual = arrayCarrito.find(item => item.title == tituloActual);
            arrayCarrito = arrayCarrito.filter(item => item != objetoActual);
            pintarProductos();
            obtenerTotal();
            actualizarCantidad();
        })
    })
}
