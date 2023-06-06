'use strict';

/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Привіт ім'я_користувача, ваш вік вік_користувача.
*/
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const result = 'Привіт ' + userFirstName + ',' + ' ваш вік ' + userAge + '.';

// console.log(result);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const result = `Привіт ${userFirstName}, ваш вік ${userAge}.`;

// console.log(result);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userFirstName = prompt('Ваше ім`я');
// const lengthOfUserName = userFirstName.length;

// console.log(userFirstName);
// console.log(lengthOfUserName);

//? Попросіть користувача ввести email і переведіть у нижній регістр.
// const userEmail = prompt('Ваш email');
// const normalizeUserEmail = userEmail.toLowerCase();

// console.log(normalizeUserEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр
// const userEmail = prompt('Ваш email');
// const normalizeUserEmail = userEmail.toUpperCase();

// console.log(normalizeUserEmail);

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/
// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// const isJavascriptInStr = languages.includes('JavaScript');
// const isJsInStr = languages.includes('JS');
// const idxOfJsInStr = languages.indexOf('JS');

// console.log('index of js: ', idxOfJsInStr);

// console.log('test JavaScript: ', isJavascriptInStr);
// console.log('test JS: ', isJsInStr);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
// const str = '24px';

// console.log(str.startsWith('24'));

//? У нас є рядок '23,4', замініть кому на крапку
// const num = prompt('Введіть якесь число');
// const replacedComma = Number.parseFloat(num.replace(',', '.'));

// console.log(replacedComma);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const replacedStr = str.replaceAll('dog', 'monkey');

// console.log(replacedStr);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const someDate = '12:05:21';
// const currentDate = someDate.replaceAll(':', '.');

// console.log(currentDate);

/*
  ? Дано рядок 'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем.
*/
// const userName = prompt('Ваше ім`я');
// const someStr = `${userName} is 24 years old`;

// console.log(someStr);

// const userFullName = someStr.slice()
