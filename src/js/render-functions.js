import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('#gallery');
const loaderEl = document.querySelector('#loader');
const loadMoreBtnEl = document.querySelector('#load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item">
              <p class="info-item-title">Likes</p>
              <p>${likes}</p>
            </li>
            <li class="info-item">
              <p class="info-item-title">Views</p>
              <p>${views}</p>
            </li>
            <li class="info-item">
              <p class="info-item-title">Comments</p>
              <p>${comments}</p>
            </li>
            <li class="info-item">
              <p class="info-item-title">Downloads</p>
              <p>${downloads}</p>
            </li>
          </ul>
        </li>
      `
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('is-visible');
}

export function hideLoader() {
  loaderEl.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMoreBtnEl.classList.add('is-visible');
}

export function hideLoadMoreButton() {
  loadMoreBtnEl.classList.remove('is-visible');
}
