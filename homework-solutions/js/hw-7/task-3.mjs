/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  let parts = number.toString().split('');

  if (parts.length === 1) {
    return Number(parts[0]); //выводим однозначное число, которое пришло в инпут
  }
  let result = 0;

  for (let i = 0; i < parts.length; i++) {
    result = result + Number(parts[i]);
  }
  if (result > 9) {
    return digitalRoot(result);
  } else {
    return result;
  }
}

digitalRoot(18);


export { digitalRoot };
