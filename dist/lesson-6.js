"use strict";

let browsers = ['Chrome', 'Firefox', 'Edge', 'Opera']; //Старый способ итерации с for...in

for (let index in browsers) {
  console.log(browsers[index]);
} //То же самое способом forEach


browsers.forEach((value, index, array) => {
  console.log(value);
}); //То же самое новым способом for...of

for (let browser of browsers) {
  console.log(browser);
}