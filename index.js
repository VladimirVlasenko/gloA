
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

let arr = ['2387876', '3443422', '5354646', '43222', '134242', '756454', '987877'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
      console.log(item);
    }
  });

  let n = 100;

  loop:
  for (let i = 2; i <= n; i++) { // Для всех i...
  
    for (let j = 2; j < i; j++) { // проверить, делится ли число..
      if (i % j == 0) continue loop; // не подходит, берём следующее
    }
  
    console.log( i ) // простое число
  };