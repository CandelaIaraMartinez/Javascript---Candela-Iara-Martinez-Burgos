class Catálogo{
    constructor(objeto, precio, id){
        this.id = parseInt(id);
        this.objeto = objeto;
        this.precio = parseFloat(precio);
        this.disponible = true;
    }
}

const catálogo = [];

catálogo.push(new Catálogo("1", "top negro", "700"))
catálogo.push(new Catálogo("2", "short de jean", "900"))
catálogo.push(new Catálogo("3", "buzo oversize", "2500"))

let producto1 = parseInt(prompt("Seleccione el producto que desea comprar \n 1. Top Negro \n 2. Short de Jean \n 3. Buzo Oversize"));

let total;

let compra = parseInt(prompt("¿Le gustaría continuar comprando? \n 1. Si \n 2. No"));

if ((compra == 1)){
    let producto2 = parseInt(prompt("Seleccione el segundo producto que desea comprar \n 1. Top Negro \n 2. Short de Jean \n 3. Buzo Oversize"));
    function calcularMonto(producto1, producto2){
        let index1 = catálogo.id.indexOf(producto1); 
        let index2 = catálogo.id.indexOf(producto2);
        let total = catálogo.precio(index1) + catálogo.precio(index2);
        alert("El total de su compra es de: "+ total);
        return total
    }
} else {
    alert("Sería un total de" + catálogo.precio(index1));
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
