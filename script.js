'use strict';
//блок объявления переменных
let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;
let servicePrice;
let rollback = 25;

//блок описания функций

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num); //лучшая проверка на число 
};

const asking = function () {
  title = prompt('Как называется ваш проект?', 'Калькулятор Верстки');
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getScreenPrice = function () {
  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice)); {
    return;
  }
};


// const getSumAllServicePrices = function () {
//   do {
//     sum += +prompt('Сколько это будет стоить?');
//   } while (!isNumber(sum));{
//     return;
//   }
// }

let getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    do {
      servicePrice = prompt('Сколько это будет стоить?');
    } while (!isNumber(servicePrice)); {

      sum += Number(servicePrice);

    }

  }
  return sum;
};


const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

let getServicePercentPrices = function () {
  return fullPrice - (fullPrice * (rollback / 100));
};

function getTitle() {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

//функциональный блок

function getRollbackMessage() {
  if (fullPrice >= 30000) {
    return 'Даем скидку в 10%';
  } else if (fullPrice >= 15000 && fullPrice < 30000) {
    return 'Даем скидку в 5%';
  } else if (fullPrice >= 0 && fullPrice < 15000) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что то пошло не так';
  }
}

//мусорный блок
asking();
getScreenPrice();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);



console.log('screenPrice', screenPrice);
console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей\nСтоимость разработки сайта ' + fullPrice + ' рублей');