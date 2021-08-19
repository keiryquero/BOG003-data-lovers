/*import { ghibli } from './data.js';
console.log(ghibli);*/

import studio from './data/ghibli/ghibli.js';
let films = studio.films;


import {card1} from './data.js';
  
document.getElementById("link2").addEventListener("click", () => {card1(films)

   });

// prueba del filtro ordenar por año de publicación



import {ordenarPeliculas} from './data.js';
  
document.getElementById("filtro").addEventListener("click", () => {ordenarPeliculas(films)

   });



 /*Retorna a la pagina principal*/

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("catalago").style.display = "none"
    document.getElementById("cabecera").style.display = "block"
     });
    
    /*Cambio de vista a través del boton catálogo*/ 
    document.getElementById("link2").addEventListener("click", () => { 
        document.getElementById("cabecera").style.display = "none"
        document.getElementById("catalago").style.display = "block"
    
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







