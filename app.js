console.log("question  1. convertToNumber.");
function convertToNumber(str) {
  try {
    const number = Number(str);

    if (isNaN(number)) {
      throw new Error("iInvalid number");
    }
    return number;
  } catch (error) {
    return "Invalid number";
  }
}
console.log(convertToNumber("42")); // Output: 42
console.log(convertToNumber("3.14")); // Output: 3.14
console.log(convertToNumber("Hello")); // Output: Invalid number

// 2. Building Robust Functions in JavaScript
console.log("question   2. Building Robust Functions in JavaScript");
const getPerson = (person) => {
  try {
    if (
      typeof person !== "object" ||
      person === null ||
      !("name" in person) ||
      !("age" in person)
    ) {
      throw new Error("Invalid parameter type");
    }
    return `Name:${person.name} Age:${person.age}`;
  } catch (error) {
    return error.message;
  }
};
const valid = { name: "Musah", age: 27 };
const Invalid = { name: "Eric" };
console.log(getPerson(valid));
console.log(getPerson(Invalid));

// 3. Car Description Class.
console.log("question  3. Car Description Class.");
class Car {
  constructor(model, company, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return `This is a ${this.year} ${this.company}  ${this.model} `;
  }
}
const myCar = new Car("Rapid", "Skoda", 2022);
console.log(myCar.getDescription());

// 4. Employee Class Challenge.
console.log("question 4. Employee Class Challenge.");
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    return `// Ouput:${this.salary}`;
  }
}
const employee1 = new Employee("Peter", "FullStack developer", 80000);
console.log(employee1.getSalary());

// 5. Implementing a Person Class with Default Values
console.log("question  5. Implementing a Person Class with Default Values");

class Person {
  constructor(name = "Unknwoun", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name:${this.name}, Age:${this.age}`;
  }
}
const person1 = new Person("Mithun", 20);
const person2 = new Person();
console.log(person1.getDetails());
console.log(person2.getDetails());

// 6. Using Static Method to Add Two Numbers with Calculator Class
console.log(
  "question  6. Using Static Method to Add Two Numbers with Calculator Class"
);

class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}
const result = Calculator.add(10, 5);
console.log(`//Output: ${result}`);

// 7. Password Checker.
console.log("question  7. Password Checker.");
class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, "*");
  }

  set password(newPassword) {
    if (
      newPassword.length >= 8 &&
      /\d/.test(newPassword) &&
      /[A-Z]/.test(newPassword)
    ) {
      this._password = newPassword;
    } else {
      console.log(
        "Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }
}
const user = new User("Mithun", "Password123");
console.log(user.password); // Output: ***********
user.password = "MyPassword"; // Output: Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.password = "Mypassword123";
console.log(user.password); // Output: ************

// 8. Adding a Method to a Prototype.
console.log("question 8. Adding a Method to a Prototype.");
function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function () {
  return `Hello, my name is ${this.name}.`;
};

const student = new Student("Mithun");
console.log(student.printDetails());

// 9. Check the presence using closures.
console.log("question 9. Check the presence using closures.");
const numberChecker = (numbers) => {
  return function (num) {
    return numbers.includes(num);
  };
};
const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);

console.log(checkNum(3));
console.log(checkNum(6));

// 10. Filter by Category.
console.log("question 10. Filter by Category.");
function filterByCategory(products) {
  return function (category) {
    return products.filter((product) => product.category === category);
  };
}

const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

const clothingProducts = filterByCategory(products);
console.log(clothingProducts("Clothing")); //clothing products
