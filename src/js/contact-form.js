import localstorageService from './localstorage';

const contactFormEl = document.querySelector('.js-contact-form');
const userData = {};

const fillContactFormFields = () => {
  const contactFormDataFromLS = localstorageService.load('userData');

  for (const prop in contactFormDataFromLS) {
    if (contactFormDataFromLS.hasOwnProperty(prop)) {
      // console.log(prop);
      // console.log(contactFormDataFromLS[prop]);

      contactFormEl.elements[prop].value = contactFormDataFromLS[prop];
    }
  }
};

fillContactFormFields();

const onFormFieldChange = event => {
  const { target } = event;

  const fieldName = target.name;
  const fieldValue = target.value;

  userData[fieldName] = fieldValue;

  localstorageService.save('userData', userData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  localstorageService.remove('userData');
  contactFormEl.reset();
};

contactFormEl.addEventListener('change', onFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
