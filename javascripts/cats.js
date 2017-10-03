"use strict";

let catsData = [];

const loadCats = (catsValue) => {
	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${catsValue}`).done((data) => {
		catsData = data.cats;
	}).fail((error) =>{
		console.log(error);
	});
};

module.exports = {loadCats};