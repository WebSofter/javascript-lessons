"use strict";

let firstName = "Bill";
let lastName = "Gates";
let email = "billgates@microsoft.com"; //Объявление объекта в ES5

var personEs5 = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  _age: 40 + " years!",
  getFullName: function getFullName() {
    return this.firstName + " " + this.lastName;
  } //Вариант создания геттеров и исеттеров работает в ES5/ES6

};
Object.defineProperty(personEs5, 'age', {
  set: function set(value) {
    this._age = value + " years setted!";
  },
  get: function get() {
    return this._age + " years getted!";
  }
});
console.log(personEs5);
personEs5.age = 50;
console.log(personEs5);
console.log(personEs5.age); //Объявление объекта в ES6

let personEs6 = {
  firstName,
  lastName,
  email,
  _age: 70 + " year!",

  getFullName() {
    return this.firstName + " " + this.lastName;
  },

  get age() {
    return this._age + " year getted!";
  },

  set age(value) {
    this._age = value + " year setted!";
  }

};
console.log(personEs6);
personEs6.age = 80;
console.log(personEs6);
console.log(personEs6.age); //Доступ(чтение и запист) к свойствам объекта, а также создание можно сделать по следующей схеме

console.log(personEs6['firstName']);
console.log(personEs6['lastName']);
console.log(personEs6['email']);
console.log(personEs6['age']);
personEs6['newProperty'] = 'Prperty Value';
console.log(personEs6); //Из этого следует, что мы можем создать динамический объект с динамическими свойствами и методами

let createPerson = (name, value) => {
  return {
    [name]: value,

    ['get' + name]() {
      return this[name];
    }

  };
};

console.log(createPerson('Name', 'Bill').getName());