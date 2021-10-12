// ICON MENU
const iconMenu = document.querySelector("#icon-menu");
const mainMenu = document.querySelector("#main-menu");

iconMenu.addEventListener("click", () => {
  mainMenu.classList.toggle("menu-show");
});

// SEARCH
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
// SEARCH BuTTOM
const filterProducts = () => {
  const searchInputValue = searchInput.value.toLowerCase();
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

  renderHTML(filteredProducts, containerMain);
};

searchBtn.addEventListener("click", filterProducts);

// SEARCH INPUT
searchInput.addEventListener("keyup", filterProducts);

// MAIN CONTAINER
const containerMain = document.querySelector("#container-main");

let counter = 1;
let btn = 1;
const htmlTemplate = (product) => {
  return `<div class="card">
          <div class="img--${counter++}"></div>
            <p>Title: ${product.title}</p>
            <p> Author: ${product.author}</p>
            <p>Gender: ${product.gender}</p>
            <p>USD: $${product.price}</p> 
            <button id="addCart-${btn++}">Add to Cart </button>
          </div>`;
};

const renderHTML = (products, container) => {
  container.innerHTML = ""; //aSDQWROJKDGFJSDIOGJOPDJGPSDJGPIOWEJTJPDOISFJPOSDJFALsdkfjk

  if (products.length > 0) {
    for (const product of products) {
      const productInHTML = htmlTemplate(product);
      container.innerHTML += productInHTML;
    }
  } else {
    container.innerHTML = `<p>None</p>`;
  }
};
renderHTML(PRODUCTS, containerMain);

// STORAGE
let productsInCart = [];
console.log(productsInCart);

const btn1 = document.querySelector("#addCart-1");
const btn2 = document.querySelector("#addCart-2");
const btn3 = document.querySelector("#addCart-3");
const btn4 = document.querySelector("#addCart-4");
const btn5 = document.querySelector("#addCart-5");
const btn6 = document.querySelector("#addCart-6");
const btn7 = document.querySelector("#addCart-7");
const btn8 = document.querySelector("#addCart-8");
const btn9 = document.querySelector("#addCart-9");
const btn10 = document.querySelector("#addCart-10");

btn1.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[0].id, JSON.stringify(PRODUCTS[0].price));
  productsInCart.push(PRODUCTS[0]);
  alert(`Product "${PRODUCTS[0].title}" added to cart.`);
});
btn2.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[1].id, JSON.stringify(PRODUCTS[1].price));
  productsInCart.push(PRODUCTS[1]);
  alert(`Product "${PRODUCTS[1].title}" added to cart.`);
});
btn3.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[2].id, JSON.stringify(PRODUCTS[2].price));
  productsInCart.push(PRODUCTS[2]);
  alert(`Product "${PRODUCTS[2].title}" added to cart.`);
});
btn4.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[3].id, JSON.stringify(PRODUCTS[3].price));
  productsInCart.push(PRODUCTS[3]);
  alert(`Product "${PRODUCTS[3].title}" added to cart.`);
});
btn5.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[4].id, JSON.stringify(PRODUCTS[4].price));
  productsInCart.push(PRODUCTS[4]);
  alert(`Product "${PRODUCTS[4].title}" added to cart.`);
});
btn6.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[5].id, JSON.stringify(PRODUCTS[5].price));
  productsInCart.push(PRODUCTS[5]);
  alert(`Product "${PRODUCTS[5].title}" added to cart.`);
});
btn7.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[6].id, JSON.stringify(PRODUCTS[6].price));
  productsInCart.push(PRODUCTS[6]);
  alert(`Product "${PRODUCTS[6].title}" added to cart.`);
});
btn8.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[7].id, JSON.stringify(PRODUCTS[7].price));
  productsInCart.push(PRODUCTS[7]);
  alert(`Product "${PRODUCTS[7].title}" added to cart.`);
});
btn9.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[8].id, JSON.stringify(PRODUCTS[8].price));
  productsInCart.push(PRODUCTS[8]);
  alert(`Product "${PRODUCTS[8].title}" added to cart.`);
});
btn10.addEventListener("click", () => {
  sessionStorage.setItem(PRODUCTS[9].id, JSON.stringify(PRODUCTS[9].price));
  productsInCart.push(PRODUCTS[9]);
  alert(`Product "${PRODUCTS[9].title}" added to cart.`);
});

// CART
const cart = document.querySelector("#cart");
const cart1 = document.querySelector("#cart1");
cart.addEventListener("click", () => {
  for (let product of productsInCart) {
    alert(`CART:
           Name: "${product.title}"
           Price: $${product.price}`);
  }
});
cart1.addEventListener("click", () => {
  for (let product of productsInCart) {
    alert(`CART:
           Name: "${product.title}"
           Price: $${product.price}`);
  }
});
