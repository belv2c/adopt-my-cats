"use strict";

const buildDomString = (wowCats) => {
	let endCat = "";
	for (var i = 0; i < wowCats.length; i++){
	let catString = "";

	catString +=  `<div class="cat-card col-md-3">`;
	catString +=	`<div class="image-container">`;
	catString +=		`<img src="${wowCats[i].imageUrl}">`;
	catString +=	`</div>`;
	catString +=	`<div class="description-container">`;
	catString +=		`<h3> ${wowCats[i].name} </h3>`;
	catString +=		`<p> Color: ${wowCats[i].color} </p>`;
	catString +=		`<p> Skills: ${wowCats[i].specialSkill} </p>`;
	if (wowCats[i].numberOfToes <= 10) {
		catString +=	`<p class="disabled-cat"> Toes: ${wowCats[i].numberOfToes}> </p>`;
	} else {
		catString += 	`<p> Toes: ${wowCats[i].numberOfToes} </p>`;
	}

	catString += 		`</div>`;
	catString +=  `</div>`;
	endCat += catString;
	}

	printDomString(endCat);
};

const printDomString = (string) => {
	$("#catContainer").html(string);
};

module.exports = {buildDomString};