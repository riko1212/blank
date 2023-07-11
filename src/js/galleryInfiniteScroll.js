// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const targetEl = document.querySelector('.js-target-element');

const unsplashApi = new UnsplashApi();

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 300px 0px',
  threshold: 1,
};

const observer = new IntersectionObserver(async (entries, observer) => {
  if (entries[0].isIntersecting) {
    try {
      unsplashApi.page += 1;

      const { data } = await unsplashApi.fetchPhotosByQuery();

      galleryListEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

      if (data.total_pages === unsplashApi.page) {
        observer.unobserve(targetEl);
      }
    } catch (err) {
      console.log(err);
    }
  }
}, observerOptions);

const paintRandomPhotosByPageLoad = async () => {
  try {
    const { data } = await unsplashApi.fetchRandomPhotos();

    galleryListEl.innerHTML = createGalleryCards(data);
  } catch (err) {
    console.log(err);
  }
};

paintRandomPhotosByPageLoad();

const onSearchFormElSubmit = async event => {
  event.preventDefault();

  unsplashApi.searchQuery = event.currentTarget.elements.user_search_query.value;
  unsplashApi.page = 1;

  try {
    const { data } = await unsplashApi.fetchPhotosByQuery();

    if (data.total_pages === 0) {
      galleryListEl.innerHTML = '';

      return;
    }

    if (data.total_pages === 1) {
      galleryListEl.innerHTML = createGalleryCards(data.results);

      return;
    }

    galleryListEl.innerHTML = createGalleryCards(data.results);
    observer.observe(targetEl);
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
