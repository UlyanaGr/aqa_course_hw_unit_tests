// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => {
  console.log('2 секунды');
});

console.log('--------------------------------------------------------');

const promiseFulfilled = new Promise((resolve, reject) => {
  resolve(1);
});

promiseFulfilled.then((value) => {
  console.log(value);
});

// console.log(promiseFulfilled);

console.log('--------------------------------------------------------');

const promiseRejected = new Promise((resolve, reject) => {
  reject('Promise failed');
});

promiseRejected.catch((error) => {
  console.error(error);
});

console.log('--------------------------------------------------------');

function promiseNumber(number) {
  if (typeof number === 'number') {
    return new Promise((resolve, reject) => {
      resolve(number);
    });
  }
}

promiseNumber(5).then((number) => {
  console.log(number);
});

console.log('--------------------------------------------------------');

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) => {
  console.log(values);
});

console.log('--------------------------------------------------------');

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log('Wow! Fulfilled:', result.value);
    } else {
      console.log('Sorry, Rejected:', result.reason);
    }
  });
});

console.log('--------------------------------------------------------');

// Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) => {
//     console.log(values);
//   });

  async function promisesAll() {
    try {
      const values = await Promise.all([
        promiseNumber(1),
        promiseNumber(2),
        promiseNumber(3),
      ]);
      console.log(values);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  promisesAll();

  console.log('--------------------------------------------------------');

//   Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
//     results.forEach((result) => {
//       if (result.status === 'fulfilled') {
//         console.log('Wow! Fulfilled:', result.value);
//       } else {
//         console.log('Sorry, Rejected:', result.reason);
//       }
//     });
//   });

  async function promisesAllSettled() {
    const results = await Promise.allSettled([
        promiseNumber(1), 
        promiseNumber(2), 
        promiseNumber(3)]);
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
              console.log(`Promise ${index} completed with result:`, result.value);
            } else {
              console.log(`Promise ${index} declined with result:`, result.reason);
            }
          });
  }

  promisesAllSettled();

  