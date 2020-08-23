var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Tom');
var cat = new Cat();
var mouse = new Mouse('Mickey');
cat.eat(mouse);
try {
	cat.eat(dog);
} catch(error) {
	console.log('Error')
}
console.log(cat);
dog.sayHi();