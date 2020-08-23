function Mouse(){
	this.name = name;
	this.dead = false;
	this.stomach = [];
}

Mouse.prototype.die = function(){
	this.dead = true;
}

Mouse.prototype.eat = function(a){
	this.stomach.push(a)
}