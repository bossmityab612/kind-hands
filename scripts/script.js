// path — встроенный в Node.js модуль
const path = require('path')

module.exports = {
  // Указываем путь до входной точки:
  entry: './src/index.js',
  // Описываем, куда следует поместить результат работы:
  output: {
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, 'dist'),
    // Имя файла со сборкой:
    filename: 'bundle.js'
  }
}

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


