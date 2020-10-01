// import { getData } from './getData.js';

// const wishlist = ['idd005', 'idd100', 'idd088', 'idd018'];

// const cartList = [
// 	{
// 		id: 'idd015',
// 		count: 3,
// 	},
// 	{
// 		id: 'idd035',
// 		count: 1,
// 	},
// 	{
// 		id: 'idd025',
// 		count: 2,
// 	},
// ];

export const loadData = () => {
	if (location.search) {
		console.log('search');
	}

	if (location.hash) {
		console.log(location.hash);
	}

	if (location.pathname.includes('cart')) {
		console.log('cart');
	}
};
