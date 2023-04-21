const galleryEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.js-banner__img');
const galleryImgEls = document.querySelectorAll('.js-gallery__img');

// Анімування при загрузці

galleryImgEls.forEach((el) => {
  el.addEventListener(
    'load',
    (event) => {
      event.target.classList.add('appear');
    },
    {
      once: true,
    }
  );
});

const onGalleryImgClick = (event) => {
  event.preventDefault();

  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const largeImagePath = target.dataset.bannerUrl;

  bannerImgEl.src = largeImagePath;
};

galleryEl.addEventListener('click', onGalleryImgClick);

// const addSrcAttrToImg = () => {
//   galleryImgEls.forEach((el) => {
//     el.src = el.dataset.src;
//   });
// };

// const createLazySizesScript = () => {
//   const script = document.createElement('script');

//   script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';

//   return script;
// };

// if ('loading' in HTMLImageElement.prototype) {
//   console.log('Атрибут loading підтримується');
//   addSrcAttrToImg();
// } else {
//   console.log('Атрибут loading не підтримується');
//   document.body.append(createLazySizesScript());
// }

// const obj = {
//   name: 'Andrii',
// };

// console.log('name' in obj);

// var lightbox = new SimpleLightbox('.gallery__link', {
//   captionDelay: 250,
//   captionsData: 'alt',
// });
