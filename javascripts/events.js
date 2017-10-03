"use strict";

$('#inputText').keypress((event) => {
	if(event.key === 'Enter'){
		//gets the number of cats from input
		let amountOfCats = $('#inputText').val();
		console.log("cats from enter key", amountOfCats);
		//triggers api
		/*cats.loadCats(amountOfCats);*/

	}
});

$('#catButton').click((event) => {
	//gets number of cats from input
	let amountOfCats = $('#inputText').val();
	console.log("cats from button", amountOfCats);
	//triggers api
	/*cats.loadCats(amountOfCats;)*/
});