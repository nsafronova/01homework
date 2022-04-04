'use strict';

const appData = {

  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: true,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service1: '',
  service2: '',
  rollback: 25,
  start: () => {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();

  },
  asking: () => {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор Верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
    }
    while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  isNumber: (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num); //лучшая проверка на число 
  },

  getAllServicePrices: () => {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let servicePrice = 0;

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      do {
        servicePrice = prompt('Сколько это будет стоить?');
      }
      while (!appData.isNumber(servicePrice)); {

        sum += +servicePrice;
      }
    }
    return sum;
  },

  getFullPrice: () => {
    return appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: () => {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },

  getTitle: () => {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
  },

  getRollbackMessage: () => {
    if (appData.fullPrice >= 30000) {
      return 'Даем скидку в 10%';
    } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000) {
      return 'Даем скидку в 5%';
    } else if (appData.fullPrice >= 0 && appData.fullPrice < 15000) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что то пошло не так';
    }
  },

  logger: () => {
    for (let key in appData) {
      console.log('Ключ: ' + key + ' ' + 'Значение:' + appData[key]);
    }

    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
  },
};

appData.start();


//мусорный блок



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

// let array = ['Apple', 'Orange', 'Banana'];

// array.push('Kiwi'); //добавляет в самый конец
// array.unshift('Papaya', 'Mango'); //добавляет в самое начало
//просто меняют исходный массив


// array.pop(); //удаляет с конца
// array.shift(); //удаляет с начала
//просто меняют исходный массив и возвращают элемент, который забирают

// array.sort() //по алфавиту 
// array.reverse() //разворачивает массив

// array.join(\n) // превращает массив в строку, в сколбках можно указать, чем элементы будут разделены
//только возвращают

// for ()

// const obj = {
//   name: 'Alex',
//   age: 33,
//   isStudent: false,
// }

// for (let key in obj) {
//   console.log('Ключ: ' + key + ' ' + 'Значение:' + obj[key])
// }