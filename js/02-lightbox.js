import { galleryItems } from './gallery-items.js';

let images = galleryItems
  .map(image => `
  <li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
     <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a>
  </li>`)
  .join('');

let ul = document.querySelector('ul.gallery');
ul.insertAdjacentHTML('beforeend', images);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
