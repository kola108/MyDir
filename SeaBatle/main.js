var i, j, player1, player2, lvl1Ships, lvl2Ships, lvl3Ships, lvl4Ships, ships, player1Field, player2Field;
player1 = {
	turn: true,
	shipLeft1: 4,
	shipLeft2: 3,
	shipLeft3: 2,
	shipLeft4: 1,
	setShips: setShips,
	/*Функция выстрела игрока1 по полю игрока 2*/
	shot: function(i,j){
		player1.turnCounter++;
		if(player2.field[i][j] == "+"){
			/*ранил*/
			player2.field[i][j] = "X";
			/*делаем пометку на видимом для нас поле противника*/
			player1.enemyField[i][j] = "X";
			player1.journaOfBattle.pop();
			player1.journaOfBattle.push("Попал!!!");

			if(i === 1){
				if(
					(player2.field[i][j-1] == '+') ||
					(player2.field[i][j+1] == '+') ||
					(player2.field[i+1][j-1] == '+') ||
					(player2.field[i+1][j+1] == '+') ||
					(player2.field[i+1][j] == '+')
					){
					player1.journaOfBattle.pop();
					player1.journaOfBattle.push("Ранил!!!");
				}
			} else if(i === 10){
					if(
						(player2.field[i][j-1] == '+') ||
						(player2.field[i][j+1] == '+') ||
						(player2.field[i-1][j-1] == '+') ||
						(player2.field[i-1][j+1] == '+') ||
						(player2.field[i-1][j] == '+')
						){
						player1.journaOfBattle.pop();
						player1.journaOfBattle.push("Ранил!!!")
					}
			} else {
					if(
						(player2.field[i][j-1] == '+') ||
						(player2.field[i][j+1] == '+') ||
						(player2.field[i+1][j-1] == '+') ||
						(player2.field[i+1][j+1] == '+') ||
						(player2.field[i-1][j-1] == '+') ||
						(player2.field[i-1][j+1] == '+') ||
						(player2.field[i-1][j] == '+') ||
						(player2.field[i+1][j] == '+')
						){
						player1.journaOfBattle.pop();
						player1.journaOfBattle.push("Ранил!!!")
					} else {
						player1.journaOfBattle.pop();
						player1.journaOfBattle.push("Есть вероятность что убил!!!")
					}
			}
		/*промахнулся*/
		} else if(player2.field[i][j] == " "){
			player2.field[i][j] = ".";
			player1.journaOfBattle.pop();
			player1.journaOfBattle.push("Промахнулся!!!");
			/*делаем пометку на видимом для нас поле противника*/
			player1.enemyField[i][j] = ".";
			/*если не попал, то следующий ход за противником*/
			player1.turn = false;
			player2.turn = true;
		}
		console.log("Игрок 1, ход: " + player1.turnCounter + "; выстрел по координатам " + i + "." + j + " - " + player1.journaOfBattle);
	},
	/*создаем журнал ведения боя для игрока1*/
	journaOfBattle: ['начало'],
	/*счетчик ходов*/
	turnCounter: 1
};

