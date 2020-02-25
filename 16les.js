class First {
    hello() {
        console.log('Привет! Я метод родителя!');
    }
}
class Second extends First {
    hello() {
        super.hello();
        console.log('A я внутренний метод Second');
    }
}
let second = new Second();

second.hello();