import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.list'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};
console.log(refs.loadMoreBtn);

const handleSubmit = event => {
  event.preventDefault();
  // console.log(event);
  const {
    elements: { query },
  } = event.currentTarget;

  const searchQuery = query.value.trim().toLowerCase();
  console.log(searchQuery);
  if (!searchQuery) {
    console.log('wtf');
    Notify.failure('Enter name!!!');
    return;
  }
};
refs.form.addEventListener('submit', handleSubmit);
