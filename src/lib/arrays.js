const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => array.toString();

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => {
  const arr = numbers.map(item => {
    return item.toString();
  });
  return arr;
};

const uppercaseWordsInArray = strings => {
  const arr = strings.map(item => {
    return item.toUpperCase();
  });
  return arr;
};

const reverseWordsInArray = strings => {
  const arr = strings.map(item => {
    return item
      .split('')
      .reverse()
      .join('');
  });
  return arr;
};

const onlyEven = numbers => {
  const arr = numbers.filter(item => {
    return item % 2 === 0;
  });
  return arr;
};

const removeNthElement2 = (index, array) => {
  const arr = array.filter((_, elementIndex) => elementIndex !== index);
  return arr;
};

const elementsStartingWithAVowel = strings => {
  const arr = strings.filter(items => {
    return (
      items[0].includes('a') ||
      items[0].includes('A') ||
      items[0].includes('e') ||
      items[0].includes('E') ||
      items[0].includes('i') ||
      items[0].includes('I') ||
      items[0].includes('o') ||
      items[0].includes('O') ||
      items[0].includes('u') ||
      items[0].includes('U')
    );
  });
  return arr;
};

const removeSpaces = string => {
  const str = string.split(' ').join('');
  return str;
};

const sumNumbers = numbers => {
  const arr = numbers.reduce((total, item) => {
    return item + total;
  }, 0);
  return arr;
};

const sortByLastLetter = strings => {
  const arr = strings.sort((a, b) => {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  });
  return arr;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
