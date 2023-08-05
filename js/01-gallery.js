import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");


const markupGallery = galleryItems.map(({ preview, original, description }) => `
<li class="gallary__item">
<a class="gallary__link" href="${original}">
    <img loadind="lazy"
    class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}"/>
 </a>
 </li>`).join("");
// console.log(markupGallery)

galleryEl.insertAdjacentHTML("afterbegin", markupGallery);

function onClickImgToOpenModal() {
    const openImgInModal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280" height="auto">
`)

    openImgInModal.show();
}


const handleImgClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  onClickImgToOpenModal();
};
galleryEl.addEventListener('click', handleImgClick);










console.log(galleryEl);


