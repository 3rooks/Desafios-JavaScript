// ICON MENU
const iconMenu = $("#icon-menu");
const mainMenu = $("#main-menu");

iconMenu[0].addEventListener("click", () => {
  mainMenu[0].classList.toggle("menu-show");
});

// SEARCH
const searchInput = $("#search");
const searchBtn = $("#search-btn");

// SEARCH BUTTOM
const filterProducts = () => {
  const searchInputValue = searchInput[0].value.toLowerCase();
  console.log(searchInputValue);
  const filteredProducts = PRODUCTS.filter((PRODUCTS) => {
    const productTitle = PRODUCTS.title.toLowerCase();
    const productAuthor = PRODUCTS.author.toLowerCase();
    const productGender = PRODUCTS.gender.toLowerCase();

    const filtered =
      productTitle.includes(searchInputValue) ||
      productAuthor.includes(searchInputValue) ||
      productGender.includes(searchInputValue);
    return filtered;
  });

  renderHTML(filteredProducts, containerMain[0]);
};

searchBtn[0].addEventListener("click", filterProducts);

// SEARCH INPUT
searchInput[0].addEventListener("keyup", filterProducts);

// MAIN CONTAINER
const containerMain = $("#container-main");

let counter = 1;
let btn = 1;
const htmlTemplate = (product) => {
  return `<div class="card">
              <div class="img--${counter++}"></div>
              <p>Title: ${product.title}</p>
              <p>Author: ${product.author}</p>
              <p>Gender: ${product.gender}</p>
              <p>USD: $${product.price}</p> 
              <button id="addCart-${btn++}">Add to Cart</button>
          </div>`;
};

const renderHTML = (products, container) => {
  container.innerHTML = "";

  if (products.length > 0) {
    for (const product of products) {
      const productInHTML = htmlTemplate(product);
      container.innerHTML += productInHTML;
    }
  } else {
    container.innerHTML = `<p>None</p>`;
  }
};
renderHTML(PRODUCTS, containerMain[0]);

// STORAGE
let productsInCart = [];
console.log(productsInCart);

const mostrarCarrito = () => {
  const carrito = JSON.parse(sessionStorage.getItem("carrito"));
  const contenedorCarrito = $("footer");
  contenedorCarrito[0].innerHTML = "";
  if (carrito && carrito.length > 0) {
    for (let item of carrito) {
      contenedorCarrito[0].innerHTML += `<li><i>Product in Cart:</i> <strong>${item.title} - $${item.price}</strong></li>`;
    }
  }
};

const btn1 = $("#addCart-1");
const btn2 = $("#addCart-2");
const btn3 = $("#addCart-3");
const btn4 = $("#addCart-4");
const btn5 = $("#addCart-5");
const btn6 = $("#addCart-6");
const btn7 = $("#addCart-7");
const btn8 = $("#addCart-8");
const btn9 = $("#addCart-9");
const btn10 = $("#addCart-10");

btn1[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[0]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[0].title}" added to cart.`);
  mostrarCarrito();
});
btn2[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[1]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[1].title}" added to cart.`);
  mostrarCarrito();
});
btn3[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[2]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[2].title}" added to cart.`);
  mostrarCarrito();
});
btn4[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[3]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[3].title}" added to cart.`);
  mostrarCarrito();
});
btn5[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[4]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[4].title}" added to cart.`);
  mostrarCarrito();
});
btn6[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[5]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[5].title}" added to cart.`);
  mostrarCarrito();
});
btn7[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[6]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[6].title}" added to cart.`);
  mostrarCarrito();
});
btn8[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[7]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[7].title}" added to cart.`);
  mostrarCarrito();
});
btn9[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[8]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[8].title}" added to cart.`);
  mostrarCarrito();
});
btn10[0].addEventListener("click", () => {
  const productsInStorage = JSON.parse(sessionStorage.getItem("carrito"));
  if (productsInStorage) {
    productsInCart = productsInStorage;
  } else {
    productsInCart = [];
  }
  productsInCart.push(PRODUCTS[9]);
  sessionStorage.setItem("carrito", JSON.stringify(productsInCart));
  alert(`Product "${PRODUCTS[9].title}" added to cart.`);
  mostrarCarrito();
});
mostrarCarrito();

$("#cart").click(() => {
  $("footer").css("display", "block");
});
$("#cart").dblclick(() => {
  $("footer").css("display", "none");
});
$("#cart1").click(() => {
  $("footer").css("display", "block");
});
$("#cart1").dblclick(() => {
  $("footer").css("display", "none");
});

$("body").prepend(`<div>
                        <button id='btnjq'>Light Mode</button>
                        <button id='btnjqdark'>Dark Mode</button>
                  </div>`);

$("#btnjq").on("click", () => {
  $("main").css("background", "white");
  $("p").css("color", "black");
});

$("#btnjqdark").on("click", () => {
  $("main").css("background", "black");
  $("p").css("color", "white");
});
