'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i< 2; i++) {

    const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    const lastFilmRating = prompt("На сколько оцените его?", "");

    if (lastFilm != "" && lastFilmRating != null && lastFilmRating != "" && lastFilm != null && lastFilmRating != "" && lastFilm.length > 50) {
        personalMovieDB.movies[lastFilm] = lastFilmRating;
    } else {
        i--;
    }

}


console.log(personalMovieDB);