/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4


*/

function findMissingNumber(numbers) {
  if (numbers.length === 1) {
    return numbers[0] === 1 ? 2 : 1;
  }

  const sortedArr = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] === 1) {
      continue;
    } else {
      return sortedArr[i + 1] - 1;
    }
  }

  return sortedArr[0] != 1 ? 1 : sortedArr.length + 1;
}

findMissingNumber([5,2,7,3,8,1,6]);
// console.log(findMissingNumber([5, 2, 7, 3, 8, 1, 6]));

// console.log(findMissingNumber([1]));

// console.log(findMissingNumber([2]));

// console.log(findMissingNumber([3, 1, 2]));

// console.log(findMissingNumber([3, 4, 2]));



export { findMissingNumber };
