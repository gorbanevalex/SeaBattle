class Mouse {
	element = null;
	under = false; //наведена ли мышь на элемент
	pUnder = false; 

	x = null;
	y = null; //координаты мыши

	pX = null;
	pY = null;

	left = false; //прожата ли левая кнопка мыши
	pLeft = false;

	delta = 0; //колесико мыши 
	pDelta = 0;

	constructor(element){
			this.element = element;
			
			const update = (e) =>{
				this.x = e.clientX;
				this.y = e.clientY;
				this.under = true;
				this.delta = 0;
			}

			element.addEventListener('mousemove',e =>{
				this.tick();
				update(e);
			});

			element.addEventListener('mouseenter',e =>{
				this.tick();
				update(e);
			})

			element.addEventListener('mouseleave',e =>{
				this.tick();
				update(e);
				this.under = false;
			})

			element.addEventListener('mousedown',e =>{
				this.tick();
				update(e);
				if(e.button == 0){
					this.left = true;
				}
			})

			element.addEventListener('mouseup',e =>{
				this.tick();
				update(e);
				if(e.button == 0){
					this.left = false;
				}
			})

			element.addEventListener('wheel',e =>{
				this.tick();
				update(e);
				this.delta = e.deltaY > 0 ? 1 : -1;
			})
	}


	tick(){
		this.Px = this.x;
		this.pY = this.y;
		this.pUnder = this.undex;
		this.pLeft = this.left;
		this.pDelta = this.delta;
	}

}