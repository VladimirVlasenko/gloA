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
let gg = function(){
  let a = (Math.round(Math.random(1, 100)*100, 0)).toString();
  console.log(typeof a);
  console.log(a);
  let b = +a;
  console.log(b);
  let c = 0;
  let game = function() {
    let count = function() {
      c++;
      let f = 10 - c;
      if(f === -1) {
        let oneMore = function () {
          let d = confirm('Попытки закончились! Хотите сыграть еще?');
          if(d === true) {
            gg();
          } else {
            alert('Спасибо за игру! Приходите еще! В следующий раз обязательно повезет!');
          }
        }
        oneMore();
      }
      console.log(f);
      console.log(typeof f);
      return f;
    };

    let countNumber = +count();

    let quest = prompt('Угадай число от 1 до 100');
      console.log(quest);
      if (quest > b) {
      alert('Заданное число меньше. У вас осталось ' + countNumber + ' попыток!');
      return game();
    } else if (+quest === +0) {
      alert('Игра закончена');
      let oneMore = function () {
        let d = confirm('Сыграем еще?');
        if(d === true) {
          gg();
        } else {
          alert('Спасибо за игру! Приходите еще! В следующий раз обязательно повезет!');
        }
      }
      oneMore();
    } else if (quest < b && quest > 0) {
      alert('Загаданное число больше! У вас осталось ' + countNumber + ' попыток!');
      return game();
    } else if (isNaN(quest)) {
      alert('Введите число');
      return game();
    }  else if (quest == b ) {
      alert('Вы угадали! Поздравляем с победой! Вы заработали 100 очков!');
      let oneMore = function () {
        let d = confirm('Сыграем еще?');
        if(d === true) {
          gg();
        } else {
          alert('Спасибо за игру! Приходите еще! У вас уникальная интуиция!');
        }
      }
      oneMore();
    }
  };

  game();
}
gg();
