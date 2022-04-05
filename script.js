'use strict';

const appData = {

  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},
  rollback: 25,
  start: () => {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();

  },
  asking: () => {
    do {
      appData.title = prompt('Как называется ваш проект?', 'Калькулятор Верстки');
      console.log(typeof appData.title);
      console.log(appData.title);
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;
      do {
        name = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
      }
      while (appData.isNumber(name));
      do {
        price = +prompt('Сколько будет стоить данная работа?');
      }
      while (!appData.isNumber(price));

      appData.screens.push({
        id: i,
        name: name,
        price: price
      });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;
      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (appData.isNumber(name));

      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price));

      appData.services[name + [i]] = +price;
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  addPrices: () => {

    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price
    }, 0);

    // for (let screen of appData.screens) {
    //   appData.screenPrice += screen.price;
    // }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num); //лучшая проверка на число 
  },

  getFullPrice: () => {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: () => {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },

  getTitle: () => {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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
    // for (let key in appData) {
    //   console.log('Ключ: ' + key + ' ' + 'Значение:' + appData[key]);
    // }
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
    console.log(appData.services);
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