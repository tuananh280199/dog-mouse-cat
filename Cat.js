function Cat(){
	this.stomach = []
}

Cat.prototype.eat = function(a){
	return a;
}

module.exports = Cat;