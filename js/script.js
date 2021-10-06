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

// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");
// console.log(numberOfFilms);

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
        console.log('error');
        i--;
        }
    }
}

// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

// console.log(personalMovieDB);


function showMyDB(hidden) {
    if (!hidden)
        console.log(personalMovieDB);
    
    
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

// let i = 0;

// do {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);

// while (i < 2) {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }




// if (4 == 4) {
// 	console.log('Ok!');
// }

// if (4 == 9) {
// 	console.log('Ok!');
// } else {
// 	console.log('Error');
// }



// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log("Ok!") : console.log("Error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!')
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// let num = 50;
// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++; 
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }



// function showFirstMessage(text) {
//     console.log(text);
// }
// showFirstMessage("Hello World!");



// let num = 20;
// function showFirstMessage (text) {
// 	console.log(text);
// 	let num = 10;
// 	console.log(num);		
// }
// showFirstMessage("Hello World!");
// console.log(num); 



// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(6, 3));
// console.log(calc(50, 3));


// const logger = function () {
// 	console.log("Hello");
// };
// logger();

// const calci = (a, b) => a + b;
// const calcim = (a, b) => { return a + b };  


// const arr = [1, 2, 4];
// console.log(arr.length);


// const str = 'test'
// console.log(str.length);


// const stv = 'test'
// console.log(stv[2]);  

// const str = 'test'
// console.log(str.toUpperCase());
// console.log(str);


// const logg = "Hello world";
// console.log(logg.slice(6, 11)); 

