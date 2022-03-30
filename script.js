'use strict';
//блок объявления переменных
let rollback = 25;
let fullPrice = 400;

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let rollbackPrecent = (fullPrice * (rollback / 100));

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let servicePercentPrice = +Math.ceil(fullPrice - rollbackPrecent);

let allServicePrices;

//блок описания функций

let getAllServicePrices = function (servicePrice1, servicePrice2) {

  allServicePrices = servicePrice1 + servicePrice2;
  console.log(allServicePrices);
};


function getFullPrice(screenPrice, allServicePrices) {
  fullPrice = screenPrice + allServicePrices;
  console.log(fullPrice);
}



function getTitle(title) {

  title = title.trim().toLowerCase();
  return title[0].toUpperCase();
}

//функциональный блок

function getRollbackMessage() {
  if (fullPrice >= 30000) {
    console.log('Даем скидку в 10%');
  } else if (fullPrice >= 15000) {
    console.log('Даем скидку в 5%');
  } else if (fullPrice >= 0) {
    console.log('Скидка не предусмотрена');
  } else {
    console.log('Что то пошло не так');
  }
}

let getServicePercentPrices = function (fullPrice, rollback) {
  servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
  console.log(servicePercentPrice);
};

//мусорный блок

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.toLowerCase().split(', '));
console.log(getTitle(title));

getRollbackMessage();
getServicePercentPrices(fullPrice, rollback);