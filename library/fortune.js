
exports.getFortune = function getFortune() {
	var fortunes = ['you will score a goal', 'you will dream of code tonight', 'I am your father', 'beware the valanqar', 'you know nothing, jon snow'];
	var position = Math.floor(Math.random()*fortunes.length);
	return fortunes[position];
	};

