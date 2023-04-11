/*
 *  Метод sort()
 */

// const numbers = [3, 7, 2, 8, 1];
// const newNumbers = numbers.sort();

//? Сортування чисел та рядків за замовчуванням
// const numbers = [3, 7, 2, 8, 1, 45, 58];
// const newNumbers = [...numbers].sort();

// console.log('numbers: ', numbers);
// console.log('newNumbers: ', newNumbers);

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abc'];
// const newStrArr = [...strArr].sort();

// console.log('strArr: ', strArr);
// console.log('newStrArr: ', newStrArr);

//? Сортування чисел и рядків за умовою
// const numbers = [3, 7, 2, 8, 1, 42, 56];
// const copyNumbers = [...numbers].sort((a, b) => {
//   return b - a;
// });

// console.log('numbers: ', numbers);
// console.log('copyNumbers: ', copyNumbers);

// const strArr = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abs'];
// const copytStrArr = [...strArr].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log('strArr: ', strArr);
// console.log('copytStrArr: ', copytStrArr);

/*
? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
? по збільшенню значення властивості amount.
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

// Повний запис функції sortByAscendingAmount
// const sortByAscendingAmount = allCars => {
//   return [...allCars].sort((a, b) => {
//     return a.amount - b.amount;
//   });
// };

// Скорочений запис функції sortByAscendingAmount
// const sortByAscendingAmount = allCars => [...allCars].sort((a, b) => a.amount - b.amount);

// console.table(cars);
// console.table(sortByAscendingAmount(cars));

/*
? Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
? за зменшенням значення властивості price.
*/
// Повний запис функції sortByDescendingPrice
// const sortByDescendingPrice = allCars => {
//   return [...allCars].sort((a, b) => {
//     return b.price - a.price;
//   });
// };

// Скорочений запис функції sortByDescendingPrice
// const sortByDescendingPrice = allCars => [...allCars].sort((a, b) => b.price - a.price);

// console.table(cars);
// console.table(sortByDescendingPrice(cars));

/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/
// 1 Варінат
// const sortByModel = (allCars, order) => {
//   if (order === 'asc') {
//     return [...allCars].sort((a, b) => {
//       return a.model.localeCompare(b.model);
//     });
//   }

//   return [...allCars].sort((a, b) => {
//     return b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// 2 Варіант
// const sortByModel = (allCars, order) => {
//   return [...allCars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     }

//     return b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
