// Функция, возвращающая целое число из диапазона, создана на основе функции getRandomIntInclusive (https://developer.mozilla.org/)

const getRandomNumber = (min, max) => {
  let minValue = Math.ceil(min);
  let maxValue = Math.floor(max);
  if (minValue < 0 || maxValue < 0 || minValue > maxValue) {
    alert('Пожалуйста, введите корректные данные');
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

// Функция для проверки максимальной длины строки

const checkStringLenght = (string, maxLenght) => string.length > maxLenght;

checkStringLenght('Привет!', 140);

export {getRandomNumber};
