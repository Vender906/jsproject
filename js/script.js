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

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов', ''),
//         b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         } else {
//         console.log('error');
//         i--;
//         }
//     }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// console.log(personalMovieDB);


// function showMyDB(hidden) {
//     if (!hidden)
//         console.log(personalMovieDB);
    
    
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();

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

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	}
// };

// const { border, bg } = options.colors;
// console.log(border);

// for (let key in options) {	
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }


// const arr = [1, 2, 3, 6, 8];
// arr.push(10);
// console.log(arr);

// const arr = [1, 2, 3, 6, 8];     
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'));


// const arr = [145, 22, 3, 66, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// let a = 5;
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy; 
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// }

// console.log(Object.assign(numbers, add));


// const ddd = {
//     d: 3,
//     e: 20
// };

// const clone = Object.assign({}, ddd);

// clone.d = 20;

// console.log(ddd);
// console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'hhh';

console.log(oldArray);
console.log(newArray);


const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ["a", "b"];
const newAarray = [...array];


const q = {
    one: 1,
    two: 2
};

const newObj = { ...q };
console.log(newObj);


