/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/
// const numA = 18;
// const numB = 4;

// const sum = numA + numB;
// console.log('numA + numB: ', sum);

// const division = numA / numB;
// console.log('numA / numB: ', division);

// const multiply = numA * numB;
// console.log('numA * numB: ', multiply);

// const subtraction = numA - numB;
// console.log('numA - numB: ', subtraction);

// const result = numA % numB;
// console.log('numA % numB: ', result);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;
// console.log('numA = 15: ', numA % 2);

// const numB = 20;
// console.log('numB = 20: ', numB % 2);

// const numC = 45;
// console.log('numC = 45: ', numC % 2);

// const numD = 30;
// console.log('numD = 30: ', numD % 2);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log('hours: ', hours);
// console.log('minutes: ', minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/

// let num = prompt('Введіть якесь число');
// num = Number(num);

// console.log(typeof num);
// console.log(num);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';
// const num = Number.parseInt(str);

// console.log(num);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';
// const num = Number.parseFloat(str);

// console.log(num);

//? Спробуйте призвести до числа, строку 'abc'.
// const str = 'abc';
// const num = Number(str);

// console.log(num);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number(prompt('Введіть перше число'));
// const numB = Number(prompt('Введіть друге число'));
// const sum = numA + numB;

// console.log(sum);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = 23.3;
// const result = Math.round(number);

// console.log(result);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = Number(prompt('Введіть якесь число'));
// const pow = Number(prompt('Введіть ступінь'));

// const result = Math.pow(num, pow);

// const result = num ** pow;

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;
*/

// const randomNum = Math.round(Math.random() * 10);

// console.log(randomNum);

//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача
// const min = Number(prompt('Введіть мінімальне число діапазону'));
// const max = Number(prompt('Введіть максимальне число діапазону'));

// const randomNum = Math.round(min +  Math.random() * (max - min));

// 1 - 1...1.49999
// 2 - 1.5...2.49999
// 3 - 2.5...2.999999

// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));

// console.log(randomNum);

const generateRandomNumbure = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
};

let count1 = 0;
let count2 = 0;
let count3 = 0;

for (let i = 0; i < 100; i += 1) {
  const randomNumber = generateRandomNumbure(1, 3);

  switch (randomNumber) {
    case 1: {
      count1 += 1;
      break;
    }

    case 2: {
      count2 += 1;
      break;
    }

    case 3: {
      count3 += 1;
      break;
    }
  }
}

console.log(`1: ${count1}`);
console.log(`2: ${count2}`);
console.log(`3: ${count3}`);
