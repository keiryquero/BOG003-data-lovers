import { filtroPeliculas } from './data.js';
import { ordenarAño } from './data.js';
import { reduceData } from './data.js';
import studio from './data/ghibli/ghibli.js';
let films = studio.films;

function tarjeta1(films) {
//1. recorre el array de Films 
    document.getElementById("container").innerHTML = "";
    const contenedorTarjeta = document.createElement("div");

    for (var i = 0; i < films.length; i++) {
        let title = films[i].title;
        let year = films[i].release_date;
        let poster = films[i].poster;
        let points = films[i].rt_score;

        // Se crean elementos que van dentro del contenedorTarjeta

        const tarjeta = document.createElement("div");
        const imagen = document.createElement("img");
        const titulo = document.createElement("h3");
        const año = document.createElement("h4");
        const puntos = document.createElement("p");

        imagen.src = poster;
        titulo.textContent = title;
        año.textContent = year;
        puntos.textContent = "Puntuación: " + points;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(año);
        tarjeta.appendChild(puntos);
        contenedorTarjeta.appendChild(tarjeta);
        //console.log(tarjeta, titulo, año, imagen);

    }
    return contenedorTarjeta;
}

// Invoca la funcion tarjeta1
document.getElementById("link2").addEventListener("click", () => {
document.getElementById("container").appendChild(tarjeta1(films));
});
//invoca la funcion filter
const filtrarPeliculas = filtroPeliculas(films);
document.getElementById("filtro").addEventListener("click", () => {
document.getElementById("container").appendChild(tarjeta1(filtrarPeliculas));
});
// invoca la funcion sort
let ordenar = ordenarAño(films);
tarjeta1(ordenar);

// invoca la función reduce
document.getElementById("link3").addEventListener("click", () => {
document.getElementById("ranking").appendChild(tarjeta1(films))
});

const pruebafilter = reduceData(films)
document.getElementById("btn").addEventListener("click", () => {
document.getElementById("ranking").appendChild(tarjeta1(pruebafilter));
    
});

/*Retorna a la pagina principal*/
document.getElementById("link1").addEventListener("click", () => {
    document.getElementById("catalago").style.display = "none"
    document.getElementById("cabecera").style.display = "block"
    document.getElementById("topPeliculas").style.display = "none"
});
/*Cambio de vista a través del boton catálogo*/
document.getElementById("link2").addEventListener("click", () => {
    document.getElementById("cabecera").style.display = "none"
    document.getElementById("catalago").style.display = "block"
    document.getElementById("topPeliculas").style.display = "none"
});
/*Cambio de vista a través del boton top peliculas*/
document.getElementById("link3").addEventListener("click", () => {
    document.getElementById("cabecera").style.display = "none"
    document.getElementById("catalago").style.display = "none"
    document.getElementById("topPeliculas").style.display = "block"
});



/*const menuIcon = document.querySelector(".menu");
const menu = document.querySelector(".menu-despegable");
let openMenuBtn = document.querySelector(".open-menu");
let closeMenuBtn = document.querySelector(".close-menu");

console.log(menuIcon);
console.log(menu);

menuIcon.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})

openMenuBtn.addEventListener("click",menuIcon);
closeMenuBtn.addEventListener("click",menuIcon);*/



/*window.addEventListener("click", e=>{
    if(menu.classList.contains("spread")
    && e.target != menu  && e.target != menuIcon)
    {
        menu.classList.toggle("spread")
    }
})*/

/*let openMenuBtn = document.querySelector(".open-menu");
let closeMenuBtn = document.querySelector(".close-menu");

open-menu.addEventListener("click", function(){
    menu.classList.toggle("menu_opened");
}
openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);*/


/*function topPelis(films) {
    document.getElementById("ranking").innerHTML = "";
    //1. recorre el array de Films
    for (var i = 0; i < films.length; i++) {
        let title = films[i].title;
        let year = films[i].release_date;
        let poster = films[i].poster;
        let description = films[i].description;
        let points = films[i].rt_score;
        /* Toma el elemento container y lo sustituye por nuevos elementos, acumulando
        los elementos para mostrarlo en el documento
        document.getElementById("ranking").innerHTML += `
     <div>
     <img src = ${poster}>
     <h3>${title}</h3>
     <h4>${year}</h4>
     <p> ${description}</p>
     <p> Puntuación: ${rta}</p>
     </div>`
    }
}*/




