class BattlefieldView extends Battlefield {
		root = null;//само приложение
		table = null;//таблица
		dock = null;//все корабли
		polygon = null;//все выстрелы
		cells = [];//tr элементы

		constructor(){
			super();

			const root = document.createElement('div');
			root.classList.add('battlefield');
			
			const table = document.createElement('table');
			table.classList.add('battlefield-table');
			
			const dock = document.createElement('div');
			dock.classList.add('battlefield-dock');

			const polygon = document.createElement('div');
			polygon.classList.add('battlefield-polygon');

			Object.assign(this, {root,table,dock,polygon});

			root.append(table,dock,polygon);

			for(let y = 0;y<10;y++){ //генерирование таблицы поля
				const row = [];
				const tr = document.createElement('tr');
				tr.classList.add('battlefield-row');
				tr.dataset.y = y;

				for(let x =0;x<10;x++){
					const td = document.createElement('td');
					td.classList.add('battlefield-item');
					Object.assign(td.dataset,{x,y});
					tr.append(td);
					row.push(td);
				}
				table.append(tr);
				this.cells.push(row);
			}

			for(let x = 0;x<10;x++){ //создание букв над ячейками поля
				const cell = this.cells[0][x];
				const marker = document.createElement('div');
				marker.textContent = 'АБВГДЕЖЗИК'[x];
				marker.classList.add('marker','marker-column');
				cell.append(marker);
			}

			for(let y = 0;y<10;y++){ //создание цифр слева от ячеек поля
				const cell = this.cells[y][0];
				const marker = document.createElement('div');
				marker.textContent = y+1;
				marker.classList.add('marker','marker-row');
				cell.append(marker);
			}
		}
	
}