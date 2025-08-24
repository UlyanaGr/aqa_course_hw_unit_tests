/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом xfindInxe)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (
    !Object.hasOwn(character, 'name') ||
    !Object.hasOwn(character, 'age') ||
    typeof character.name !== 'string' ||
    typeof character.age !== 'number'
  ) {
    throw new Error('Invalid character object: must have string name and number age');
  }
  characters.push(character);
}

try {
  addCharacter({ name: 'Jane', age: 25 }); 
  console.log(characters);

  addCharacter({ name: "John", age: "30"}); 
} catch (error) {
  console.error(error.message);
}



function getCharacter(name) {
  return characters.find((element) => element['name'] === name);
}

console.log(getCharacter('Fred'));





function getCharactersByAge(minAge) {

  if (typeof minAge !== 'number' || minAge <= 0) {
    throw new Error('Invalid input: minAge should be a positive number');
  }
 return characters.filter((element) => element['age'] >= minAge);
 }

 try {
  console.log(getCharactersByAge(35));       // Valid input
  console.log(getCharactersByAge('thirty five')); // Invalid input
} catch (error) {
  console.error(error.message);
}

// console.log(getCharactersByAge(35));



function updateCharacter(name, newCharacter) {
  const foundCharacter = characters.find(element => element.name === name);  //с помощью find ищем персонажа с указанным именем

  if (!foundCharacter) {
    throw new Error(`Character with name "${name}" not found`); // если имя такое не найдено, показываем ошибку
  }

  const index = characters.findIndex(element => element.name === name); 

  characters.splice(index, 1, newCharacter); 
  return characters; // Возвращаем обновлённый массив
}

try {
  const updatedCharacters = updateCharacter("Fred", { name: 'Tom', age: 25 });
  console.log(updatedCharacters);
} catch (error) {
  console.error(error.message);
}




function removeCharacter(name) {
  const foundCharacter = characters.find(element => element.name === name); // с помощью find  ищем персонажа по имени

  if (!foundCharacter) {
    throw new Error(`Character with name "${name}" not found`); // Если не нашли, показываем ошибку
  }

  const index = characters.findIndex(element => element.name === name); 

  characters.splice(index, 1); // Удаляем найденный элемент из массива

  return characters; // Возвращаем обновлённый массив
}


try {
  console.log(removeCharacter('Fred')); 
  console.log(removeCharacter('Unknown Name')); 
} catch (error) {
  console.error(error.message);
}




export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
