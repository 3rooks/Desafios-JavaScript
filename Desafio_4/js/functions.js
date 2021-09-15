// FUNCIONES MATEMATICAS BASICAS (ANONIMAS)
const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const multiplicacion = (a, b) => a * b;

const division = (a, b) => a / b;

const modulo = (a, b) => a % b;

// const suma = (a, b) => {
//     return a + b;
// }


// FUNCIONES PRINCIPALES
const iva = (x) => x * 0.21;

const descuentofuncion = (a, b) => multiplicacion(a, b) / 100;

const precioTotal = (curso, descuentoAplicado) => resta(suma(iva(curso), curso), descuentofuncion(curso, descuentoAplicado));