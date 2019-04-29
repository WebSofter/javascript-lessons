//Шаблонные строки оборачиваются в обратные ковычки ``
let world = 'World!';
let guis = 'Guis!';
let template = `Hello ${world} ${guis}`;
console.log(template);

//Шаблонные теги - это функции для обработки входных строк
let toTransform = (literals, name, surname)=>{
    //name и surname прописываются в соответстивии с параметрами в ${}. Их может быть сколь угодно
    //console.log(literals);//["Hello, ", " ", "! What do you?"]
    return literals[0] + name.toUpperCase() + ' ' + surname.toLowerCase();
}
let name = 'John', surname = 'Doe';
let text = toTransform`Hello, ${name} ${surname}! What do you?`;
console.log(text);