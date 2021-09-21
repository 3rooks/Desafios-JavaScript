alert('Ingrese una pelicula:');

class Movie {
    constructor(title, director, gender, year) {
        this.title = title.toUpperCase();
        this.director = director.toUpperCase();
        this.gender = gender.toUpperCase();
        this.year = year;
    }
    movieInfo() {
        return `El titulo de la pelicula es: ${this.title} <br>El director es: ${this.director} <br>El genero es: ${this.gender} <br>El año de estreno: ${this.year}`;
    }
}

const title = prompt('Ingrese el titulo de la pelicula:');
const director = prompt('Ingrese el director de la pelicula:');
const gender = prompt('Ingrese el genero de la pelicula:');
const year = Number(prompt('Ingrese el año de la pelicula:'));

const movieOne = new Movie(title, director, gender, year);

document.write(movieOne.movieInfo());