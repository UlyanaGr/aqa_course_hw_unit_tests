/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr = []) {
  // const obj = arr.reduce((acc, item, index) => {
  //   acc[index] = item;
  //   return acc;
  // }, {});
  // console.log(obj);

  const result = {};

  for (const num of arr) {
    const currentCount = result[num] || 0;
    result[num] = currentCount + 1;
  }
  return result;
}

console.log(countOccurrences([1, 2, 2, 3, 4, 4, 4, 5]));

export { countOccurrences };
