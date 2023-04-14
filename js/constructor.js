/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор
const User = function (userInfo) {
  const {
    firstName,
    lastName,
    age = null,
    phoneNumber,
    login,
    password,
  } = userInfo;

  // this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.phoneNumber = phoneNumber;
  this.login = login;
  this.password = password;
  // return this;

  // this.changeFirstName = function (newFirstName) {
  //   this.firstName = newFirstName;
  // };
};

User.prototype.changeFirstName = function (newFirstName) {
  this.firstName = newFirstName;
};

console.dir(User);

const user1 = new User({
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
  firstName: 'Edward',
});

console.log(user1);

const user2 = new User({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  login: 'cu@hecekalo.edu',
  phoneNumber: '(097) 60-62-231',
  password: 'qwerty123',
});

console.log(user2);

user1.changeFirstName('Oleksii');
user2.changeFirstName('Marvin');

console.log(user1);
console.log(user2);

// const user1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   phoneNumber: '(096) 58-05-459';
//   login: 'id@si.pg';
//   password: '123456'
// };

// const user2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   login: 'cu@hecekalo.edu';
//   phoneNumber: '(097) 60-62-231';
//   password: 'qwerty123'
// };

//? Створюємо методи для наших екземплярів
