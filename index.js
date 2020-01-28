
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

let add = function(a) {
    a = prompt('Введите произвольную строку(предложение)');
    if (typeof a !== 'string') {
        return 'Вы ввели не строку!';
    } else if (a.length > 30) {
        return a.trim().substr(0,[29]) + '...';
    } 
};
console.log(add());