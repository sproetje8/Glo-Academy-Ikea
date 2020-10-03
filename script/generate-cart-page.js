import { getData } from './getData.js';
import userData from './user-data.js';

const generateCartPage = () => {
	const generateCards = (data) => {
		const cartList = document.querySelector('.cart-list');
		cartList.textContent = '';

		if (typeof data === 'string') {
			const message = `${data}`;
			cartList.textContent = message;
		} else {
			data.forEach((item) => {
				const { id, img, name: itemName, description, price} = item;
				const itemHTML = `
                <li class="cart-item">
                    <div class="product">
                        <div class="product__image-container">
                            <img
                                src="${img[0]}"
                                alt="${itemName} - ${description}"
                                aria-describedby="aria_product_description_40366083"
                                itemprop="image"
                            />
                        </div>
                        <div class="product__description">
                            <h3 class="product__name">
                                <a href="card.html#${id}">${itemName}</a>
                            </h3>
                            <p class="product_description-text">
                                ${description}
                            </p>
                        </div>
                        <div class="product__prices">
                            <div class="product__price-type product__price-type-regular">
                                <div>
                                    <div class="product__total product__total-regular">
                                        ${price}.-
                                    </div>
                                    <!--    <div class="product__price-regular">${price}.-</div>  -->
                                </div>
                            </div>
                        </div>
                        <div class="product__controls">
                            <div class="product-controls__remove">
                                <button type="button" class="btn btn-remove">
                                    <img
                                        src="image/remove-thin-24.16c1cc7a.svg"
                                        alt="Удалить товар"
                                    />
                                </button>
                            </div>
                            <div class="product-controls__quantity">
                                <select
                                    title="Выберите количество"
                                    aria-label="Выберите количество"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </li>
                `;

				cartList.insertAdjacentHTML('afterbegin', itemHTML);
			});
		}
	};

	if (location.pathname.includes('cart')) {
		getData.cart(userData.cartList, generateCards);
	}
};

export default generateCartPage;
