class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }
}

let newUsers = [];
let newBooks = [];

const login = document.querySelector("#login");

const sendForm = (e) => {
  e.preventDefault();
  let nameUser = login.children[1].value;
  let emailUser = login.children[3].value;
  let passUser = login.children[5].value;
  login.innerHTML = `<h2>Welcome: ${nameUser}</h2>`;
  step2();
  //   const eventValue = e.target;
  //   userIn.innerHTML = `<h2>User was added successfully...</h2>
  // 	<p>User: ${eventValue.children[1].value}</p>
  // 	<p>Email: ${eventValue.children[3].value}</p>
  // 	<p>Password: ${eventValue.children[5].value}</p>
  // 	<hr>`;
  newUsers.push(new User(nameUser, emailUser, passUser));
  localStorage.setItem("dataUser", JSON.stringify(newUsers));
};
login.addEventListener("submit", sendForm);

const addProductos = () => {
  let addP = document.createElement("div");
  addP.innerHTML = `
     <form id="formAddP">
     <input id="title" placeholder="Title"/>
     <input id="author" placeholder="Author"/>
     <input id="year" placeholder="Year"/>
     <input id="gender" placeholder="Gender"/>
     <button type="submit" id="done">Done</button>
     </form>
     `;
  document.body.appendChild(addP);

  let formAddP = document.querySelector("#formAddP");
  formAddP.addEventListener("submit", (e) => {
    e.preventDefault();
    let a = document.createElement("div");
    a.innerHTML = `
          <p>Title: ${document.querySelector("#title").value}</p>
          <p>Author: ${document.querySelector("#author").value}</p>
          <p>Year: ${document.querySelector("#year").value}</p>
          <p>Gender: ${document.querySelector("#gender").value}</p>
          <hr>`;
    document.body.appendChild(a);
    e.target.reset();
  });
  let titleBook = document.querySelector("#title").value;
  let authorBook = document.querySelector("#author").value;
  let yearBook = document.querySelector("#year").value;
  let genderBook = document.querySelector("#gender").value;
  newBooks.push(new Book(titleBook, authorBook, yearBook, genderBook));
  localStorage.setItem("dataBooks", JSON.stringify(newBooks));
};

const step2 = () => {
  let container = document.createElement("div");
  container.innerHTML = ` 
  <button id="add">Add Products</button>
  <button id="delete">Delete Products</button>
  `;
  document.body.appendChild(container);

  let add = document.querySelector("#add");
  add.addEventListener("click", addProductos);

  let del = document.querySelector("#delete");
  del.addEventListener("click", () => {
    let p = document.createElement("p");
    p.textContent = "Still in BETA";
    container.appendChild(p);
  });
};
