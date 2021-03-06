// Strategy pattern
// Changing functionality goes into new function
// Define a family of algorithms, encapsulate each one, and make them interchangeable. 
// Strategy lets the algorithm vary independently from clients that use it.

var products = [
	{id: 6, name : "Pen", cost : 50, units : 70, category : 1},
	{id: 9, name : "Hen", cost : 80, units : 40, category : 2},
	{id: 3, name : "Ten", cost : 90, units : 90, category : 1},
	{id: 5, name : "Den", cost : 50, units : 50, category : 2},
	{id: 7, name : "Len", cost : 40, units : 30, category : 1},
	{id: 2, name : "Zen", cost : 60, units : 60, category : 1}
];

function print(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

print("Default products list", function(){
	console.table(products);	
});

print("Sorting", function(){
	print("Default Sort", function(){
		function sort(){
			for(var i=0;i < products.length - 1; i++)
				for(var j= i+1; j<products.length; j++){
					var left = products[i],
						right = products[j];
					if (left.id > right.id){
						products[i] = products[j];
						products[j] = left;
					}
				}
		}
		sort();
		console.table(products);
	});
	print("Generalized sort with attribute name [cost]", function(){
		function sort(list, attrName){
			for(var i=0;i < list.length - 1; i++)
				for(var j= i+1; j<list.length; j++){
					var left = list[i],
						right = list[j];
					if (left[attrName] > right[attrName]){
						list[i] = list[j];
						list[j] = left;
					}
				}
		}
		sort(products, "cost");
		console.table(products);
	});
	print("Generalized sort with comparerFn [value = units * cost]", function(){
		function sort(list, comparerFn){
			for(var i=0;i < list.length - 1; i++)
				for(var j= i+1; j<list.length; j++){
					var left = list[i],
						right = list[j];
					if (comparerFn(left, right) > 0 ){
						list[i] = list[j];
						list[j] = left;
					}
				}
		}
		var productComparerByValue = function(p1, p2){
			var p1Value = p1.units * p1.cost,
				p2Value = p2.units * p2.cost;
			if (p1Value < p2Value) return -1;
			if (p1Value === p2Value) return 0;
			return 1;
		}
		sort(products, productComparerByValue);
		console.table(products);
	});
});

