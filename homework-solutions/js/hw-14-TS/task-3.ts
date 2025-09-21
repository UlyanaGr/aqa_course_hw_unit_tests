// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов
// у которых есть как минимум поле salary: number, и возвращается среднее арифметическое зарплат
// всех переданных объектов

abstract class SalaryHolder {
    salary: number;
    constructor(salary: number) {
        this.salary = salary;
    }
}

class Developer extends SalaryHolder {
  bonuses: number = 500;
}

class Designer extends SalaryHolder {
  skills: string[] = [];
}



function getAvgSalary<T extends SalaryHolder>(array: T[]): number {
  if (array.length === 0) {
    return 0;
  }
  const salarySum: number = array.reduce((accum, element) => accum + element.salary, 0);

  return salarySum / array.length;
}


const salaryArray = [new Developer(1500), new Designer(500)];
console.log(getAvgSalary(salaryArray));