'use strict';

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

const DESCRIPTIONS = [
  'Мир должен знать, что я ем',
  'У меня такое же, только Азовское',
  'Я просто прямой потомок грандиозности',
  'У меня есть много скрытых талантов. Проблема в том, что даже я не могу их найти',
  'Еще один прекрасный день, испорченный обязанностями',
  'Говорят, не пробуйте это дома… так что я пошел домой к другу!',
  'Оставайся сильным, скоро выходные!',
  'Кто не работает, тот ест',
  'Просто оставлю это здесь',
  'Я смог, значит, и вы сможете',
  'Хорошо там, где меня нет… Но ничего, я и туда доберусь!',
  'Я личность творческая – хочу творю, хочу вытворяю',
  'Когда красивым налево, а умным направо, мне хоть разорвись',
  'Ушел в себя и заблудился',
  'Не можешь погулять наружу – погуляй вовнутрь',
  'Вам со мной будет стыдно, но не скучно',
  'Остановите лето – я не успеваю отдыхать',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Сильвестр в столовой',
  'Капитан Джек Поскорей',
  'Анна Лохматая',
  'Подружка безопасности',
  'Hолемоций',
  'K@рToШk@_',
  '●_•',
  'ЧеРтЁнОк_Ф_кЕдАх',
  'Бобер Иннокентий',
];

const PHOTO_COUNT = 25;

// Функция для получения случайного индекса массива

const getRandomArrayElement = (elements, splice) => {
  const result = elements[getRandomNumber(0, elements.length - 1)];

  if (splice) {
    elements.splice(elements.indexOf(result), 1)
  }

  return result
}

// Функция для получения массива последовательных чисел

const generateSequenceOfNumbers = (min, max) => {
  let numbersArray = [];
  for (let i = 0; i <= max - min; i++) {
    numbersArray[i] = min + i;
  }
  if (min < 0 || max < 0 || min >= max) {
    alert('Пожалуйста, введите корректные данные');
  }
  return numbersArray;
};


const createComment = (id) => {
  return {
    id: id,
    avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhotoDescription = (id) => {
  return {
    id: id,
    url: 'photos/' + id + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: createComment(getRandomArrayElement(commentsIds, true)),
  }
};

const photosIds = generateSequenceOfNumbers(1, 25);
const commentsIds = generateSequenceOfNumbers(1, 150);

const photos = new Array(PHOTO_COUNT).fill(null).map(() => createPhotoDescription(getRandomArrayElement(photosIds, true)));
alert(photos);
