/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }

  let leftIndexValue; // переменная для буквы слева
  let rightIndexValue; // переменная для буквы справа
  let lc = word.toLowerCase();

  for (let i = 0; i < lc.length; i++) {
    if (i > lc.length - 1 - i) {
      break;
    }
    leftIndexValue = lc[i];
    rightIndexValue = lc[lc.length - 1 - i];

    if (leftIndexValue !== rightIndexValue) {
      return false;
    }
  }

  return true;
}

isPalindrom('шалаш');
// console.log(isPalindrom("шалаШ"));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  }

  if (sentence.length === 0) {
    return [];
  }

  let arr = sentence.split(' ');

  let maxLength = arr[0].length;
  let maxLengthIndices = [0];

  let wordCompare;

  for (let i = 1; i < arr.length; i++) {
    wordCompare = arr[i];

    if (maxLength > wordCompare.length) {
      continue;
    } else if (maxLength === wordCompare.length) {
      maxLengthIndices.push(i);
    } else {
      maxLength = wordCompare.length;
      maxLengthIndices = [i];
    }
  }
  let result = [];
  for (let ind of maxLengthIndices) {
    result.push(arr[ind]);
  }
  return result;
}

// console.log(findLongestWords('Коля спит на лугу'));
findLongestWords('Коля спит на лугу');

export { isPalindrom, findLongestWords };
