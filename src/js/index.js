// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// console.log('Start');

// setTimeout(() => {
//   console.log('SetTimeout');
// }, 0);

// // const promise = new Promise((resolve, reject) => {
// //   console.log('In constructor Promise');
// //   resolve('in then');
// // });

// const promise = new Promise((resolve, reject) => {
//   console.log('In constructor Promise');

//   setTimeout(() => {
//     resolve('in then');
//   }, 1000);
// });

// promise.then(response => {
//   console.log(response);
// });

// console.log('End');

const counterEl = document.querySelector('.js-counter');

// for (let i = 0; i <= 1000; i += 1) {
//   counterEl.innerHTML = i;
// }

let i = 0;

const count = () => {
  i += 10;

  counterEl.innerHTML = i;

  if (i !== 1000) {
    setTimeout(() => {
      count();
    }, 0);
  }
};

count();
