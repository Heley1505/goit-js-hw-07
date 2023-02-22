import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const addMarkup = galleryItems.map(pic => {
    return `<a class="gallery__item" href="${pic.original}">
  <img class="gallery__image" src="${pic.preview}" alt="${pic.description}" />
</a>`}).join('');

gallery.insertAdjacentHTML('afterbegin', addMarkup);

const simpleLightbox = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionsDelay: 250,
});