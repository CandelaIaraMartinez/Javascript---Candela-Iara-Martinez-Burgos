let ingresarNumero = parseInt (prompt("Ingrese un numero del 1 al 10"));

while (ingresarNumero <= 10) {
    let i = ingresarNumero + 1;
    alert("El siguiente número es" + i);
    ingresarNumero = parseInt (prompt("Ingrese otro numero del 1 al 10"));
}