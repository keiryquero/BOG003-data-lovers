// Funcion filter, para filtrar las peliculas menores al año 2000
export function filtroPeliculas(films){ 
   let mayorMenor= films.filter((films) => films.release_date < 2000 );
  //console.log(mayorMenor)
  return mayorMenor;
}
//prueba del arrow funtion = función flecha
export const ordenarAño = (films) => {
  return films.sort((year1, year2) => year2.release_date - year1.release_date
   )};

// prueba con reduce = promedio de las peliculas
export const reduceData = (films) => {
  return films.filter((films) => films.rt_score >= 93).sort((rt,rt1) => rt1.rt_score - rt.rt_score);
};
//Prueba del arrow function = funcion funcion flecha
  export const ordenarAño = (films) => {
  return films.sort((year1,year2) => year2.release_date - year1.release_date 
  )};
// funcion Reduce,muestra promedio de las peliculas famosas > 90 puntos

//Funcion Sort, para ordenar de mayor a menor
/*export function ordenarAño(films){
  let ordenar =  films.sort((año1,año2) => {
    return año2.release_date - año1.release_date
  });
   //console.log(ordenar);
  return ordenar;

};*/









