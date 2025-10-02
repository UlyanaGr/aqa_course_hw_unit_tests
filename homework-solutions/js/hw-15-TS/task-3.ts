// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ,
// соответствующий этому значению.
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

type Car = {
  make: string;
  model: string;
};

const car = {
  make: 'Japan',
  model: 'Nissan',
};

function getKeyByValue<T extends object>(object: T, value: T[keyof T]): keyof T | undefined {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}


console.log(getKeyByValue(car, "Nissan"));
console.log(getKeyByValue(car, "Japan"));
console.log(getKeyByValue(car, "BMW"));
