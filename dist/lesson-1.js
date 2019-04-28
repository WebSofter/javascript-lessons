"use strict";

var buttons = document.querySelectorAll("button"); //Использование var

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;

  button.onclick = function (e) {
    console.log(i);
  };
} //Использование let


for (let i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.innerText = i;

  button.onclick = function (e) {
    console.log(i);
  };
} //Пример области видимости var/let и всплытия(hoisting)


(() => {
  let name1 = "John 1"; //let всегда должен указывать переменную до использования

  console.log(name1 + "," + name2); //name2 будет undefined, потому что мы ниже ее определили через var

  var name2 = "John 2";
})();

helloWorld3();
/*var*/

let helloWorld1 = () => console.log("Hello World 1!"); //Так функция инициализируется только для использования после определения


var helloWorld2 = function helloWorld2() {
  console.log("Hello World 2!");
}; //Так параметр инициализирован до определения, но не как функция


function helloWorld3() {
  console.log("Hello World 3!");
}

; //Так функция доступна до определения

helloWorld1();
helloWorld2();