player2 = {
	turn: false,
	shipLeft1: 4,
	shipLeft2: 3,
	shipLeft3: 2,
	shipLeft4: 1,
	setShips: setShips,
	shot: function(i,j){
		player2.turnCounter++;
		if(player1.field[i][j] == "+"){
			player1.field[i][j] = "X";
			/*делаем пометку на видимом для нас поле противника*/
			player2.enemyField[i][j] = "X";
			player2.journaOfBattle.pop();
			player2.journaOfBattle.push("Попал!!!");
			if(i === 1){
				if(
					(player1.field[i][j-1] == '+') ||
					(player1.field[i][j+1] == '+') ||
					(player1.field[i+1][j-1] == '+') ||
					(player1.field[i+1][j+1] == '+') ||
					(player1.field[i+1][j] == '+')
					){
					player2.journaOfBattle.pop();
					player2.journaOfBattle.push("Ранил!!!")
				}
			} else if(i === 10){
					if(
						(player1.field[i][j-1] == '+') ||
						(player1.field[i][j+1] == '+') ||
						(player1.field[i-1][j-1] == '+') ||
						(player1.field[i-1][j+1] == '+') ||
						(player1.field[i-1][j] == '+')
						){
						player2.journaOfBattle.pop();
						player2.journaOfBattle.push("Ранил!!!")
					}
			} else {
					if(
						(player1.field[i][j-1] == '+') ||
						(player1.field[i][j+1] == '+') ||
						(player1.field[i+1][j-1] == '+') ||
						(player1.field[i+1][j+1] == '+') ||
						(player1.field[i-1][j-1] == '+') ||
						(player1.field[i-1][j+1] == '+') ||
						(player1.field[i-1][j] == '+') ||
						(player1.field[i+1][j] == '+')
						){
						player2.journaOfBattle.pop();
						player2.journaOfBattle.push("Ранил!!!")
					} else {
						player2.journaOfBattle.pop();
						player2.journaOfBattle.push("Есть вероятность что убил!!!")
					}
			}
		/*промахнулся*/
		} else if(player1.field[i][j] == " "){
			player1.field[i][j] = ".";
			player2.journaOfBattle.pop();
			player2.journaOfBattle.push("Промахнулся!!!");
			/*делаем пометку на видимом для нас поле противника*/
			player2.enemyField[i][j] = ".";
			/*если не попал, то следующий ход за противником*/
			player2.turn = false;
			player1.turn = true;
		}
		console.log("Игрок 2, ход: " + player2.turnCounter + "; выстрел по координатам " + i + "," + j + " - " + player2.journaOfBattle);
	},
	/*создаем журнал ведения боя для игрока1*/
	journaOfBattle: ['начало'],
	/*счетчик ходов*/
	turnCounter: 1
};

/*Запуск игры*/
function startGame(){
	/*Создание полей для игрока1 и игорка2*/
	player1.field =[];
	for (i = 1; i <= 10; i++){
		player1.field[i] = [];
		for (j = 1; j <= 10; j++){
			player1.field[i][j] = ' ';
		};
	};
	player2.field =[];
	for (i = 1; i <= 10; i++){
		player2.field[i] = [];
		for (j = 1; j <= 10; j++){
			player2.field[i][j] = ' ';
		};
	};
	player1.enemyField =[];
	for (i = 1; i <= 10; i++){
		player1.enemyField[i] = [];
		for (j = 1; j <= 10; j++){
			player1.enemyField[i][j] = ' ';
		};
	};
	player2.enemyField =[];
	for (i = 1; i <= 10; i++){
	player2.enemyField[i] = [];
		for (j = 1; j <= 10; j++){
			player2.enemyField[i][j] = ' ';
		};
	};
	/*создаем макеты кораблей учавствующих в бою для игрока1 и игорка2*/
	lvl1Ships = [1,2,3,4];
	lvl2Ships = [1,2,3];
	lvl3Ships = [1,2];
	lvl4Ships = [1];
	player1.ships = [lvl1Ships, lvl2Ships, lvl3Ships, lvl4Ships];
	lvl1Ships = [1,2,3,4];
	lvl2Ships = [1,2,3];
	lvl3Ships = [1,2];
	lvl4Ships = [1];
	player2.ships = [lvl1Ships, lvl2Ships, lvl3Ships, lvl4Ships];
}

