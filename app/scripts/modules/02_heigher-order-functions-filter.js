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
	]

	let dogs = [];

	for (let i = 0; i < animals.length; i++) {
		if (animals[i].species === 'dog') {
			dogs.push(animals[i]);
		}
	}

	console.log(JSON.stringify(dogs));
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
	]

	/**
	 * ES6
	 *
	 * Filter
	 * Arrow Function
	 *
	 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	*/
	let dogs = animals.filter((x) => x.species === 'dog');

	// ES5
	// let dogs = animals.filter(function(animals){
	// 	return animals.species === 'dog';
	// });

	console.log(JSON.stringify(dogs));
})();
