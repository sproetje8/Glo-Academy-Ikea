import { getData } from './getData.js';

const wishlist = [];

const generateGoodsPage = () => {
	const mainHeader = document.querySelector('.main-header');
	const goodsList = document.querySelector('.goods-list');

    const generateCards = (data) => {
		goodsList.textContent = '';
        console.log(typeof data);
		if (typeof data === 'string') {
			const message = `${data}`;
			goodsList.textContent = message;
		} else {
			data.forEach((item) => {
				const { id, img, name, description, price } = item;
				const itemHTML = `
                    <li class="goods-list__item">
                        <a class="goods-item__link" href="card.html#${id}">
                            <article class="goods-item">
                                <div class="goods-item__img">
                                    <img
                                        src=${img[0]}
                                        data-second-image=${img[1]}
                                        alt=${name}
                                    />
                                </div>
                                <p class="goods-item__new">Новинка</p>
                                <h3 class="goods-item__header">${name.toUpperCase()}</h3>
                                <p class="goods-item__description">
                                    ${description}
                                </p>
                                <p class="goods-item__price">
                                    <span class="goods-item__price-value">${price}</span>
                                    <span class="goods-item__currency"> ₽</span>
                                </p>
                                <button
                                    class="btn btn-add-card"
                                    aria-label="Добавить в корзину"
                                    data-idd="${id}"
                                ></button>
                            </article>
                        </a>
                    </li>`;

				goodsList.insertAdjacentHTML('afterbegin', itemHTML);
			});
		}
	};

	if (location.pathname.includes('goods') && location.search) {
		const search = decodeURI(location.search);
		const prop = search.split('=')[0].substring(1);
		const value = search.split('=')[1];

		if (prop === 's') {
			getData.search(value, generateCards);
			mainHeader.textContent = `Поиск: ${value}`;
		} else if (prop === 'wishlist') {
			getData.wishList(wishlist, generateCards);
			mainHeader.textContent = `Список желаний`;
		} else if (prop === 'cat' || prop === 'subcat') {
			getData.category(prop, value, generateCards);
			mainHeader.textContent = value;
		}
	}
};

export default generateGoodsPage;
