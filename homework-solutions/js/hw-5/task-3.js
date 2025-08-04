/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vowelsAndConsonantsResult = '';
let vovels = 0;
let consonants = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] != 'a' && word[i] != 'e' && word[i] != 'i' && word[i] != 'o' && word[i] != 'u') {
    consonants++;
  } else {
    vovels++;
  }
}
vowelsAndConsonantsResult = `${word} contains ${vovels} vowels and ${consonants} consonants`
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
