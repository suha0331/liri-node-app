function DigitalPal(hungry, sleepy, bored, age){
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
}

function feed() {
	if (this.hungry === true) {
		console.log("That was yummy!")
		this.hungry === false
		this.sleepy === true
	}
	else {
		console.log("No thanks! I'm full.")
	}
}

function sleep() {
	if (this.sleepy === true) {
		console.log("Zzzzzzzz")
		this.sleepy === false
		this.bored === true
		increaseAge()
	}
	else {
		console.log("No way! I'm not tired")
	}
}

function play() {
	if (this.bored === true) {
		console.log("Yay! Let's play!")
		this.bored === false
		this.hungry === true
	}
	else {
		console.log("Not right now. Later?")
	}
}

function increaseAge() {
	if (this.sleepy === true) {
		this.age += 1
		console.log("HBD to me! I am " + this.age + " years old!")
	}
}

var dog = new DigitalPal();


dog.outside = false;

dog.bark = function() {
	console.log("Woof! Woof!")
}

dog.goOutside = function() {
	if (outside === false) {
		console.log("Yay! I love the outdoors!")
		outside === true
		bark()
	}
	else (outside === true) {
		console.log("We're already outside though...")
	}
}

dog.goInside = function() {
	if (outside === true) {
		console.log("Do we have to? Fine...")
		outside === false
	}
	else (outise === false) {
		console.log("I'm already inside")
	}
}


var cat = new DigitalPal();

cat.HouseCondition = 100

cat.meow = function() {
	console.log("Meow! Meow!")
}

cat.distroyFurniture = function() {
	cat.HouseCondition -= 10
	console.log("MUHAHA! TAKE THAT FURNITURE!")
}

cat.buyNewFurniture = function () {
	cat.HouseCondition += 50
	console.log("Are you sure about that?")
}

