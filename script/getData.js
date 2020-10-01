export const getData = {
	url: 'database/dataBase.json',
	get(process) {
		fetch(this.url);
	},
};

getData.get(console.log);
