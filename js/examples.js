/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує
? і повертає загальну вартість каменів з таким ім'ям.
*/
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const findedStone = this.stones.find(stone => stone.name === stoneName);

//     if (findedStone === undefined) {
//       return 'Такого каменя не знайдено';
//     }

//     return findedStone.price * findedStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Sdfd')); // Такого каменя не знайдено

/*
? Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
*/
// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// console.log(phonebook.contacts);

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.contacts);

/*
? Створіть об'єкт calculator із трьома методами:
?
? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
? add() - повертає суму збережених значень.
? mult() - перемножує збережені значення та повертає результат.
*/

// const calculator = {
//   read(a, b) {
//     this.firstNum = a;
//     this.secondNum = b;
//   },

//   add() {
//     return this.firstNum + this.secondNum;
//   },

//   mult() {
//     return this.firstNum * this.secondNum;
//   },
// };

// console.log(calculator);

// calculator.read(10, 20);

// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// calculator.read(40, 30);

// console.log(calculator);

// console.log(calculator.add());
