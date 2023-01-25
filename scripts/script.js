const burgerButton = (elem) => {
	const burger = elem.querySelectorAll('.header__burger');
	burger.forEach(function(el) {
		el.addEventListener('click', function(evt) {
			evt.target.classList.toggle('test_selector');
		});
	});
};
