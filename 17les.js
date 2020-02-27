window.addEventListener('DOMContentLoaded', function() {
    let a = document.getElementById('1'),
    b = document.getElementById('2'),
    c = document.getElementById('3'),
    d = document.getElementById('4');
    let time = new Date();
    let hours = time.getHours();
    // Приветствие
    if (hours > 0 && hours < 6) {
        a.textContent = "Добрая ночь!";
    } else if (hours >=6 && hours <= 11) {
        a.textContent = "Доброе утро!";
    } else if (hours >11 && hours <= 18) {
        a.textContent = "Добрый день!";
    } else if(hours > 18) {
        a.textContent = "Добрый вечер!";
    }
    // День недели
    let dW = time.getDay();
    let dayZ = function(time) {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[dW];
    };

    b.textContent = 'Сегодня: ' + dayZ();
    // Текущее время
    let currentTime = function() {
        time = new Date();
        c.textContent = 'Текущее время: ' + time.getHours() + ' : ' + time.getMinutes() + ' : ' + time.getSeconds() + ' PM';
        setInterval(currentTime, 1000);
    };
    currentTime();
    // До нового года 
    let today = new Date().getTime();
    let NYDay = new Date('31 december 2020').getTime();
    let dayNumber = Math.floor((NYDay - today)/1000/60/60/24);
    d.textContent = 'До Нового года осталось ' + dayNumber + ' дней';

    
});



