/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...args) {
  if (!args.length) {
    return [];
  }

  let resultArr = [];
  for (const arg of args) {
    resultArr = [...resultArr, ...arg];
  }
  return resultArr;
}

mergeArrays([1, 2], [3, 4], [5, 6]);

// console.log();
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  if (!sentence.length) {
    return "";
  }
  let newSentence = '';
  newSentence = sentence[0].toLowerCase();
  let spaceDetected = false;
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      // Если на текущей позиции пробел
      if(spaceDetected){
        // Пробел найден на предыдущем шаге - этот пропускаем
        continue;
      }
      newSentence = newSentence + '_';
      spaceDetected = true;
    } else {
      // Если на текущей позиции не пробел
      if (spaceDetected === true) {
        newSentence = newSentence + sentence[i].toUpperCase();
        spaceDetected = false;
      } else {
        newSentence = newSentence + sentence[i].toLowerCase();
      }
    }
  }
  return newSentence;
}

devideBy('I am super engineer');
// console.log(devideBy('I  am super engIneer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
  const arr = [0, 1];

  if (typeof n !== 'number' || n < 0) {
    return;
  }
  if (n < 2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

// console.log(fibonacci(0));
fibonacci(8);

export { mergeArrays, fibonacci, devideBy };
