function guardarPelicula(){
    
    let titulo = document.getElementById("titulo");
    let anio = document.getElementById("anioPublicado");
    let nacionalidad = document.getElementById("nacionalidad");
    let director = document.getElementById("director");
    let guionista = document.getElementById("guionista");
    let idioma = document.getElementById("idioma");
    let plataforma = document.getElementById("plataforma");
    let esMCU = document.getElementById("esMCU");
    let principal = document.getElementById("principal");
    let productor = document.getElementById("productor");
    let distribuidor = document.getElementById("distribuidor");
    let genero = document.getElementById("genero");
    let imagen = document.getElementById("portada");

    let peliculaTemp = new Movie(titulo.value,anio.value,nacionalidad.value,genero.value);
    peliculaTemp.actors = [];
    peliculaTemp.director = director.value;
    peliculaTemp.writer = guionista.value;
    peliculaTemp.language = idioma.value;
    peliculaTemp.plataform = plataforma.value;
    peliculaTemp.isMCU = esMCU.value;
    peliculaTemp.mainCharacterName = principal.value;
    peliculaTemp.producer = productor.value;
    peliculaTemp.distributor = distribuidor.value;
    peliculaTemp.image = imagen.value;

    peliculas.push(peliculaTemp);

    console.log(peliculaTemp);

    titulo.value = "";
    anio.value = "";
    nacionalidad.value = "";
    director.value = "";
    guionista.value = "";
    idioma.value = "";
    plataforma.value = "";
    principal.value = "";
    productor.value = "";
    distribuidor.value = "";
    genero.value = "";
    imagen.value = "";

    cargarPeliculas();
}


class Professional {

    constructor(name, age, genre, weight, height, hairColor, eyeColor, 
        race, isRetired, nationality, oscarsNumber, profession,image){
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
        this.image = image;
    }

    toString()
    {
        return "Nombre: "+ this.name + "\n" +
                "Edad: " + this.age + "\n" +
                "Genero: " + this.genre + "\n" +
                "Peso:" + this.weight + "\n" +
                "Altura:" + this.height + "\n`"+
                "Color de pelo: " + this.hairColor + "\n" +
                "Color de ojos: " + this.eyeColor + "\n" +
                "Raza: " + this.race + "\n" +
                "¿Está retirado?: " + this.isRetired + "\n" +
                "Nacionalidad: " + this.nationality + "\n" +
                "Número de Oscars: " + this.oscarsNumber + "\n" +
                "Profesión: " + this.profession + "\n" 
    }

    SoloNombre(){
        return `${this.name}`; 
    }

    toHtml(){
        return `<div class="col-xs-12 col-sm-6 col-md-4">`
        + `<div class="card">`
        + `<img class="card-img-top img-fluid imagen__pelicula" src="${this.image}" alt="${this.name}">`
        + `<div class="card-body">`
        +  `<h5 class="card-title">${this.name}</h5>`
        +  `<p class="card-text">Edad: ${this.age}<br>`
        +   `Genero:  ${this.genre}<br>` 
        +   `Peso: ${this.weight}<br>` 
        +   `Altura: ${this.height}<br>`
        +   `Color de pelo: ${this.hairColor}<br>`
        +   `Color de ojos: ${this.eyeColor}<br>`
        +   `Raza: ${this.race}<br>`
        +   `¿Está retirado?: ${this.isRetired}<br>`
        +   `Nacionalidad: ${this.nationality}<br>`
        +   `Número de Oscars: ${this.oscarsNumber}<br>`
        +   `Profesión: ${this.profession}<br>` 
        + `</div>`
        + `</div>`
        +`</div>`;
    }
}

class Movie{

    constructor(title, releaseYear ,nacionality ,genre){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
    }

    toString(){
        let actores ="";
        for(let actor in this.actors){
            actores += this.actors[actor].toString() + ", ";
        }
        return `Título: ${this.title}\n` +
        `Año publicado: ${this.releaseYear}\n` +
        `Actores: ${actores}\n` +
        `Nacionalidad: ${this.nacionality}\n` +
        `Director: ${this.director}\n` +
        `Guionista: ${this.writer}\n` +
        `Idioma: ${this.language}\n` +
        `Plataforma: ${this.plataform}\n` +
        `¿Es MCU?: ${this.isMCU}\n` +
        `Personaje principal: ${this.mainCharacterName}\n` +
        `Productor: ${this.producer}\n` +
        `Distribuidor: ${this.distributor}\n` +
        `Genero: ${this.genre}\n`;
    }

