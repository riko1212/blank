/*
 * async/await
 * асинхронная(async) функция ВСЕГДА возвращает промис.
 * await заставляет функцию ждать выполнения промиса.
 * await нельзя использовать вне асинхронных функций.
 * try/catch для отлова ошибок
 */

// const fn = async () => {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log('Fisrt');

// fn()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// console.log('Second');

//? TASK 01
// Перепиши на async/await
// const loadPosts = async url => {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   } catch (err) {
//     console.log(err);
//   }

//   // return fetch(url).then(response => {
//   //   if (!response.ok) {
//   //     throw new Error(response.status);
//   //   }

//   //   return response.json();
//   // });
// };

// loadPosts('https://jsonplaceholder.typicode.com/posts')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   // ...що тут написати?
//   // щоб викликати wait() і дочекатися результату "10" від async-функції
//   // не забувайте, тут не можна використовувати "await"
// }

// f();
