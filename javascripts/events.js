"use strict";

let cats = require('./cats');


$('#inputText').keypress((event) => {
	if(event.key === 'Enter'){
		//gets the number of cats from input
		let amountOfCats = $('#inputText').val();
		console.log("cats from enter key", amountOfCats);
		//triggers api
		cats.loadCats(amountOfCats);
		hideMeOkay();
	}
});

$('#catButton').click((event) => {
	//gets number of cats from input
	let amountOfCats = $('#inputText').val();
	console.log("cats from button", amountOfCats);
	//triggers api
	cats.loadCats(amountOfCats);
	hideMeOkay();
});

const hideMeOkay = () => {
	$("#catButton, #kittyInput").addClass("hidden");
};

module.exports = {};