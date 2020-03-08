// 'use strict';
// let lang = confirm('Вы говорите на русском языке?');
// console.log(lang);
// if (lang == true) {
//     console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
// } else if (lang == false) {
//     console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
// };

// switch (lang) {
//     case true: console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
//     break;
//     default: console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
// }

// var lang_array = [];
// lang_array['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
// lang_array['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// var lang1 = 'ru';
// console.log(lang_array[lang1]);

// let namePerson = prompt('Введите ваше имя');

// let message = (namePerson == 'Артем') ? 'Директор':
//     (namePerson == 'Максим') ? 'Преподаватель' :
//     'Студент';
// console.log(message);

// let add = function(a) {
//     a = prompt('Введите произвольную строку(предложение)');
//     if (typeof a !== 'string') {
//         return 'Вы ввели не строку!';
//     } else if (a.length > 30) {
//         return a.trim().substr(0,[29]) + '...';
//     } 
// };
// console.log(add());

// let n = 0;

// while(n < 5) {
//     console.log(n);
//     n++;
// }

// do {
//     console.log(n);
//     n++;
// } while(n < 5);

// for(let i = 0; i < 5; i++) {
// if(i === 3) {
//     continue;
//     }
//     console.log(i);
// }

// let arr = ['2387876', '3443422', '5354646', '43222', '134242', '756454', '987877'];

// arr.forEach((item) => {
//     if (item.startsWith('2') || item.startsWith('4')) {
//       console.log(item);
//     }
//   });

//   let n = 100;

//   loop:
//   for (let i = 2; i <= n; i++) { // Для всех i...
  
//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//       if (i % j == 0) continue loop; // не подходит, берём следующее
//     }
  
//     console.log( i ) // простое число
//   };

// function funcMath(a) {
//   return function() {
//     console.log(a * a);
//   }
// }

// const mathPow = funcMath(5);
// mathPow();

// let gg = function(){
//   let a = (Math.round(Math.random(1, 100)*100, 0)).toString();
//   console.log(typeof a);
//   console.log(a);
//   let b = +a;
//   console.log(b);
//   let c = 0;
//   let game = function() {
//     let count = function() {
//       c++;
//       let f = 10 - c;
//       if(f === -1) {
//         let oneMore = function () {
//           let d = confirm('Попытки закончились! Хотите сыграть еще?');
//           if(d === true) {
//             gg();
//           } else {
//             alert('Спасибо за игру! Приходите еще! В следующий раз обязательно повезет!');
//           }
//         }
//         oneMore();
//       }
//       console.log(f);
//       console.log(typeof f);
//       return f;
//     };

//     let countNumber = +count();

//     let quest = prompt('Угадай число от 1 до 100');
//       console.log(quest);
//       if (quest > b) {
//       alert('Заданное число меньше. У вас осталось ' + countNumber + ' попыток!');
//       return game();
//     } else if (+quest === +0) {
//       alert('Игра закончена');
//       let oneMore = function () {
//         let d = confirm('Сыграем еще?');
//         if(d === true) {
//           gg();
//         } else {
//           alert('Спасибо за игру! Приходите еще! В следующий раз обязательно повезет!');
//         }
//       }
//       oneMore();
//     } else if (quest < b && quest > 0) {
//       alert('Загаданное число больше! У вас осталось ' + countNumber + ' попыток!');
//       return game();
//     } else if (isNaN(quest)) {
//       alert('Введите число');
//       return game();
//     }  else if (quest == b ) {
//       alert('Вы угадали! Поздравляем с победой! Вы заработали 100 очков!');
//       let oneMore = function () {
//         let d = confirm('Сыграем еще?');
//         if(d === true) {
//           gg();
//         } else {
//           alert('Спасибо за игру! Приходите еще! У вас уникальная интуиция!');
//         }
//       }
//       oneMore();
//     }
//   };

//   game();
// }
// gg();

// let car = {
//   model: 'mazda',
//   year: 2006,
//   turbocharging: true,
//   specification: [],
//   style: {
//     color: 'blue'
//   }
// };

// for(let key in car) {
//   console.log('Ключ: ' + key + ', Значение: ' + car[key]);
// }

// console.log(Object.keys(car).length);


// let arr = [1, 45, 3, 65, 5];

// for(let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }

// arr.forEach(function(item, i, array) {
//   console.log(item, i, array);
// })

// for(let item of arr) {
//   console.log(item);
// }

// delete arr[3];
// console.log('arr: ', arr[3]);
// console.log(arr);

// let obj = {
//   a: 3,
//   b: true,
//   c: 'js'
// };

// delete obj.b;
// console.log(obj);


// let week = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"];

// for (let item of week) {
//   console.log(item);
//   if (item === "вторник") {
//     console.log('<b>'+ item + '</b>');
//   }
// }

