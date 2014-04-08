function eatBalls(ballColor, formality) {
	if (formality === 'formal') {
	console.log('why hello' + " " + ballColor);
	} else {
 	console.log('sup' + " " + ballColor); 
	}
}


eatBalls('tan', 'casual');
eatBalls('tan', 'formal');

 


















/*var kittens = "flying";


if (kittens == "flying") {
	console.log('fuck your mother!');
}	else if (kittens !== "marching") {
	console.log("eat a fickle dickle");
} else {
	console.log('all is well');
}
*/


/*var chooser = "ted lilly";

if (chooser === "kershaw") {
	console.log('youve picked an ace');
}	else if (chooser === "ted lilly") {
	console.log('youve picked a retired player');
}	else if (chooser === "brandon league") { 
	console.log('youve chosen a bum');
} else {
	console.log('no more dodgers');
}
*/

/*var userChoice = 'coffee';

if (userChoice === 'coffee') {
	console.log('stay up 2 hours');
} else if (userChoice === '5 hour energy') {
	console.log('stay up 5 hours');
} else if (userChoice === 'cocaine') {
	console.log('stay up all night and potentially die');
}	else {
	console.log('sleep');
}
*/


//**********************************FUNCTIONS!**********************************//


/* Simple Function 

//declared
function sayHello () {
	console.log('hello');
	console.log	('world');
}


//called
sayHello();
*/



/* Simple Function w/ Parameter 

function sayHello(name) {
	console.log('hello' + " " + name);
}

sayHello('johnny');
sayHello('matt');
*/



/* Function w/ Two Parameters and If/Else

function sayHello(name, formality) {
	if (formality == 'formal') {
		console.log('why hello' + " " + name);
	} else {
		console.log('whats up' + " " + name);
	}
}

sayHello('johnny', 'formal');
*/




/* Function Replacing console.log w/ Return

function sayHello(name, formality) {
	if (formality == 'formal') {
		return 'why hello' + " " + name
	} else {
		return 'whats up' + " " + name
	}
}
console.log(sayHello('johnny', 'formal'));
*/

/*
var sayHello = function(name, formality) {
	if (formality == 'formal') {
		return 'why hello' + " " + name
	} else {
		return 'whats up' + " " + name
	}
}
console.log(sayHello('johnny', 'formal'));
*/