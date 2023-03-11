/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колбек-функції
// });

//? Помножте всі числа на 2
// const numbers = [1, 2, 3, 4, 5];
// Повна версія
// const doubleNumbers = numbers.map((el, idx, arr) => {
//   return el * 2;
// });
// Скорочена версія
// // const doubleNumbers = numbers.map(el => el * 2);

// console.log('numbers: ', numbers);
// console.log('doubleNumbers: ', doubleNumbers);

/*
? Перепишіть цикл через map
? Код нижче отримує з масиву рядків новий масив, що містить їх довжини:
*/
// const wordsArr = ['Есть', 'жизнь', 'на', 'Марсе'];

// const getElementsLength = words => {
//   // const wordsLengthArr = [];

//   // for (const word of words) {
//   //   wordsLengthArr.push(word.length);
//   // }

//   // return wordsLengthArr;

//   return words.map(el => el.length);
// };

// console.log(getElementsLength(wordsArr)); // [4, 5, 2, 5]

/*
? Створіть масив значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// const fahrenheits = celsius.map(el => el * 1.8 + 32);

// console.log('celsius: ', celsius);
// console.log('fahrenheits: ', fahrenheits);

/*
? Нехай функція getModels повертає масив моделей (властивість model) всіх автомобілів.
*/
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
// Повна версія функції getModels
// const getModels = allCars => {
//   const models = allCars.map((el, idx, arr) => {
//     return el.model;
//   });

//   return models;
// };

// Скорочена версія функції getModels
// const getModels = allCars => allCars.map(el => el.model);

// console.log(getModels(cars));

/*
? Нехай функція makeCarsWithDiscount(cars, discount) повертає новий масив об'єктів із зміненим значенням властивості price
? залежно від переданої знижки.
*/
// const makeCarsWithDiscount = (allCars, discount) => {
//   return allCars.map(el => {
//     const car = { ...el };

//     car.price = car.price - car.price * discount;

//     return car;
//   });
// };

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.5));
