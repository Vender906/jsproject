"use sсtrict";

// const result = confirm("Are you dick?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "");
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', "");
// answers[1] = prompt('Как ваше Фамилия?', "");
// answers[2] = prompt('Сколько вам лет?', "");

// document.write(answers);

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ruslan";
// alert(`Привет, ${user}`);

// console.log(4 + +"5");

// console.log(5 % 2);

// console.log(2 * 4 == "8");

// const isChecked = true,
//     isClose = false;
// console.log(isChecked  || isClose);

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);