let title = 'Second Homework';
console.log(typeof title);
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 300;
let rollback = 25;
let fullPrice = 4000;
console.log(typeof fullPrice);
let adaptive = true;
console.log(typeof adaptive);

console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} долларов\nСтоимость разработки сайта ${fullPrice} долларов`);

console.log(screens.toLowerCase().split(', '));
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback/100)} долларов`);