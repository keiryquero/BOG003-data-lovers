
export const anotherExample = () => {
  return 'OMG';
};
// intento 1 de crear el filter para ordenar las peliculas
export function ordenarPeliculas(films){ 
  let mayorMenor= films.filter((films) => films.release_date < 2000 );
  // console.log(mayorMenor)
  return mayorMenor;
}


//prueba con arrow funtion
export const ordenPorFecha = (data) => {
   data.sort((year1, year2) => year2.release_date - year1.release_date
   )};
//console.log(ordenPorFecha );



/*export function ordenPorFecha2(date){

  let years= date.sotr((year1, year2) => {
  return year1.release_date > year2.release_date

  
   } )}*/