    toHtml(){
        let actores ="";
        for(let actor in this.actors){
            actores += ` ${this.actors[actor].SoloNombre()},`;
        }
        return `<div class="col-xs-12 col-sm-6 col-md-4">`
        + `<div class="card">`
        + `<img class="card-img-top img-fluid imagen__pelicula" src="${this.image}" alt="${this.title}">`
        + `<div class="card-body">`
        +  `<h5 class="card-title">${this.title}</h5>`
        +  `<p class="card-text">`
        +   `Año publicado: ${this.releaseYear}<br>`
        +   `Actores: ${actores}<br>`
        +   `Nacionalidad: ${this.nacionality}<br>`
        +   `Director: ${this.director}<br>`
        +   `Guionista: ${this.writer}<br>` 
        +   `Idioma: ${this.language}<br>` 
        +   `Plataforma: ${this.plataform}<br>` 
        +   `¿Es MCU?: ${this.isMCU}<br>` 
        +   `Personaje principal: ${this.mainCharacterName}<br>` 
        +   `Productor: ${this.producer}<br>`
        +   `Distribuidor: ${this.distributor}<br>`
        +   `Genero: ${this.genre}<br>`
        + `</p>`
        + `</div>`
        + `</div>`
        +`</div>`;
    }
}

function cargarPeliculas(){
    let peliculahtml = document.getElementById("peliculas");
    peliculahtml.innerHTML = "";
    for(let i=0;i<peliculas.length;i++){
        peliculahtml.innerHTML += peliculas[i].toHtml();
    }
}

function cargarActores(){
    for(let i=0;i<arrayActores.length;i++){
        let actoreshtml = document.getElementById("actores");
        actoreshtml.innerHTML += arrayActores[i].toHtml();
    }
}

let persona1 = new Professional("Julio", 40, "hombre", 70, 175, "castaño", 
"verde", "oriental", false, "español", 0, "actor", "./img/act1.jpg");

let persona2 = new Professional("Jose", 41, "hombre", 109, 175, "gris", 
"marron", "latina", true, "español", 2, "actor", "./img/act2.jpg");

let persona3 = new Professional("Javi", 30, "hombre", 115, 178, "negro", 
"marron", "latina", false, "español", 0, "actor","./img/act3.jpg");

let persona4 = new Professional("Oliver", 37, "hombre", 114, 162, "castaño", 
"verde", "latina", false, "español", 2, "actor", "./img/act4.jpg");

let persona5 = new Professional("Jose", 35, "hombre", 130, 188, "castaño", 
"marron", "latina", false, "español", 15, "actor", "./img/act5.jpg");

let persona6 = new Professional("Laura", 25, "mujer", 60, 170, "rosa", 
"gris", "latina", false, "español", 0, "actor", "./img/act6.jpg");

let arrayActor = [persona1,persona2,persona3];
let arrayActor2 = [persona2,persona5,persona4];
let arrayActor3 = [persona4,persona5,persona6];

let arrayActores =[persona1,persona2,persona3,persona4,persona5,persona6]


let pelicula1 = new Movie("Las cosas que cayeron solas",2017,"Francesa","Drama");
pelicula1.actors = arrayActor;
pelicula1.director = "Berlanga";
pelicula1.writer = "Shen zumiko";
pelicula1.language = "Albano";
pelicula1.plataform = "youtube";
pelicula1.isMCU = false;
pelicula1.mainCharacterName = "Azoti";
pelicula1.producer ="Berlanga";
pelicula1.distributor = "Canal+";
pelicula1.image = "./img/peli1.jpg";

let pelicula2 = new Movie("Wakanda, ¿donde estas?",2020,"Americana","Documental");
pelicula2.actors = arrayActor3;
pelicula2.director = "Chihiro";
pelicula2.writer = "tokomoyo";
pelicula2.language = "Ingles";
pelicula2.plataform = "Disney+";
pelicula2.isMCU = true;
pelicula2.mainCharacterName = "ashata";
pelicula2.producer ="Marvel";
pelicula2.distributor = "Disney";
pelicula2.image = "./img/peli2.jpg";

let pelicula3 = new Movie("El robobo de la jojoya",1990,"Española","Comedia");
pelicula3.actors = arrayActor2;
pelicula3.director = "Jose Albeniz";
pelicula3.writer = "Jose Albeniz";
pelicula3.language = "Español";
pelicula3.plataform = "Tve";
pelicula3.isMCU = false;
pelicula3.mainCharacterName = "Josema Yuste";
pelicula3.producer ="RTVE";
pelicula3.distributor = "RTVE";
pelicula3.image = "./img/peli3.jpg";


let peliculas =[pelicula1,pelicula2,pelicula3];

 cargarPeliculas();
 cargarActores();
