import { getData } from './getData.js';
import userData from './user-data.js';

const COUNTER = 6;

const generateGoodsPage = () => {
	const mainHeader = document.querySelector('.main-header');

	const generateCards = (data) => {
		const goodsList = document.querySelector('.goods-list');
		goodsList.textContent = '';

		if (typeof data === 'string') {
			const message = `${data}`;
			goodsList.textContent = message;
		} else {
			data.forEach((item) => {
				const { id, img, name, description, price, count } = item;
				const itemHTML = `
                    <li class="goods-list__item">
                        <a class="goods-item__link" href="card.html#${id}">
                            <article class="goods-item">
                                <div class="goods-item__img">
                                    <img
                                        src=${img[0]}
                                        ${
																					img[1]
																						? `data-second-image=${img[1]}`
																						: ''
																				}
                                        alt=${name}
                                    />
                                </div>
                                ${
																	count > COUNTER
																		? `<p class="goods-item__new">Новинка</p>`
																		: ''
																}
                                ${
																	!count
																		? `<p class="goods-item__new">Нет в наличии</p>`
																		: ''
																}
                                <h3 class="goods-item__header">${name.toUpperCase()}</h3>
                                <p class="goods-item__description">
                                    ${description}
                                </p>
                                <p class="goods-item__price">
                                    <span class="goods-item__price-value">${price}</span>
                                    <span class="goods-item__currency"> ₽</span>
                                </p>
                                ${
																	count
																		? `<button
                                        class="btn btn-add-card"
                                        aria-label="Добавить в корзину"
                                        data-idd="${id}"
                                    ></button>`
																		: ''
																}
                            </article>
                        </a>
                    </li>`;

				goodsList.insertAdjacentHTML('afterbegin', itemHTML);
			});
		}

		goodsList.addEventListener('click', (event) => {
			const btnAddCard = event.target.closest('.btn-add-card');
			if (btnAddCard) {
				event.preventDefault();
				userData.cartList = btnAddCard.dataset.idd;
				console.log(userData.cartList);
			}
		});
	};

	if (location.pathname.includes('goods') && location.search) {
		const search = decodeURI(location.search);
		const prop = search.split('=')[0].substring(1);
		const value = search.split('=')[1];

		if (prop === 's') {
			getData.search(value, generateCards);
			mainHeader.textContent = `Поиск: ${value}`;
		} else if (prop === 'wishlist') {
			getData.wishList(userData.wishList, generateCards);
			mainHeader.textContent = `Список желаний`;
		} else if (prop === 'cat' || prop === 'subcat') {
			getData.category(prop, value, generateCards);
			mainHeader.textContent = value;
		}
	}
};

export default generateGoodsPage;
