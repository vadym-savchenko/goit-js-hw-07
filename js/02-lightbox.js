import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markupGallery = galleryItems.map(({ preview, original, description }) => `
<li class="gallary__item">
<a class="gallary__link" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}" 
    alt="${description}"/>
 </a>
 </li>`).join("");

galleryEl.insertAdjacentHTML("afterbegin", markupGallery);
 
const galleryUsage = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
}); 










