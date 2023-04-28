// https://jsonplaceholder.typicode.com/
import createPostsCards from '../templates/posts.hbs';
import { JsonPlaceholderApi } from './jsonplaceholder-api';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();

const appendPosts = () => {
  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      postsListEl.innerHTML = createPostsCards(data);
    })
    .catch(err => {
      console.log(err);
    });
};

appendPosts();

const onLoadMoreBtnElClick = event => {
  jsonPlaceholderApi.page += 1;

  jsonPlaceholderApi.fetchPosts().then(data => {
    postsListEl.insertAdjacentHTML('beforeend', createPostsCards(data));
  });

  if (jsonPlaceholderApi.page === 10) {
    loadMoreBtnEl.classList.add('is-hidden');
    loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnElClick);
  }
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
