// Функция, возвращающая целое число из диапазона, создана на основе функции getRandomIntInclusive (https://developer.mozilla.org/)

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
};

getRandomNumber(1, 100);

// Функция для проверки максимальной длины строки

const checkStringLenght = (string, maxLenght) => {
  return (string.length > maxLenght) ? false : true;
}

checkStringLenght('Привет!', 140);
