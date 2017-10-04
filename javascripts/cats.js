"use strict";

let dom = require("./dom");

let catsData = [];

const loadCats = (catsValue) => {
	$.ajax(`https://random-dogs-api.herokuapp.com/cats/${catsValue}`).done((data) => {
		catsData = data.cats;
		dom.buildDomString(catsData);
	}).fail((error) => {
		console.log(error);
	});
};

const getCatsData = () => {
	return catsData;
};

module.exports = {loadCats, getCatsData};