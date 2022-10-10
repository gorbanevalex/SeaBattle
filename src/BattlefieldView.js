class BattlefieldView extends Battlefield {

	constructor(size,direction){
		super(size,direction)

		const div = document.createElement('div');
		div.classList.add('ship');
	}
}