// AND            -->false-->                            // "==" = igual
// (true  && true);  = true                              // "===" = estrictamente igual (VALOR)2
// (false && true);  = false                             // "!=" = distinto
// (true  && false); = false                             // "!==" = estrictamente distinto  (VALOR)2
// (false && false); = false                             // "<,<=,>,>=" = menor, menor igual, mayor, mayor igual
// **************************                            // "&&" = operador and (y) ---> "Y?"
// OR              -->true-->                            // "||" = operador or (o)  ---> "O?"
// (true  || true);  = true                              // "!" = operador not (not)
// (false || true);  = true
// (true  || false); = true
// (false || false); = false
//*****************************************************************************************************************
let saludo = prompt('Hola!...');

if (saludo == 'hola' || saludo == 'HOLA' || saludo == 'Hola') {
    alert("Como estas? continuemos...");
} else {
    alert('Porque no me saludas :"(');
}

let email = prompt('Email:');
let pass = prompt('Password:');

const userEmail = 'yo@yo.com';
const passWord = '12345';

if (email === userEmail && pass === passWord) {
    alert('Bienvenido');
} else if (email === userEmail && pass !== passWord) {
    alert('Password incorrecto');
} else if (email !== userEmail && pass === passWord) {
    alert('Email incorrecto');
} else if (
    (email !== userEmail && pass !== passWord) ||
    (email == '' && pass == '')
) {
    alert('Datos incorrectos, por favor ingrese sus datos nuevamente');
} else {
    alert('Intente nuevamente');
}

let fechaNacimiento = parseInt(prompt('Ingrese su fecha de nacimiento:'));
let year = 2021;
let edad = year - fechaNacimiento;

if (edad >= 18) {
    alert('Sos mayor de edad.' + '\nTenes:' + " " + edad + " " + 'años.');
} else if (edad < 18) {
    alert('Sos menor de edad.' + '\nTenes:' + " " + edad + " " + 'años.');
} else {
    alert('No ingresaste tu fecha de nacimiento');
}

let estatura = parseFloat(prompt('Ingrese su estatura: \nEjemplo: 1.50'));

let baja = 1.60;
let media = 1.70;
let alta = 1.80;

if (estatura <= baja) {
    alert('Sos una persona de baja estatura.');
} else if (estatura > baja && estatura <= media) {
    alert('Sos una persona de estatura promedio.');
} else if (estatura > media && estatura < alta) {
    alert('Sos una persona alta.');
} else if (estatura >= alta) {
    alert('Sos enorme.');
} else {
    alert('No ingresaste tu estatura');
}