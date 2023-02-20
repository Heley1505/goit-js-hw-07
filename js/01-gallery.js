import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');


const addMarkup = galleryItems.map(pic => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${pic.original}">
    <img
      class="gallery__image"
      src="${pic.preview}"
      data-source="${pic.original}"
      alt="${pic.description}"
    />
  </a>
</div>`
}).join('');


gallery.insertAdjacentHTML('beforeend', addMarkup);
gallery.addEventListener('click', clickOnOpen);

function clickOnOpen(event) {};