// setInterval(function() {
//   let date = new Date(),
//       h = date.getHours(),
//       m = date.getMinutes(),
//       s = date.getSeconds(),
//       y = date.getFullYear() + ' года',
//       mh = date.getMonth(),
//       d = date.getDate(),
//       day = date.getDay();
//       d = (+mh === 0) ? ' ' + d + ' января ': (+mh === 1) ? ' ' +  d + ' февраля ' : (+mh === 2) ?
//         d + ' марта ': (+mh === 3) ? ' апреля ' : (+mh === 4) ? 'мая': (+mh === 5) ? 'июня' :
//         (+mh === 6) ? 'июля' : (+mh === 7) ? 'августа' : (+mh === 8) ? 'сентября' : (+mh === 9) ?
//         'октября' : (+mh === 10) ? 'ноября' : 'декабря';
//       day = (+day === 1) ? ' Понедельник': (+day === 2) ? ' вторник' : (+day === 3) ? ' среда' :
//         (+day === 4) ? ' четверг' :
//         (+day ===5) ? ' пятница' : (+day === 6) ? ' суббота' : ' воскресенье';
//       h = (+h === 1 || +h === 21) ? ' ' + h + ' час ' : (+h === 2 || +h ===3 || +h === 4 ||
//         +h === 22 || +h === 23) ? ' ' + h + ' часа ' : ' ' + h + ' часов ';
//       m = m + ' минут ';
//       s = s + ' секунд';
//       document.querySelector('.firstDate').innerHTML = 'Сегодня' + day + ',' + d + y + ',' + h + m + s; 
// }, 1000);

// setInterval(function() {
//   let date = new Date(),
//       h = date.getHours(),
//       m = date.getMinutes(),
//       s = date.getSeconds(),
//       y = date.getFullYear(),
//       mh = date.getMonth(),
//       d = date.getDate(),
//       day = date.getDay();
//       d = (d < 10) ? '0' + d : d;
//       mh = ++mh;
//       mh = (mh < 10) ? '0' + mh : mh;
//       document.querySelector('.secondDate').innerHTML = d + '.' + mh + '.' + y + ' - ' + h + ':' + m + '.' + s + '`'; 
// }, 1000);



// function randColor() {
//   let r = Math.floor(Math.random() * (256)),
//       g = Math.floor(Math.random() * (256)),
//       b = Math.floor(Math.random() * (256));
//   return '#' + r.toString(16) + g.toString(16) + b.toString(16);
// }

// let el = document.querySelector(".myElem");
// let b = randColor();
// el.style.backgroundColor = b;
// let button = document.querySelector('.changeColor');

// button.addEventListener('click', function() {
//   b = randColor();
//   el.style.backgroundColor = b;
// });

// let allImg = document.querySelectorAll('img');

// let newImg = [...allImg];



// let button = document.querySelector('.changeColor');

//   button.addEventListener('mouseover', () => {
//     for(let i = 0; i < allImg.length; i++) {
//       let num = (Math.random()*300 + 'px');
//       allImg[i].style.width = num;
//       console.log(allImg[i]);
//     }
//   });
  
// const transport = {
//   bike: 'honda',
//   car: 'bentley',
//   cycle: 'bmx'
// };

// const newTransport = {
//   bike: 'suzuki',
//   quadBike: 'polaris'
// };

// const currentTransport = Object.assign({},transport, newTransport);

// const curTrans = {...transport, ...newTransport, ...newTransport};
// console.log(curTrans);

// Мапы
// const map = new Map([
//   [2019, 'autumn'],
//   ['joker', 1]
// ]);
// map.set('car', {brand: 'mazda', model: 3});
// map.set(777, 'три топора');
// map.set(null, 'даже так');
// map.set(NaN, 'Ух ты!');
// map.set(undefined, 'Неожиданно!');

// const obj = {
//   name: 'Макс',
//   age: 30
// };

// map.set(obj, 123);

// const func = () => {
//   console.log('Hello!')
// };
// map.set(func, 'Hello')
// console.log(map.has(NaN));
// console.log(map);

// const collectMap = new Map([
// ['hello', 'world'],
// ['year', 1812]
// ]);

// collectMap.delete('year');

// map.forEach((value, key) => {
//   console.log(`ключ: ${key}, значение: ${value}`);
// })

// Сэты
// const cars = new Set(['Mazda', 'Volvo', 'BMW', 'bmw']);
// const newCars = new Set(['Mazda1', 'Volvo2', 'BMW3', 'bmw4']);
// const carsAll = new Set([...cars, ...newCars]);
// console.log([carsAll]);

// 7й урок усложненное задание
let arr = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();
let body = document.querySelector('body');
console.log(date);
console.log(date.getDay());
for(let i=0; i < arr.length; i++) {
    let p = document.createElement('p');
    p.textContent = arr[i];
    body.appendChild(p);
    if (i === 0 || i === 6) {
        p.style.fontStyle = 'italic';
    }
    if (date.getDay() === i) {
        p.style.fontWeight = '900';
    }
}


    
