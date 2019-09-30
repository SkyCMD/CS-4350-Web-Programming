"use strict";  //tells browser don't allow global variables, etc.

(function(){
	//var vs let vs const
	let x = 1;

	if(x === 1) {
		let x = 2;
		console.log("inside scope");
		console.log(`x = ${x}`); //x = 2
	}

	console.log("outside scope");
	console.log(`x = ${x}`); //x = 1

	var y = 1;
	if(y === 1) {
		var y = 2;
		console.log("inside scope");
		console.log(`y = ${y}`); //x = 2
	}
	
	console.log("outside scope");
	console.log(`y = ${y}`); //x = 2

	const c = 0;

	console.debug(c);

	try {
		c = 3;
	} catch (error) {
		console.error(error);
	}

	//c.toString();

	//Truthy and Falsy

	console.log("false == 'false'", false == 'false'); //false
	console.log("false === 'false'", false === 'false'); //false

	console.log("false == '0'", false == '0'); //true
	console.log("false === '0'", false === '0'); //false

	console.log("' \\t\\r\\n ' == 0", ' \t\r\n ' == 0); //true
	console.log("' \\t\\r\\n ' === 0", ' \t\r\n ' === 0); //false

	let array = [1,2,3,4,5,6,7,8,9,10];
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		console.log(element);
	}
	
	console.log(array);

	array.forEach(function(value, index) {
		console.log("inside forEach loop. value: ", value, "at index: ", index);
	})
	
})();
