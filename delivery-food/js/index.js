const modal = document.querySelector('.modal'),
  page = document.querySelector('.page'),
  cartBtn = document.querySelector('.btn--cart'),
  modalBtnClose = document.querySelector('.mobal__btn-close');

cartBtn.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
  page.classList.toggle('page--lock');
});

modalBtnClose.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
  page.classList.toggle('page--lock');
});