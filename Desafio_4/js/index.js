alert('Bienvenido a nuestra plataforma online.');
let menu = parseInt(prompt(menuPrincipal));
if (menu == 1) {
    let a = prompt(`El curso de HTML vale $${html}.
    Deseas continuar SI / NO`);
    if (a == 'SI' || a == 'si') {
        let b = parseInt(prompt(metodoPago));
        if (b == 1) {
            let c = precioTotal(html, descuento1);
            alert(`El precio total es: ${c}$`);
            document.write('MUCHAS GRACIAS :)');
        } else if (b == 2) {
            let c = precioTotal(html, descuento2);
            alert(`El precio total es: ${c}$`);
            document.write('MUCHAS GRACIAS :)');
        } else {
            alert('Intente nuevamente.');
        }
    } else if (a == 'NO' || a == 'no') {
        alert('Gracias por su visita.');
    } else {
        alert('Intente nuevamente.');
    }
} else if (menu == 2) {
    let a = prompt(`El curso de CSS vale $${css}.
    Deseas continuar SI / NO`);
    if (a == 'SI' || a == 'si') {
        let b = parseInt(prompt(metodoPago));
        if (b == 1) {
            let c = precioTotal(css, descuento1);
            alert(`El precio total es: ${c}$`);
            document.write('MUCHAS GRACIAS :)');
        } else if (b == 2) {
            let c = precioTotal(css, descuento2);
            alert(`El precio total es: ${c}$`);
            document.write('MUCHAS GRACIAS :)');
        } else {
            alert('Intente nuevamente.');
        }
    } else if (a == 'NO' || a == 'no') {
        alert('Gracias por su visita.');
    } else {
        alert('Intente nuevamente.');
    }
} else if (menu == 3) {
    let a = prompt(`El curso de JS vale $${js}.
    Deseas continuar SI / NO`);
    if (a == 'SI' || a == 'si') {
        let b = parseInt(prompt(metodoPago));
        if (b == 1) {
            let c = precioTotal(js, descuento1);
            alert(`El precio total es: ${c}$`);
            document.write('MUCHAS GRACIAS :)');
        } else if (b == 2) {
            let c = precioTotal(js, descuento2);
            alert(`El precio total es: ${c}$`);
            document.write('MUCHAS GRACIAS :)');
        } else {
            alert('Intente nuevamente.');
        }
    } else if (a == 'NO' || a == 'no') {
        alert('Gracias por su visita.');
    } else {
        alert('Intente nuevamente.');
    }
} else if (menu == 4) {
    alert('Gracias por su visita.');
} else {
    alert('Intente nuevamente.');
}