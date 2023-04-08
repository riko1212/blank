/*
 * Синхронний vs Асинхронний JS
 */
// setTimeout(() => {
//   console.log('SetTimeout');
// }, 1000);

// console.log('Start');

// const fn = function () {
//   console.log('Hi!');
// };

// fn();

// for (let i = 0; i < 1000; i += 1) {
//   console.log(i);
// }

// console.log('End');

// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)
//
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)

// const timeoutId = setTimeout(() => {
//   alert('Hello!');
// }, 1000);

// console.log(timeoutId);

// clearTimeout(timeoutId);

// let i = 0;

// const intervalId = setInterval(() => {
//   i += 1;

//   console.log(i);
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);
