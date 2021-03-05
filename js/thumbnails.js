import {photos} from './data.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content;

const userPhotos = photos;
console.log(userPhotos);
const photoFragment = document.createDocumentFragment();

userPhotos.forEach(({url, likes, comments}) => {
  const newPicture = photoTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  photoFragment.appendChild(newPicture);
});
photoContainer.appendChild(photoFragment);
