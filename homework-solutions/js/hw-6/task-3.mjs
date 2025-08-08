/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
const arr2 = [];
for (const element1 of arr1) {
  let isUniqueElement = true;
  for (const element2 of arr2) {
    if (element1 === element2) {
      isUniqueElement = false;
     break;
    }
  }
  if (isUniqueElement === true) {
    arr2.push(element1);
    unique = arr2;
  }
}
console.log(unique);
// console.log(arr2);

export { unique };
