"use strict";

function _templateObject() {
  const data = _taggedTemplateLiteral(["Hello, ", " ", "! What do you?"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings
 * 
 * Шаблонные строки и теги (template strings)
 * Шаблонными литералами называются строковые литералы, допускающие использование выражений внутри.
 * С ними вы можете использовать многострочные литералы и строковую интерполяцию. В спецификациях
 * до ES2015 они назывались "шаблонными строками". 
 */
//Шаблонные строки оборачиваются в обратные ковычки ``
let world = 'World!';
let guis = 'Guis!';
let template = "Hello ".concat(world, " ").concat(guis);
console.log(template); //Шаблонные теги - это функции для обработки входных строк

let toTransform = (literals, name, surname) => {
  //name и surname прописываются в соответстивии с параметрами в ${}. Их может быть сколь угодно
  //console.log(literals);//["Hello, ", " ", "! What do you?"]
  return literals[0] + name.toUpperCase() + ' ' + surname.toLowerCase();
};

let name = 'John',
    surname = 'Doe';
let text = toTransform(_templateObject(), name, surname);
console.log(text);