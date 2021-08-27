
import { filtroPeliculas, ordenarAño, reduceData } from '../src/data.js';

let dataMovies = [
  {
    "title": "My Neighbor Totoro",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "title": "Only Yesterday",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
    "release_date": "1991",
    "rt_score": "100",
  },
  {
    "title": "Spirited Away",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Spirited_Away.png",
    "release_date": "2001",
    "rt_score": "97",
  },
  {
    "title": "The Tale of the Princess Kaguya",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Tale_of_the_Princess_Kaguya.jpg",
    "release_date": "2013",
    "rt_score": "100",
  }

]

let moviesFiltradas= [
  {
    "title": "My Neighbor Totoro",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "title": "Only Yesterday",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
    "release_date": "1991",
    "rt_score": "100",
  }
  
]

let moviesOrdenar =[
  
  {
    "title": "The Tale of the Princess Kaguya",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Tale_of_the_Princess_Kaguya.jpg",
    "release_date": "2013",
    "rt_score": "100",
  },
  {
    "title": "Spirited Away",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Spirited_Away.png",
    "release_date": "2001",
    "rt_score": "97",
  },
  {
    "title": "Only Yesterday",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
    "release_date": "1991",
    "rt_score": "100",
  },
  {
    "title": "My Neighbor Totoro",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
  }
]
/*let promedioPuntos =[
  {
    "title": "My Neighbor Totoro",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "title": "Only Yesterday",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
    "release_date": "1991",
    "rt_score": "100",
  }

]*/

let rtOrden=[
  
    {
      "title": "The Tale of the Princess Kaguya",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Tale_of_the_Princess_Kaguya.jpg",
      "release_date": "2013",
      "rt_score": "100",
    },
    {
      "title": "Only Yesterday",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
      "release_date": "1991",
      "rt_score": "100",
    },
    {
      "title": "Spirited Away",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Spirited_Away.png",
      "release_date": "2001",
      "rt_score": "97",
    },
    {
      "title": "My Neighbor Totoro",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988",
      "rt_score": "93",
    }
  
]

describe('filtroPeliculas', () => {

  it('is a function', () => {
    expect(typeof filtroPeliculas).toBe('function');
  });

  it('Deberia retornar las películas menores al año 2000  `filtroPeliculas`', () => {
    expect(filtroPeliculas(dataMovies)).toEqual(moviesFiltradas);
  });
  
});


describe('ordenarAño', () => {
  it('is a function', () => {
    expect(typeof ordenarAño).toBe('function');
  });

  it('deberia mostrar el orden de las películas por el año de mayor a menor `ordenarAño`', () => {
    expect(ordenarAño(dataMovies)).toEqual(moviesOrdenar);
  });
});


describe('reduceData', () => {
  it('is a function', () => {
    expect(typeof reduceData).toBe('function');
  });

  it('deberia mostrar sola las peliculas con mayor puntaje en orden de mayor a menor `reduceData`', () => {
    expect(reduceData(dataMovies)).toEqual(rtOrden);
  });
  
describe('promedioStudio', () => {
  it('is a function', () => {
    expect(typeof promedioStudio).toBe('function');
  });

  /*it('deberia mostrar el promedio del puntaje de las peliculas de Ghibli  `promedioStudio`', () => {
    expect((dataMovies)).toEqual(promedioPuntos);
  });*/

});