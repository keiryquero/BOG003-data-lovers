

import { example } from './data.js';

import films from './data/ghibli/ghibli.js';

/*console.log(example);
console.log(films);*/

document.getElementById("siguiente").addEventListener("click", () => {
    document.getElementById("cabecera").style.display="none";
     document.getElementById("vista2").style.display = "block";
   })