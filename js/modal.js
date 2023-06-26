const backdropEl = document.querySelector('.js-backdrop');
const modalOpenBtnEl = document.querySelector('.js-modal-open');
const modalCloseBtnEl = document.querySelector('.js-modal-close');

// const toggleModal = () => {
//   backdropEl.classList.toggle('is-open');

// };

// modalOpenBtnEl.addEventListener('click', toggleModal);

// modalCloseBtnEl.addEventListener('click', toggleModal);
const onEscClick = (event) => {
  if (event.code === 'Escape') {
    onModalCloseBtnElClick();
    console.log(event.code);
  }
};

const onModalCloseBtnElClick = () => {
  backdropEl.classList.remove('is-open');
  document.removeEventListener('keydown', onEscClick);
};

const onModalOpenBtnElClick = () => {
  backdropEl.classList.add('is-open');
  document.addEventListener('keydown', onEscClick);
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnElClick);

modalCloseBtnEl.addEventListener('click', onModalCloseBtnElClick);
