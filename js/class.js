/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Геттери та сеттери
 * Статичні властивості та методи
 */

class User {
  #userLogin;
  #password;

  static test = 5;

  constructor(userInfo) {
    // this = {};
    const {
      firstName,
      lastName,
      age = null,
      phoneNumber,
      login,
      password,
    } = userInfo;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.#userLogin = login;
    this.#password = password;
    // return this;
  }

  // PRIVATE

  // changeFirstName(newName) {
  //   if (this.#private(newName)) {
  //     this.firstName = newName;
  //   }
  // }

  // #private(name) {
  //   return typeof name === 'string';
  // }

  // getLogin() {
  //   return this.#userLogin;
  // }

  // setLogin(newLogin) {
  //   this.#userLogin = newLogin;
  // }

  get login() {
    return this.#userLogin;
  }

  set login(newLogin) {
    this.#userLogin = newLogin;
  }

  changeFirstName(newFirstName) {
    this.firstName = newFirstName;
    User.validateEmail();
  }

  static validateEmail() {
    console.log('Hello');
  }
}

const user1 = new User({
  lastName: 'Smith',
  age: 30,
  phoneNumber: '(096) 58-05-459',
  login: 'id@si.pg',
  password: '123456',
  firstName: 'Edward',
});

console.log(user1);

user1.changeFirstName('Oleksii');

console.dir(User);

const obj = new Object();
