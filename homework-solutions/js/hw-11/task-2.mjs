class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  set firstName(firstNameValue) {
    if (typeof firstNameValue !== 'string') {
      throw new Error('First name is not a String type');
    }

    if (firstNameValue.length < 2 || firstNameValue.length > 50) {
      throw new Error('First name value length is invalid');
    }

    if (!/^[A-Za-z]+$/.test(firstNameValue)) {
      throw new Error('The first name should contain only latin letters');
    }

    this._firstName = firstNameValue;
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(lastNameValue) {
    if (typeof lastNameValue !== 'string') {
      throw new Error('Last name is not a String type');
    }

    if (lastNameValue.length < 2 || lastNameValue.length > 50) {
      throw new Error('Last name value length is invalid');
    }

    if (!/^[A-Za-z]+$/.test(lastNameValue)) {
      throw new Error('The last name should contain only latin letters');
    }
    this._lastName = lastNameValue;
  }

  get lastName() {
    return this._lastName;
  }

  set profession(professionValue) {
    if (typeof professionValue !== 'string') {
      throw new Error('Profession is not a String type');
    }
    const trimmedProfession = professionValue.trim();
    if (trimmedProfession.length === 0 || !/^[A-Za-z\s]+$/.test(trimmedProfession)) {
      throw new Error('The profession value should contain only Latin letters and spaces');
    }

    this._profession = trimmedProfession;
  }

  get profession() {
    return this._profession;
  }

  set salary(salaryValue) {
    if (typeof salaryValue !== 'number' || Number.isNaN(salaryValue)) {
      throw new Error('Salary is not a Number type or NaN');
    }

    if (salaryValue <= 0 || salaryValue >= 10000) {
      throw new Error('Salary is not valid');
    }

    this.#salary = salaryValue;
  }

  get salary() {
    return this.#salary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
      // console.log(`Number employees in company(${this._title} == ${this.#employees.length})`);
    } else {
      throw new Error('Employee is not valid');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const result = this.getEmployees().find((employee) => employee.firstName === firstName);
    if (result) {
      return result;
    } else {
      throw new Error('Employee is not valid');
    }
  }

  #getEmployeeIndex(firstName) {
    return this.getEmployees().findIndex((employee) => employee.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index >= 0) {
      this.#employees.splice(index, 1);
    } else {
      throw new Error('Value not found');
    }
  }

  getTotalSalary() {
    return this.#employees.reduce((result, employee) => result + employee.salary, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

// console.log(company.findEmployeeByName("John"));
console.log(`Total salary == ${company.getTotalSalary()}`);

export { Employee, Company };
