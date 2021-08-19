// estas funciones son de ejemplo

/*export const ghibli = (studio) => {
   
  return "hello"
};*/
  
 export {card1} 
  
      function card1(films){
    document.getElementById("container").innerHTML = "";
    //1. recorre el array de Films 
    for(var i = 0; i < films.length; i++){
      let title = films [i].title;
      let year= films [i].release_date;
      let poster= films [i].poster;
      let description= films[i].description;
     /*console.log(title,year,poster, description);*/
     
     /* Toma el elemento container y lo sustituye por nuevos elementos, acumulando 
     los elementos para mostrarlo en el documento */
     document.getElementById("container").innerHTML +=`
     <div>
     <img src = ${poster}>
     <h3>${title}</h3>
     <p>${year}</p>
     <p>${description}</p>
     </div>`
    }
    return card1;
   }

export const anotherExample = () => {
  return 'OMG';
};

export {ordenarPeliculas}

function ordenarPeliculas(films){
  let puntaje= films.filter((films) => {
    return films.release_date < 2000;
  });
    
  return puntaje;
}


