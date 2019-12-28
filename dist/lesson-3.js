"use strict";

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * 
 * Оператор разворота (spread operator)
 * 
 * Spread syntax позволяет повторить итерацию, такую как выражение массива или
 * строк, в местах, где ожидается ноль или больше аргументов (для вызовов
 * функций) или элементы (для литералов массива), или выражение объекта, которое
 * должно быть расширено в местах, где пары ключ-значение ноль или больше (для
 * объектных литералов).
 */
//Пример приема из функции
let person1 = function person1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  console.log(args);
};

person1("Имя", "Фамилия"); //Пример передачив  функцию

let person2 = (x, y, z, v) => {
  console.log(x + y + z + v);
};

let args = [1, 2, 3];
person2(...args, 1); //Пример соединения двух массивов

let arr1 = ['Mercedes', 'Audi', 'BMW'];
let arr2 = ['Toyota', 'Lexus', 'Nissan'];
let arr3 = [...arr1, ...arr2];
console.log(arr3); //То же самое старым способом через concat

let arr4 = arr1.concat(arr1, arr2);
console.log(arr4); //Пример соединения двух объектов

let obj1 = {
  type: 'Mercedes',
  country: 'Germany'
};
let obj2 = {
  speed: '200 m/h',
  weight: '500pound'
};

let obj3 = _objectSpread({}, obj1, obj2);

console.log(obj3); //То же самое старым способом

let obj4 = Object.assign(obj1, obj2);
console.log(obj4);