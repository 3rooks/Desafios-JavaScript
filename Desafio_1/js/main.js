let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let fechaNacimiento = parseInt(prompt("Ingrese su fecha de nacimiento:"));

let year = 2021;

let edad = year - fechaNacimiento;
let nombreCompleto = nombre + " " + apellido;

alert("Tu nombre es:" + " " + nombreCompleto + ".");
alert("Tenes:" + " " + edad + " " + "años.");

console.log("Nombre:" + " " + nombreCompleto);
console.log("Edad:" + " " + edad);
