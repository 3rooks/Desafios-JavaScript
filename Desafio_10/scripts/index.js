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
const htmlTemplate = (product) => {
  return `<div class="card">
          <div class="img--${counter++}"></div>
            <p>Title: ${product.title}</p>
            <p> Author: ${product.author}</p>
            <p>Gender: ${product.gender}</p>
            <p>USD: $${product.price}</p> 
            <button id="buy">Add to Cart</button>
          </div>`;
};

//qwerty
const buy = document.querySelector("#buy");
const cart = document.querySelector("#cart");

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
