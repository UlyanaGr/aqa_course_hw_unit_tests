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


function countVowelsV2(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowerWord = word.toLowerCase();
  const vowelsCount = [...lowerWord].reduce((sum, letter) => {
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

export { sortedByVowels };

// console.log(`not sorted === > ${words}`);
// console.log(`sorted === > ${sortedByVowels(words)}`);


