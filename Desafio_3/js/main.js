// VARIABLES
let name;
let lastName;
let email;
let born;
let year = 2021;

// Presentacion / datos a ingresar
let intro = prompt('Necesito sus datos para continuar. \nOK = para continuar. \nESC = para salir.');

if (intro == 'OK' || intro == 'ok') {
    name = prompt('Ingrese su nombre:');
    if (name != "") {
        console.log('Nombre: ' + name);
    } else {
        while (name == '') {
            alert('Ingrese su nombre por favor.');
            name = prompt('Ingrese su nombre:');
            if (name != '') {
                console.log('Nombre: ' + name);
            }
        }
    }
    lastName = prompt('Ingrese su apellido:');
    if (lastName != '') {
        console.log('Apellido: ' + lastName);
    } else {
        while (lastName == '') {
            alert('Ingrese su apellido por favor.');
            lastName = prompt('Ingrese su apellido:');
            if (lastName != '') {
                console.log('Apellido: ' + lastName);
            }
        }
    }
    email = prompt('ingrese su correo electronico:');
    if (email != '') {
        console.log('Correo electronico: ' + email);
    } else {
        while (email == '') {
            alert('Ingrese su correo electronico por favor.');
            email = prompt('ingrese su correo electronico:');
            if (email != '') {
                console.log('Correo electronico: ' + email);
            }
        }
    }
    born = parseInt(prompt('Ingrese el año de su nacimiento:'));
    if (born != parseInt('')) {
        console.log('Año de nacimiento: ' + born);
        console.log('Edad: ' + (year - born));
    } else {
        while (born == parseInt('')) { //this dont work idk why SADGE
            alert('ingrese el año de nacimiento por favor.')
            born = parseInt(prompt('Ingrese el año de su nacimiento:'));
            if (born != parseInt('')) {
                console.log('Año de nacimiento: ' + born);
                console.log('Edad: ' + (year - born));
            }
        }
    }
} else if (intro == 'ESC' || intro == 'esc') {
    alert('Gracias por su visita.')
} else {
    alert('Ingreso un dato incorrecto.')
}


// ALGORITMO PARA NUMEROS PARES E IMPARES :)
let evenOddNumbers = parseInt(prompt('Te digo los numeros pares e impares: \nDesde el 1 hasta el...'));

if (evenOddNumbers <= 0) {
    console.log('Escribio un numero invalido.')
} else {
    for (let i = 1; i <= evenOddNumbers; i++) {
        if (i % 2 == 0) {
            console.log(i + ' = Par');
        } else {
            console.log(i + ' = Impar');
        }
    }
}

// ALGORITMO PARA NUMEROS PRIMOS :)
// Condicion = Nº primos solo tienen 2 divisores el 1 y ellos mismos, el resultado tiene que dar un numero ENTERO.
let numberPrime = parseInt(prompt('Escribe un numero y te dire si es primo o no.'))

if (numberPrime <= 0) {
    console.log('Escribio un numero invalido.');
} else {
    let counters = 0;
    for (let i = 1; i <= numberPrime; i++) {
        if (numberPrime % i == 0) {
            counters++;
        }
    }
    if (counters == 2) {
        console.log(numberPrime + ' Es primo.');
    } else {
        console.log(numberPrime + ' No es primo.');
    }
}

// OTRO ALGORITMO PARA NUMEROS PRIMOS :))
// let numberPrime = parseInt(prompt('Introduce un numero'));

// if (numberPrime <= 1) {
//     console.log(numberPrime + ' No es numero primo');
// } else {
//     let counters = 0;
//     for (let i = 2; i < numberPrime; i++) {
//         if (numberPrime % i == 0) {
//             counters++;
//         }
//     }
//     if (counters == 0) {
//         console.log(numberPrime + ' Es un numero primo.');
//     } else {
//         console.log(numberPrime + ' No es un numero primo.');
//     }
// }


// ALGORITMO PARA EL FACTORIAL DE UN NUMERO!...(n!= (1.2.3.4...n))
let factorialNumber = parseInt(prompt('Escribe un numero y te dire su factorial!.'));

if (factorialNumber >= 1) {
    let result = 1; // cuz 0.0 = 0 //
    for (let i = 1; i <= factorialNumber; i++) {
        result *= i; // (result *= i) -=> (result = result * i) //
    }
    console.log('El factorial del numero ' + factorialNumber + ' es ' + result);
} else {
    console.log('Introdujo un numero invalido');
}

// OTRO ALGORITMO PARA EL FACTORIAL! (n!= (n...4.3.2.1))
// let factorialNumber = parseInt(prompt('Introduce un numero y te dire su factorial!.'));

// if (factorialNumber >= 1) {
//     let result = 1;
//     for (let i = factorialNumber; i >= 1; i--) {
//         result *= i;
//     }
//     console.log('El factorial del numero ' + factorialNumber + ' es ' + result);
// } else {
//     console.log('Introdujo un numero invalido');
// }
//***(result = result *= i) => (result = (result *= i)) => (result = result)= same-badPractice=iGuess***//


// **************************EJEMPLOS****************************
// let totalDeClases = 16;
// let claseActual = prompt('Ingresa cual es la clase actual');

// for (let clases = 1; clases <= totalDeClases; clases++) {
//   if (clases < claseActual) {
//     document.write('Clase Numero: ' + clases + ' - Lista');
//   } else if (clases == claseActual) {
//     document.write('Clase Numero: ' + clases + ' - Actual');
//   } else {
//     document.write('Clase Numero: ' + clases + ' - ... pendiente');
//   }
// }
// **************************************************************
// const operador = prompt('Ingresa un operador ( +  -  *  / ): ');
// const numero1 = parseFloat(prompt('Ingresa el primer numero: '));
// const numero2 = parseFloat(prompt('Ingresa el segundo numero: '));

// let resultado;

// switch (operador) {
//   case '+':
//     resultado = numero1 + numero2;
//     document.write(numero1 + ' + ' + numero2 + ' = ' + resultado);
//     break;
//   case '-':
//     resultado = numero1 - numero2;
//     document.write(numero1 + ' - ' + numero2 + ' = ' + resultado);
//     break;
//   case '*':
//     resultado = numero1 * numero2;
//     document.write(numero1 + ' * ' + numero2 + ' = ' + resultado);
//     break;
//   case '/':
//     resultado = numero1 / numero2;
//     document.write(numero1 + ' / ' + numero2 + ' = ' + resultado);
//     break;

//   default:
//     document.write('Operador invalido');
//     break;
// }
// **************************************************************
// let dia = parseInt(prompt('Ingresa un numero de dia'));
// let nombreDia;

// switch (dia) {
//   case 1:
//     nombreDia = 'Domingo';
//     break;
//   case 2:
//     nombreDia = 'Lunes';
//     break;
//   case 3:
//     nombreDia = 'Martes';
//     break;
//   case 4:
//     nombreDia = 'Miercoles';
//     break;
//   case 5:
//     nombreDia = 'Jueves';
//     break;
//   case 6:
//     nombreDia = 'Viernes';
//     break;
//   case 7:
//     nombreDia = 'Sabado';
//     break;
//   default:
//     nombreDia = 'Invalido';
// }
// document.write(nombreDia);