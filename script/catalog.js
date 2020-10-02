import { getData } from './getData.js';
import generateSubCatalog from './generate-subcatalog.js';

const catalog = () => {
	const updateSubCatalog = generateSubCatalog();

	const btnBurger = document.querySelector('.btn-burger');
	const catalog = document.querySelector('.catalog');
	const btnClose = document.querySelector('.btn-close');
	const catalogList = document.querySelector('.catalog-list');
	const subCatalog = document.querySelector('.subcatalog');
	const subCatalogHeader = document.querySelector('.subcatalog-header');

	const overlay = document.createElement('div');
	overlay.classList.add('overlay');
	document.body.insertAdjacentElement('beforeEnd', overlay);

	const openMenu = () => {
		catalog.classList.add('open');
		overlay.classList.add('active');
	};

	const closeMenu = () => {
		catalog.classList.remove('open');
		overlay.classList.remove('active');
		closeSubMenu();
	};

	const openSubMenu = (event) => {
		event.preventDefault();
		const target = event.target;
		const listItem = target.closest('.catalog-list__item');
		if (listItem) {
			getData.subCatalog(target.textContent, (data) => {
				updateSubCatalog(target.textContent, data);
				subCatalog.classList.add('subopen');
				const btnReturn = document.querySelector('.btn-return');
				btnReturn.addEventListener('click', closeSubMenu);
			});
		}
	};

	const closeSubMenu = () => {
		subCatalog.classList.remove('subopen');
	};

	btnBurger.addEventListener('click', openMenu);
	btnClose.addEventListener('click', closeMenu);
	overlay.addEventListener('click', closeMenu);
	catalogList.addEventListener('click', openSubMenu);

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			closeMenu();
		}
	});
};

export default catalog;
