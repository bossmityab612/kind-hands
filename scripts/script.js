// Открытие и закрытие меню
const popup = document.querySelector('.header__navigation_cont-menu');
const openHeader = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation-menu');
const lupa = document.querySelector('.header__search');

openHeader.addEventListener('click', () => {
  popup.classList.toggle('burger_opened');
});

lupa.addEventListener('click', () => {
  navigation.classList.toggle('search_opened');
});


