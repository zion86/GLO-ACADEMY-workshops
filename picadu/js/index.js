const menu = document.querySelector('.menu'),
  sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  sidebar.classList.toggle('sidebar--open');
});