'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {
    for (let i = 0; i< 2; i++) {

        const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
        const lastFilmRating = prompt("На сколько оцените его?", "");
    
        if (lastFilm != "" || lastFilmRating != null || lastFilmRating != "" || lastFilm != null || lastFilmRating != "" || lastFilm.length > 50) {
            personalMovieDB.movies[lastFilm] = lastFilmRating;
        } else {
            i--;
        }
    
    }
}

//rememberMyFilms();

function detectLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    } 
}

//detectLevel();

function showMyDB() {
    if (personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log('You dont have access');
    }
}

showMyDB();
    
function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
    }
}

writeYourGenres();