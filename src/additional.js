function getRandomBetween(max,min){
	return min + Math.floor(Math.random() * (max - min +1));
}

function getRandomFrom(...args){
	const index = Math.floor(Math.random() * args.length);
	return args[index];
}


function isUnderPoint(point,elem){
	const {x,y} = point;
	const {left,top,width,height} = elem.getBoundingClientRect();

	return left<=x && x<=left+width && top<=y && y<= top+height;
}