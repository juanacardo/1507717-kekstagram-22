import {getRandomNumber} from './util.js';

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
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_LIKES_QUANTITY = 15;
const MAX_LIKES_QUANTITY = 200;
const MIN_COMMENT_ID_NUMBER = 1;
const MAX_COMMENT_ID_NUMBER = 150;
const MIN_PHOTO_ID_NUMBER = 1;
const MAX_PHOTO_ID_NUMBER = 25;
const COMMENTS_QUANTITY = 2;

// Функция для получения случайного индекса массива

const getRandomArrayElement = (elements, splice) => {
  const result = elements[getRandomNumber(0, elements.length - 1)];

  if (splice) {
    elements.splice(elements.indexOf(result), 1);
  }

  return result;
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

// Функция для создания комментария к фотографии

const createComment = (id) => {
  return {
    id: id,
    avatar: 'img/avatar-' + getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER) + '.svg',
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

// Функция для создания описания к фотографии с массивом комментариев

const createPhotoDescription = (id) => {
  const commentsIds = generateSequenceOfNumbers(MIN_COMMENT_ID_NUMBER, MAX_COMMENT_ID_NUMBER);
  return {
    id: id,
    url: 'photos/' + id + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(MIN_LIKES_QUANTITY, MAX_LIKES_QUANTITY),
    comments: new Array(COMMENTS_QUANTITY).fill(null).map(() => createComment(getRandomArrayElement(commentsIds, true))),
  }
};

const photosIds = generateSequenceOfNumbers(MIN_PHOTO_ID_NUMBER, MAX_PHOTO_ID_NUMBER);

const photos = new Array(PHOTO_COUNT).fill(null).map(() => createPhotoDescription(getRandomArrayElement(photosIds, true)));

export {photos};
