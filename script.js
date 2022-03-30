'use strict';
//блок объявления переменных
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice;
let servicePercentPrice;
let allServicePrices;
let rollback = 25;

//блок описания функций

let getAllServicePrices = function () {
  if (typeof servicePrice1 !== 'number') {
    alert('Неверный тип данных!');
  } else if (typeof servicePrice2 !== 'number') {
    alert('Неверный тип данных!');
  } else {
    return servicePrice1 + servicePrice2;
  }
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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей\nСтоимость разработки сайта ' + fullPrice + ' рублей');