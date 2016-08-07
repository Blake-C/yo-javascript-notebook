/**
 * Standard
 *
*/
(function(){
	let animals = [
		{ name: 'Fluffykins',	species: 'rabbit' },
		{ name: 'Caro',			species: 'dog' },
		{ name: 'Hamilton',		species: 'dog' },
		{ name: 'Harold',		species: 'fish' },
		{ name: 'Ursula',		species: 'cat' },
		{ name: 'Jimmy',		species: 'fish' }
	];

	let names = [];

	for (let i = 0; i < animals.length; i++) {
		names.push(animals[i].name);
	}

	console.log(JSON.stringify(names));
})();



/**
 * Higher Order Functions
 *
*/
(function(){
	let animals = [
		{ name: 'Fluffykins',	species: 'rabbit' },
		{ name: 'Caro',			species: 'dog' },
		{ name: 'Hamilton',		species: 'dog' },
		{ name: 'Harold',		species: 'fish' },
		{ name: 'Ursula',		species: 'cat' },
		{ name: 'Jimmy',		species: 'fish' }
	];

	/**
	 * ES6
	 *
	 * Map
	 * Arrow Function
	 * Template String
	 *
	 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	*/
	let names = animals.map((x) => `${x.name} is a ${x.species}`);

	// ES5
	// let names = animals.map(function(animals){
	// 	return animals.name;
	// });

	console.log(JSON.stringify(names));
})();
