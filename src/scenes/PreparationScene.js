const shipDatas = [
	{size: 4,direction:'row',startX  :10,startY:345},
	{size: 3,direction:'row',startX : 10,startY : 390},
	{size:3,direction:'row',startX:120,startY:390},
	{size:2,direction:'row',startX:10,startY:435},
	{size:2,direction:'row',startX:88,startY:435},
	{size:2,direction:'row',startX:167,startY:435},
	{size:1,direction:'row',startX:10,startY:480},
	{size:1,direction:'row',startX:55,startY:480},
	{size:1,direction:'row',startX:100,startY:480},
	{size:1,direction:'row',startX:145,startY:480}
];

class PreparationScene extends Scene {
	draggedShip = null;
	draggedOffsetX = null;
	draggedOffsetY = null;

	init(){
		for(const {size,direction,startX,startY} of shipDatas){
			const ship = new ShipView(size,direction,startX,startY);
			this.app.player.addShip(ship);
		}
	}
	start(){
		console.log('start');
	}

	update(){
		const {mouse,player} = this.app;
		if (!this.draggedShip && mouse.left && !mouse.pLeft){ //начинаем что-то тянуть
			const ship = player.ships.find(ship => ship.isUnder(mouse));
			if(ship){
				this.draggedShip = ship;
				const shipRect = ship.div.getBoundingClientRect();
				this.draggedOffsetX = mouse.x - shipRect.left;
				this.draggedOffsetY = mouse.y - shipRect.top;
				console.log(this.draggedShip);
			}
		}

		if(mouse.left && this.draggedShip){ //перетаскиваем корабль
			const {left,top} = player.root.getBoundingClientRect();
			this.draggedShip.div.style.left = `${mouse.x - left - this.draggedOffsetX}px`;
			this.draggedShip.div.style.top = `${mouse.y - top -this.draggedOffsetY}px`
		}

		if(!mouse.left && this.draggedShip){ //если уже не тянем но есть перетаскиваемый корабль
			if(!this.draggedShip.placed){ //если не встал на поле
				player.shipRestart(this.draggedShip);
			}
			this.draggedShip = null;
			
		}
	}
}