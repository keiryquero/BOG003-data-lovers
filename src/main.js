
import { ghibli } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(ghibli);
console.log(data);


const menuIcon = document.querySelector(".menu");
const menu = document.querySelector(".menu-despegable");
let openMenuBtn = document.querySelector(".open-menu");
let closeMenuBtn = document.querySelector(".close-menu");

console.log(menuIcon);
console.log(menu);

menuIcon.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
})

openMenuBtn.addEventListener("click",menuIcon);
closeMenuBtn.addEventListener("click",menuIcon);



/*window.addEventListener("click", e=>{
    if(menu.classList.contains("spread")
    && e.target != menu  && e.target != menuIcon)
    {
        menu.classList.toggle("spread")
    }
})*/

/*let openMenuBtn = document.querySelector(".open-menu");
let closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}
openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);*/

