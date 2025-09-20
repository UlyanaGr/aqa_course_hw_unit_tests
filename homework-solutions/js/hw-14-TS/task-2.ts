// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:).
// Функция принимеют на вход массив и колбэк. Используйте дженерик типы.
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type mapCallback<T, U> = (element: T, index: number, array: T[]) => U;

function map<T, U>(arr: T[], callback: mapCallback<T, U>): U[] {
  const newArr: U[] = [];
  arr.forEach((value: T, index: number, arr: T[]) => {
    newArr.push(callback(value, index, arr));
  });
  return newArr;
}

console.log(map([1, 2, 3, 4, 5], (value, index) => value * index));
