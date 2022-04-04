'use strict';
// //блок объявления переменных
// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let fullPrice;
// let servicePercentPrice;
// let allServicePrices;
// let service1;
// let service2;
// let servicePrice;
// let rollback = 25;

// //блок описания функций

// const isNumber = (num) => {
//   return !isNaN(parseFloat(num)) && isFinite(num); //лучшая проверка на число 
// };

// const asking = () => {
//   title = prompt('Как называется ваш проект?', 'Калькулятор Верстки');
//   screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
//   adaptive = confirm('Нужен ли адаптив на сайте?');
// };

// const getScreenPrice = () => {
//   do {
//     screenPrice = +prompt('Сколько будет стоить данная работа?');
//   } while (!isNumber(screenPrice)); {
//     return;
//   }
// };

// const getAllServicePrices = () => {
//   let sum = 0;

//   for (let i = 0; i < 2; i++) {

//     if (i === 0) {
//       service1 = prompt('Какой дополнительный тип услуги нужен?');
//     } else if (i === 1) {
//       service2 = prompt('Какой дополнительный тип услуги нужен?');
//     }

//     do {
//       servicePrice = prompt('Сколько это будет стоить?');
//     } while (!isNumber(servicePrice)); {

//       sum += Number(servicePrice);

//     }

//   }
//   return sum;
// };


// const showTypeOf = (variable) => {
//   console.log(variable, typeof variable);
// };

// function getFullPrice() {
//   return screenPrice + allServicePrices;
// }

// const getServicePercentPrices = () => {
//   return fullPrice - (fullPrice * (rollback / 100));
// };

// const getTittle = () => {
//   return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
// };

// //функциональный блок

// const getRollbackMessage = () => {
//   if (fullPrice >= 30000) {
//     return 'Даем скидку в 10%';
//   } else if (fullPrice >= 15000 && fullPrice < 30000) {
//     return 'Даем скидку в 5%';
//   } else if (fullPrice >= 0 && fullPrice < 15000) {
//     return 'Скидка не предусмотрена';
//   } else {
//     return 'Что то пошло не так';
//   }
// };

// //мусорный блок
// asking();
// getScreenPrice();
// allServicePrices = getAllServicePrices();
// fullPrice = getFullPrice();
// servicePercentPrice = getServicePercentPrices();
// title = getTitle();

// showTypeOf(title);
// showTypeOf(screenPrice);
// showTypeOf(adaptive);

// console.log('screenPrice', screenPrice);
// console.log('allServicePrices', allServicePrices);
// console.log(getRollbackMessage(fullPrice));
// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log(servicePercentPrice);
// console.log('Стоимость верстки экранов ' + screenPrice + ' рублей\nСтоимость разработки сайта ' + fullPrice + ' рублей');


// let key = 'city';
// let city = 'Amsterdam';

// let person = {
//   key: city,
//   name: 'Alex',
//   age: 33,
//   job: {
//     position: 'middle-developer',
//     salary: '1.000.000',
//     workplace: 'Netherlands'
//   },
//   say: (str) => {
//     console.log(str);
//   }
// };

// person.say('Hello world');

// console.log(person);

let array = [1, 2, 3, 4, 5];

array.length = 0; //очистка массива

console.log(array);