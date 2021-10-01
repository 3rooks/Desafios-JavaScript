class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
  iva() {
    return this.precio * 1.21;
  }
}
let productos = [];
let iniciar = "";
do {
  iniciar = prompt("Desea ingresar un producto: Si / No").toLowerCase();
  if (iniciar == "si") {
    let nombreDelProducto = prompt(
      "Ingrese el nombre del producto:"
    ).toUpperCase();
    let precioDelProducto = parseInt(
      prompt("Ingrese el precio del producto: $____")
    );
    let cantidadDelProducto = parseInt(
      prompt("Ingrese la cantidad del producto:")
    );
    productos.push(
      new Producto(nombreDelProducto, precioDelProducto, cantidadDelProducto)
    );
  } else if (iniciar == "no") {
    alert("Gracias...");
  } else {
    alert("Intente nuevamente");
  }
} while (iniciar == "si");

for (let producto of productos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<p>Nombre: ${producto.nombre}</p>
                          <p>Precio: $${producto.precio}</p>
                          <p>Cantidad/Stock: ${producto.cantidad}</p>
                          <p>Precio con Iva: $${producto.iva()}</p>
                          <hr>`;
  document.body.appendChild(contenedor);
}
console.log(productos);
