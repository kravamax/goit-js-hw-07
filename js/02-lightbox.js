import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
  galleryMarkup: createMarkup(galleryItems),
};

renderMarkup(refs.galleryMarkup);

let modal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

refs.gallery.addEventListener("click", galleryItemClick);

function createMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="its title" />
        </a>
        `;
    })
    .join("");
}

function renderMarkup(markup) {
  refs.gallery.insertAdjacentHTML("afterbegin", markup);
}

function galleryItemClick(e) {
  e.preventDefault();

  if (!(e.target !== e.currentTarget)) {
    return;
  }

  openModal();
}

function openModal() {
  modal.on("show.simplelightbox", function () {});
}
