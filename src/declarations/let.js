/**
 * 1.1. Использование let и var
 * 
 * Отличие let от var: Переменная, объявленная через var,  
 * видна везде в функции. Переменная, объявленная через let,
 * видна только в рамках блока {...}, в котором объявлена. 
 * В новых версиях языка не рекомендуется использовать var.
 */


/**
 * Использование var
 * 
 * Оператор var объявляет глобальную переменную области
 * видимости в пределах всего скрипта использования, 
 * при инициализации внутри блока затрагивается
 * глобальное значение.
 */

var callbacks = []
for (var i = 0; i < 3; ++i) {
  callbacks[i] = function () {
    console.log(i)
  }
}
callbacks.forEach(function (cb) {
  cb()
})

/**
 * Использование let
 * 
 * Оператор let объявляет локальную переменную области
 * видимости в пределах блока использования, 
 * при инициализации внутри блока не затрагивается
 * глобальное значение.
 */


/**
 * 1.2. Всплытие(hoisting)
 * 
 * Всплытие - это когда объявление переменных и функций в исполняемом контексте
 * всплывает наверх контекста.
 */

//Пример области видимости var/let и всплытия(hoisting)
(()=>{
    let name1 = "John 1";//let всегда должен указывать переменную до использования
    console.log(name1 + "," + name2);//name2 будет undefined, потому что мы ниже ее определили через var
    var name2 = "John 2";
})()

helloWorld3();
/*var*/let helloWorld1 = ()=> console.log("Hello World 1!");//Так функция инициализируется только для использования после определения
var helloWorld2 = function(){console.log("Hello World 2!")};//Так параметр инициализирован до определения, но не как функция
function helloWorld3(){console.log("Hello World 3!")};//Так функция доступна до определения
helloWorld1();
helloWorld2();
