var fibonacci = function (n) {
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// Try for below and see response time
// fibonacci(35);
// fibonacci(100);
