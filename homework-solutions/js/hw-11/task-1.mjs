class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  set firstName(firstNameValue) {
    this._firstName = firstNameValue;
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(lastNameValue) {
    this._lastName = lastNameValue;
  }

  get lastName() {
    return this._lastName;
  }

  set profession(professionValue) {
    this._profession = professionValue;
  }

  get profession() {
    return this._profession;
  }

  set salary(salaryValue) {
    if (typeof salaryValue !== 'number' || salaryValue < 0) {
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

const employee = new Employee('Uliana', 'Gr', 'QA', 100500);
console.log(employee);

employee.firstName = 'Tom';
console.log(employee.firstName);

employee.lastName = 'QA';
console.log(employee.lastName);

employee.profession = 'Test Engineer';
console.log(employee.profession);

employee.salary = 20000000;
console.log(employee.salary);

console.log(employee.getFullName());
console.log(employee);

console.log('--------------------------------------------');

const newGroupEmployee = new Employee('Таня', 'Иванова', 'Testing Engineer', 100700);
console.log(newGroupEmployee);
console.log(newGroupEmployee.getFullName());

newGroupEmployee.lastName = 'Петрова';
console.log(newGroupEmployee.lastName);

newGroupEmployee.profession = 'Software Test Engineer';
console.log(newGroupEmployee.profession);

newGroupEmployee.salary = 200500;
console.log(newGroupEmployee.salary);

console.log(newGroupEmployee);

console.log('--------------------------------------------');

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
}

const company = new Company('Tech Corp', 123456, 'Main Street');
console.log(company);


console.log(' ================== EMPLOYEE =================');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1);

const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
console.log(emp2);

company.addEmployee(emp1);
company.addEmployee(emp2);

console.log(company.getEmployees());

// if (Array.isArray(emps)) {
//   for (let em of emps) {
//     console.log(em);
//   }
// }

export { Employee, Company };
