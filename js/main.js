/*
 * Операція spread замість concat і slice
 */

//* Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const anotherNumbers = [...numbers];

// console.log('numbers: ', numbers);
// console.log('anotherNumbers: ', anotherNumbers);

// anotherNumbers.push(10);

// console.log('numbers: ', numbers);
// console.log('anotherNumbers: ', anotherNumbers);

//* Об'єднання масивів
// const firstArr = [1, 2, 3];
// const secondArr = [10, 11, 12];
// const totalArr = [-1, 0, ...firstArr, ...secondArr];

// console.log('firstArr: ', firstArr);
// console.log('secondArr: ', secondArr);
// console.log('totalArr: ', totalArr);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(Math.max(...numbers));

/*
 * Операція spread замість Object.assign({}, obj)
 */
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const anotherUser = {
//   ...user,
//   gender: 'male',
//   firstName: 'Oleksii',
// };

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.age = 40;

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };
// const anotherUser = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.age = 40;

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.someArr.push(10);

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

/*
 * Операція rest
 */
//? Напишіть функцію sum, яка складає довільну кількість аргументів
// const sum = function (...args) {
//   console.log(args);
//// const args = Array.from(arguments)
//   let total = 0;

//   for (const number of args) {
//     total += number;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
