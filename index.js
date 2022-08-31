let total = 0;

function calcularMonto(precio1, precio2){
    let total = precio1 + precio2;
    alert("El total de su compra es de: "+ total);
}

alert("¿Le gustaría pagar en tres cuotas sin interes?");
let cuotas = parseInt(prompt("Ingrese 1 en caso de que su respuesta sea un si, en el caso contrario ingrese 2"));

if ((cuotas == 1)){  
        function pagoCuotas(){
            let montoCuota = total / 3; 
            alert("Su pago se realizara en 3 cuotas de " + montoCuota);
        }
} else {
    alert("Seleccione su metodo de pago")
}
