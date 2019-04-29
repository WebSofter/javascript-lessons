"use strict";

//Обычная передача в функцию параметров
let getSum = (x, y, z) => {
  return x + y + z;
};

console.log(getSum(1, 2, 3)); //Передача через spread оператор

let getSumSpread = function getSumSpread() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  //values - обычный массив с параметрами, которые вводятся при использовании
  console.log(values.reduce(function (lastValue, currentValue) {
    return lastValue + currentValue;
  }));
};

getSumSpread(1, 2, 3, 6); //Передача с параметрами по умолчанию и через spread

let greteeng = function greteeng() {
  let hello = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "By ";

  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  let text = values.reduce(function (lastValue, currentValue) {
    return lastValue + currentValue;
  });
  console.log(hello + text);
};

greteeng("Hello ", "World!", "Are ", "you ", "happy?");