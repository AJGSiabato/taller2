  //Ejercicio 1. 
let nombre = "andrea" true;
let edad = 38; 
let megustaprogramar = true;

console.log("nombre ", nombre);
console.log("edad:", edad);
console.log("¿Te gusta la programacion?";",me gusta programar);

     // Ejercicio 2
  //1.

let ciudad = "Bogota" ;
console.log("ciudadinicial:", ciudad);
ciudad = "Cali";
console.log("ciudad cambiada a:",ciudad);

  //2.

const pais = "Colombia";
console.log("pais inicial:", pais);
// Esto causa error

  //3.

var color = "azul";
console.log("Color antes del bloque:", color);
if (true) {
    var color = "Rojo"
    console.log("Color dentro del bloque:", color);
}
console.log("color despues del bloque:", color); 
// Esta fuera del bloque la variable

    // Ejercicio 3

let Edad = 19;
if (miEdad >= 18) {
    console.log(Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

let dia = "lunes"; 
switch(dia){
    case"lunes":
    console.log("eslunes,inicio de semana");
    break;
    case "viernes":
        console.log("Es viernes, casi fin de semana");
        break;
    case "sabado":
        case "domingo":
            console.log("Es sabado o domingo, fin de semana");
            break;
        default:
            console.log("Es un dia entre semana");
            break; 
}


     // Ejercicio 4

console.log("Numeros del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let numeros = 5; 
let contador = 0;
while (contador < numero) {
    console.log("Hola");
    contador++;
}