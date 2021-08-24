// Funcion filter, para filtrar las peliculas menores al año 2000
export function filtroPeliculas(films){ 
  let mayorMenor= films.filter((films) => films.release_date < 2000);
  // console.log(mayorMenor)
  return mayorMenor;
}
//prueba del arrow funtion = función flecha
export const ordenarAño = (films) => {
  return films.sort((year1, year2) => year2.release_date - year1.release_date
   )};

// prueba con reduce = promedio de las peliculas
export const reduceData = (films) => {
  return films.filter((films) => films.rt_score >= 90)
};
