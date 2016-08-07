import ajax from 'reqwest';

/**
 * Higher Order Functions
 *
*/
(function(){
	/**
	 * ES6
	 *
	 * Reduce
	 * Arrow Function
	 *
	 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	 * @link https://www.youtube.com/watch?v=1DMolJ2FrNY
	*/
	ajax({
		type: 'GET',
		url: 'data-05_heigher-order-functions-reduce-2.txt',
		success: function(response){
			readDate(response.response);
		}
	});

	function readDate(data){
		const newArray = data
			.trim() // Trim line breaks/space at the beginning and end of string
			.split('\n') // Split, method on string object, on new line into array
			.map(line => line.split('\t')) // Map each line and create new arrays. Separated values with split tab
			.reduce((customers, line) => {
				customers[line[0]] = customers[line[0]] || [];
				customers[line[0]].push({
					name: line[1],
					price: line[2],
					quantity: line[3]
				});

				return customers;
			}, {});

		console.log(JSON.stringify(newArray, null, 2));
	}

})();
