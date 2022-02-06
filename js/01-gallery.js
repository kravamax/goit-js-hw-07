import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>
    `;
  })
  .join("");

let instance;

createMarkup(galleryMarkup);

refs.gallery.addEventListener("click", galleryItemClick);

function galleryItemClick(e) {
  e.preventDefault();

  if (e.target !== e.currentTarget) {
    refs.gallery.addEventListener("keydown", checkEscKeyPress);

    createModalMarkup(e);

    instance.show();

    checkEscKeyPress(e);
  } else {
    return;
  }
}

function createMarkup(markup) {
  refs.gallery.insertAdjacentHTML("afterbegin", markup);
}

function createModalMarkup(e) {
  instance = basicLightbox.create(`
          <img src="${e.target.dataset.source}" width="800" height="600">
      `);
}

function checkEscKeyPress(e) {
  if (e.code === "Escape") {
    instance.close();
    refs.gallery.removeEventListener("keydown", checkEscKeyPress);
  }
}
