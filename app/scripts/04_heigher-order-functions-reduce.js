/**
 * Standard
 *
*/
(function(){
	let orders = [
		{ amount: 250 },
		{ amount: 400 },
		{ amount: 100 },
		{ amount: 325 },
		{ amount: 234 }
	]

	let total_amount = 0;

	for (let i = 0; i < orders.length; i++) {
		total_amount += orders[i].amount;
	}

	console.log('Total Amount:', total_amount);
})();



/**
 * Higher Order Functions
 *
*/
(function(){
	let orders = [
		{ amount: 250 },
		{ amount: 400 },
		{ amount: 100 },
		{ amount: 325 },
		{ amount: 234 }
	]

	/**
	 * ES6
	 *
	 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	*/
	let total_amount = orders.reduce((sum, order) => sum + order.amount, 0);

	// ES5
	// let total_amount = orders.reduce(function(sum, order){
	// 	return sum + order.amount;
	// }, 0);

	console.log('Total Amount:', total_amount);
})();