/*функция позволяющая расстовлять корабли на поля, которая принимает в себя 4 аргумента: 
первыет 2-е - координаты x,y, 3-ий аргумент - палубность устонавлевоемого коробляБ 4-й аргумент - 
напровление коробля*/
function setShips(i, j, n, direction){
	if (i === 1) {
		if (direction === 'horizontal'){
			switch(n){
				case 1:
					if(
						(this.ships[0][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.shipLeft[0] = this.ships[0].pop() - 1;
						}
					break;
				case 2:
					if(
						(this.ships[1][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i+1][j+2] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.shipLeft[1] = this.ships[1].pop() - 1;
						}
					break;
				case 3:
					if(
						(this.ships[2][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i+1][j+2] !== '+') &&
						(this.field[i][j+3] !== '+') &&
						(this.field[i+1][j+3] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.field[i][j+2] = '+';
						this.shipLeft[2] = this.ships[2].pop() - 1;
						}

					break;
				case 4:
					if(
						(this.ships[3][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i+1][j+2] !== '+') &&
						(this.field[i][j+3] !== '+') &&
						(this.field[i+1][j+3] !== '+') &&
						(this.field[i][j+4] !== '+') &&
						(this.field[i+1][j+4] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.field[i][j+2] = '+';
						this.field[i][j+3] = '+';
						this.shipLeft[3] = this.ships[3].pop() - 1;
						}
					break;
			}
		}	else if (direction === 'vertical'){
				switch(n){
				case 1:
					if(
						(this.ships[0][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.shipLeft1 = this.ships[0].pop() - 1;
						}
					break;
				case 2:
					if(
						(this.ships[1][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i+2][j-1] !== '+') &&
						(this.field[i+2][j] !== '+') &&
						(this.field[i+2][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.shipLeft2 = this.ships[1].pop() - 1;
						}
					break;
				case 3:
					if(
						(this.ships[2][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i+2][j-1] !== '+') &&
						(this.field[i+2][j] !== '+') &&
						(this.field[i+2][j+1] !== '+') &&
						(this.field[i+3][j-1] !== '+') &&
						(this.field[i+3][j] !== '+') &&
						(this.field[i+3][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.field[i+2][j] = '+';
						this.shipLeft3 = this.ships[2].pop() - 1;
						}
					break;
				case 4:
					if(
						(this.ships[3][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i+2][j-1] !== '+') &&
						(this.field[i+2][j] !== '+') &&
						(this.field[i+2][j+1] !== '+') &&
						(this.field[i+3][j-1] !== '+') &&
						(this.field[i+3][j] !== '+') &&
						(this.field[i+3][j+1] !== '+') &&
						(this.field[i+4][j-1] !== '+') &&
						(this.field[i+4][j] !== '+') &&
						(this.field[i+4][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.field[i+2][j] = '+';
						this.field[i+3][j] = '+';
						this.shipLeft4 = this.ships[3].pop() - 1;
						}
					break;
					}
		}
	}
	else if (i === 10) {
		if (direction === 'horizontal'){
			switch(n){
				case 1:
					if(
						(this.ships[0][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.shipLeft1 = this.ships[0].pop() - 1;
						}
					break;
				case 2:
					if(
						(this.ships[1][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i-1][j+2] !== '+') &&
						(this.field[i][j+2] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.shipLeft2 = this.ships[1].pop() - 1;
						}
					break;
				case 3:
					if(
						(this.ships[2][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i-1][j+2] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i-1][j+3] !== '+') &&
						(this.field[i][j+3] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.field[i][j+2] = '+';
						this.shipLeft3 = this.ships[2].pop() - 1;
						}

					break;
				case 4:
					if(
						(this.ships[3][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i-1][j+2] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i-1][j+3] !== '+') &&
						(this.field[i][j+3] !== '+') &&
						(this.field[i-1][j+4] !== '+') &&
						(this.field[i][j+4] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.field[i][j+2] = '+';
						this.field[i][j+3] = '+';
						this.shipLeft4 = this.ships[3].pop() - 1;
						}
					break;
			}
		}	else if (direction === 'vertical'){
				switch(n){
				case 1:
					if(
						(this.ships[0][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.shipLeft1 = this.ships[0].pop() - 1;
						}
					break;
				case 2:
					if(
						(this.ships[1][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.shipLeft2 = this.ships[1].pop() - 1;
						}
					break;
				case 3:
					if(
						(this.ships[2][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.field[i+2][j] = '+';
						this.shipLeft3 = this.ships[2].pop() - 1;
						}
					break;
				case 4:
					if(
						(this.ships[3][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.field[i+2][j] = '+';
						this.field[i+3][j] = '+';
						this.shipLeft4 = this.ships[3].pop() - 1;
						}
					break;
					}
		}
	}
	else{
		if (direction === 'horizontal'){
			switch(n){
				case 1:
					if(
						(this.ships[0][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.shipLeft1 = this.ships[0].pop() - 1;
						}
					break;
				case 2:
					if(
						(this.ships[1][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i-1][j+2] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i+1][j+2] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.shipLeft2 = this.ships[1].pop() - 1;
						}
					break;
				case 3:
					if(
						(this.ships[2][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i-1][j+2] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i+1][j+2] !== '+') &&
						(this.field[i-1][j+3] !== '+') &&
						(this.field[i][j+3] !== '+') &&
						(this.field[i+1][j+3] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.field[i][j+2] = '+';
						this.shipLeft3 = this.ships[2].pop() - 1;
						}

					break;
				case 4:
					if(
						(this.ships[3][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i-1][j+2] !== '+') &&
						(this.field[i][j+2] !== '+') &&
						(this.field[i+1][j+2] !== '+') &&
						(this.field[i-1][j+3] !== '+') &&
						(this.field[i][j+3] !== '+') &&
						(this.field[i+1][j+3] !== '+') &&
						(this.field[i-1][j+4] !== '+') &&
						(this.field[i][j+4] !== '+') &&
						(this.field[i+1][j+4] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i][j+1] = '+';
						this.field[i][j+2] = '+';
						this.field[i][j+3] = '+';
						this.shipLeft4 = this.ships[3].pop() - 1;
						}
					break;
			}
		}	else if (direction === 'vertical'){
				switch(n){
				case 1:
					if(
						(this.ships[0][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.shipLeft1 = this.ships[0].pop() - 1;
						}
					break;
				case 2:
					if(
						(this.ships[1][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i+2][j-1] !== '+') &&
						(this.field[i+2][j] !== '+') &&
						(this.field[i+2][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.shipLeft2 = this.ships[1].pop() - 1;
						}
					break;
				case 3:
					if(
						(this.ships[2][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i+2][j-1] !== '+') &&
						(this.field[i+2][j] !== '+') &&
						(this.field[i+2][j+1] !== '+') &&
						(this.field[i+3][j-1] !== '+') &&
						(this.field[i+3][j] !== '+') &&
						(this.field[i+3][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.field[i+2][j] = '+';
						this.shipLeft3 = this.ships[2].pop() - 1;
						}
					break;
				case 4:
					if(
						(this.ships[3][0] === 1) &&
						(this.field[i][j] !== '+') &&
						(this.field[i-1][j-1] !== '+') &&
						(this.field[i][j-1] !== '+') &&
						(this.field[i+1][j-1] !== '+') &&
						(this.field[i-1][j] !== '+') &&
						(this.field[i+1][j] !== '+') &&
						(this.field[i-1][j+1] !== '+') &&
						(this.field[i][j+1] !== '+') &&
						(this.field[i+1][j+1] !== '+') &&
						(this.field[i+2][j-1] !== '+') &&
						(this.field[i+2][j] !== '+') &&
						(this.field[i+2][j+1] !== '+') &&
						(this.field[i+3][j-1] !== '+') &&
						(this.field[i+3][j] !== '+') &&
						(this.field[i+3][j+1] !== '+') &&
						(this.field[i+4][j-1] !== '+') &&
						(this.field[i+4][j] !== '+') &&
						(this.field[i+4][j+1] !== '+')
						){
						this.field[i][j] = '+';
						this.field[i+1][j] = '+';
						this.field[i+2][j] = '+';
						this.field[i+3][j] = '+';
						this.shipLeft4 = this.ships[3].pop() - 1;
						}
					break;
					}
		}
	};
	/*Завершение установки кароблей*/
	setingShipsEnd();
}
function setingShipsEnd(){
	if (
		(player1.shipLeft1 === 0) &&
		(player1.shipLeft2 === 0) &&
		(player1.shipLeft3 === 0) &&
		(player1.shipLeft4 === 0)
		){
		player2.turn = true;
		player1.turn = false;
	}
	if (
		(player2.shipLeft1 === 0) &&
		(player2.shipLeft2 === 0) &&
		(player2.shipLeft3 === 0) &&
		(player2.shipLeft4 === 0)
		){
		player1.turn = true;
		player2.turn = false;
	}
}

/*создаем отображение поля противника исключая расположение его короблей*/


startGame();







player1.setShips(1,1,4, 'vertical');
player1.setShips(6,1,3, 'horizontal');
player1.setShips(8,1,3, 'horizontal');
player1.setShips(10,1,2, 'horizontal');
player1.setShips(2,4,2, 'horizontal');
player1.setShips(1,9,2, 'vertical');
player1.setShips(4,5,1, 'vertical');
player1.setShips(7,6,1, 'vertical');
player1.setShips(9,10,1, 'vertical');
player1.setShips(9,7,1, 'vertical');

player2.setShips(2,10,4, 'vertical');
player2.setShips(6,8,3, 'vertical');
player2.setShips(10,4,3, 'horizontal');
player2.setShips(2,2,2, 'horizontal');
player2.setShips(5,2,2, 'horizontal');
player2.setShips(2,6,2, 'horizontal');
player2.setShips(7,2,1, 'horizontal');
player2.setShips(5,5,1, 'horizontal');
player2.setShips(7,5,1, 'horizontal');
player2.setShips(9,10,1, 'horizontal');


player1.shot(1,1);
player2.shot(1,1);
player2.shot(2,1);
player2.shot(3,1);
player2.shot(4,1);
player2.shot(6,1);
player2.shot(8,1);
/*player2.shot(10,1);
player2.shot(1,3);
player1.shot(6,7);
player2.shot(6,2);
player2.shot(6,3);
player2.shot(8,2);
player2.shot(8,3);
player2.shot(10,2);
player2.shot(10,3);
player1.shot(2,4);
player2.shot(2,4);
player2.shot(2,5);
player2.shot(9,10);
player2.shot(7,9);
player1.shot(1,9);
player2.shot(1,9);
player2.shot(2,9);
player2.shot(4,5);
player2.shot(6,5);
player1.shot(7,6);
player2.shot(7,6);
player2.shot(9,8);
player1.shot(9,7);
player2.shot(9,7);*/









































































if(player1.turn){
	console.log('Поле Игрока 1');
	console.table(player1.field);
	if (
		(player1.shipLeft1 !== 0) ||
		(player1.shipLeft2 !== 0) ||
		(player1.shipLeft3 !== 0) ||
		(player1.shipLeft4 !== 0)
		){
	console.log("Осталось однопалубных кораблей " + player1.shipLeft1);
	console.log("Осталось двухпалубных кораблей " + player1.shipLeft2);
	console.log("Осталосьтрехпалубных кораблей " + player1.shipLeft3);
	console.log("Осталось четырехпалубных кораблей " + player1.shipLeft4);
	} else{
	console.log('Вражеское поле Игрока 2');
	console.table(player1.enemyField);
	}
}
if(player2.turn){
	console.log('Поле Игрока 2');
	console.table(player2.field);
	if (
		(player2.shipLeft1 !== 0) ||
		(player2.shipLeft2 !== 0) ||
		(player2.shipLeft3 !== 0) ||
		(player2.shipLeft4 !== 0)
		){
	console.log("Осталось однопалубных кораблей " + player2.shipLeft1);
	console.log("Осталось двухпалубных кораблей " + player2.shipLeft2);
	console.log("Осталосьтрехпалубных кораблей " + player2.shipLeft3);
	console.log("Осталось четырехпалубных кораблей " + player2.shipLeft4);
	} else{
	console.log('Вражеское поле Игрока 1');
	console.table(player2.enemyField);
	}
}

/*Условия конца игры*/
var sh1, sh2;
if(player1.turnCounter > 1){
	sh1 = 0;
	for (i = 1; i <= 10; i++){
		for (j = 1; j <= 10; j++){
			if(player1.field[i][j] == '+'){sh1++}
		};
	};
}
if(player2.turnCounter > 1){
	sh2 = 0;
	for (i = 1; i <= 10; i++){
		for (j = 1; j <= 10; j++){
			if(player2.field[i][j] == '+'){sh2++}
		};
	};
}
if(sh1 == 0){alert('Выиграл Игрок 2!')};
if(sh2 == 0){alert('Выиграл Игрок 1!')}

