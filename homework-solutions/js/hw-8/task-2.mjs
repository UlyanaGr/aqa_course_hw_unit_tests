/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

// function countVowels(word) {
//   const matches = word.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

function countVowelsV2(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsCount = [...word].reduce((sum, letter) => {
    if (vowels.includes(letter)) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);
  return vowelsCount;
}

function sortedByVowels(wordsArr) {
  return wordsArr.toSorted((a, b) => countVowelsV2(a) - countVowelsV2(b));
}

// console.log(`not sorted === > ${words}`);
// console.log(`sorted === > ${sortedByVowels(words)}`);

export { sortedByVowels };
