import {ordenarPeliculas} from './data.js';
import {ordenPorFecha} from './data.js';
import studio from './data/ghibli/ghibli.js';
let data = studio.films;

function card1(films){
    document.getElementById("container").innerHTML = "";
    //1. recorre el array de Films 
    for(var i = 0; i < films.length; i++){
      let title = films [i].title;
      let year= films [i].release_date;
      let poster= films [i].poster;
      //let description= films[i].description;
     /* Toma el elemento container y lo sustituye por nuevos elementos, acumulando 
     los elementos para mostrarlo en el documento */
     document.getElementById("container").innerHTML +=`
     <div>
     <img src = ${poster}>
     <h3>${title}</h3>
     <p>${year}</p>     
     </div>`
    }
   }

document.getElementById("link2").addEventListener("click", () => {card1(data)
   });
// prueba del filtro ordenar por año de publicación
 const dataFiltrada =ordenarPeliculas(data)
document.getElementById("filtro").addEventListener("click", () => { card1(dataFiltrada)       
   });
// prueba del ordenar por año de publicación #2
const dataSort = ordenPorFecha(data)
document.getElementById("ascente").addEventListener("click", () => { card1(dataSort)       
});



function topPelis(films){
    document.getElementById("ranking").innerHTML = "";
    //1. recorre el array de Films 
    for(var i = 0; i < films.length; i++){
      let title = films [i].title;
      let year= films [i].release_date;
      let poster= films [i].poster;
      let description= films[i].description;
     /* Toma el elemento container y lo sustituye por nuevos elementos, acumulando 
     los elementos para mostrarlo en el documento */
     document.getElementById("ranking").innerHTML +=`
     <div>
     <img src = ${poster}>
     <h3>${title}</h3>
     <h4>${year}</h4>   
     <p> ${description}</p> 
     </div>`
    }
   }


document.getElementById("link3").addEventListener("click", () => {topPelis(data)

});

git /*Retorna a la pagina principal*/

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







