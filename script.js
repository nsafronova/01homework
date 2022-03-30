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
  return servicePrice1 + servicePrice2;

};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);


function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

fullPrice = getFullPrice(screenPrice, allServicePrices);


function getTitle(title) {

  title = title.trim();
  return title[0].toUpperCase() + title.toLowerCase();
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
  return fullPrice - (fullPrice * (rollback / 100));
  // console.log(servicePercentPrice);
};

servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

//мусорный блок

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
// console.log(screens.length);
// console.log(`Стоимость верстки экранов ${screenPrice} долларов\nСтоимость разработки сайта ${fullPrice} долларов`);
console.log(screens.toLowerCase().split(', '));
// console.log(`Процент отката посреднику за работу ${rollbackPrecent} долларов`);
// console.log(servicePercentPrice);
// getAllServicePrices(servicePrice1, servicePrice2);
// getFullPrice(screenPrice, allServicePrices);
console.log(allServicePrices);
console.log(fullPrice);
console.log(getTitle(title));
// getServicePercentPrices();
getRollbackMessage();
console.log(servicePercentPrice);