
// Открытие и закрытие меню
const popup = document.querySelector('.header__navigation_cont-menu');
const openPopupButton = document.querySelector('.header__burger');

openPopupButton.addEventListener('click', () => {
  popup.classList.toggle('burger_opened');
});

