// VARIABLES GENERALES
let menuPrincipal = `Que curso deseas comprar?:
1 - HTML
2 - CSS
3 - JS
4 - Salir
`
let metodoPago = `Seleccione su metodo de pago:
1 - Targeta de credito.
    30% de descuento.
2 - Targeta de debito.
    25% de descuento.
`
// precios
/* no puedo trabajar numero decimales 15.000$ porque lo toma como 15. y ademas las demas operaciones son numeros con enteros  //(0.15).toFixed(3)// */
/* solo queria que se muestre en la pantalla 15.000$ y el resultado total 13.650$ etc...*/

let html = 15000; //let html = parseFloat(15.000).toFixed(3); -> precioTotal NaN
let css = 16000;
let js = 17000;

// descuentos
let descuento1 = 30;
let descuento2 = 25;