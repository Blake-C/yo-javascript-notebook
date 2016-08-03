/**
 * Standard
 *
*/
(function(){
	function getStockSymbols(stocks) {
		let symbols = [];
		let counter;
		let stock;

		for ( counter = 0; counter < stocks.length; counter++ ) {
			stock = stocks[counter];
			symbols.push(stock.symbol);
		}

		return symbols;
	}

	let symbols = getStockSymbols([
		{ symbol: 'ABC', price: 123.22, volume: 234444 },
		{ symbol: 'WER', price: 32.29, volume: 24321 },
		{ symbol: 'RFG', price: 566.88, volume: 78544 },
	]);

	console.log(JSON.stringify( symbols ));
})();



/**
 * Asynchronous
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
(function(){
	function getStockSymbols(stocks) {
		let symbols = [];

		stocks.forEach(function(stock) {
			symbols.push(stock.symbol);
		});

		return symbols;
	}

	let symbols = getStockSymbols([
		{ symbol: 'ABC', price: 123.22, volume: 234444 },
		{ symbol: 'WER', price: 32.29, volume: 24321 },
		{ symbol: 'RFG', price: 566.88, volume: 78544 },
	]);

	console.log(JSON.stringify( symbols ));
})();
