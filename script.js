'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const lastSeenFilm = prompt("Один из последних просмотренных фильмов?", ""),
      lastFilmRating = prompt("На сколько оцените его?", ""),
      preLastSeenFilm = prompt("Один из последних просмотренных фильмов?", ""),
      preLastFilmRating = prompt("На сколько оцените его?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [lastSeenFilm]: lastFilmRating, 
        [preLastSeenFilm]: preLastFilmRating
    },
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);