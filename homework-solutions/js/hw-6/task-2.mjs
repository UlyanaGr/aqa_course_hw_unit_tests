/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let uniqCounter1 = 0;
for (const myPizza of myPizzasT1) {
  let isCurrentPizzaUnique = true;
  for (const compPizza of competitorPizzas) {
    if (myPizza === compPizza) {
      isCurrentPizzaUnique = false;
      break;
    }
  }
  if (isCurrentPizzaUnique === true) {
    uniqCounter1++;
    resultUnique.push(myPizza);
  }
}
if (uniqCounter1 === 0) {
  resultNull = null;
}

let uniqCounter2 = 0;
for (const myPizza of myPizzasT2) {
  let isCurrentPizzaUnique = true;
  for (const compPizza of competitorPizzas) {
    if (myPizza === compPizza) {
      isCurrentPizzaUnique = false;
      break;
    }
  }
  if (isCurrentPizzaUnique === true) {
    uniqCounter2++;
    resultUnique.push(myPizza);
  }
}
if (uniqCounter2 === 0) {
  resultNull = null;
}

export { resultNull, resultUnique };