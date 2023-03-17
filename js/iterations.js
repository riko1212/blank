/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// 1 Варіант через цикл for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const newSalaries = Object.create(salaries);
// newSalaries.Oleksii = 100;

// console.log('salaries: ', salaries);
// console.log('newSalaries: ', newSalaries);

// let total = 0;

// for (const salary in salaries) {
//   //   console.log(salary);
//   //   console.log(salaries[salary]);

//   if (salaries.hasOwnProperty(salary)) {
//     total += salaries[salary];
//   }
// }

// console.log(total);

// 2 Варіант Object.keys() + for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salariesKeys = Object.keys(salaries);
// let total = 0;

// for (const key of salariesKeys) {
//   //   console.log(key);
//   //   console.log(salaries[key]);

//   total += salaries[key];
// }

// console.log(total);

// 3 Варіант Object.values() + for...of
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salariesValues = Object.values(salaries);
let total = 0;

for (const salary of salariesValues) {
  total += salary;
}

console.log(total);
