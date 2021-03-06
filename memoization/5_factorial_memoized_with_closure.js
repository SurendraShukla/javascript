var factorial = (function ( ) {

	var memo = [0, 1];

	var recur = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = n * recur(n - 1);
			memo[n] = result;
		}
		return result;
	};

	return recur;

}());
