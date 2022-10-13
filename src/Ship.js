class Ship {

	size = null;
	direction = null;
	killed = false;

	x = 0;
	y = 0;

	get placed(){ //находится на игровом поле
		return this.x!==0 && this.y!==0;
	}

	constructor(size,direction){
		this.size = size;
		this.direction = direction;
	}
}