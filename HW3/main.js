
/*двумерный массив размерностью 10 на 10 элементов, заполненный случайными числами*/
var mainArr = [], i, j;
for (i = 0; i < 10; i++){
	mainArr[i] = [];
	for (j = 0; j < 10; j++){
		mainArr[i][j] = Math.floor(Math.random() * 101);
	};
};
console.table(mainArr);

/*Обойти получившийся массив из конца в начало. (Правый нижний элемент до левого верхнего)*/
for (i = mainArr.length -1;i>=0;i--){
	for (j = mainArr[i].length -1;j>=0;j--){
		console.log(mainArr[i][j]);
	};
};

/*Получить значения элементов, лежащих на периметре получившегося массива от левого верхнего угла по часовой стрелке. Вывести значения в результирующий массив.
*/
console.log('пробел');
var arrTop = [],
	arrBottom = [],
	arrLeft = [],
	arrRight = []
	arrResult = [];
arrTop = mainArr[0].slice();
arrBottom = mainArr[mainArr.length - 1].slice().reverse();
for (i = 1; i <= mainArr[i].length - 2; i++){
	arrRight.push(mainArr[i][mainArr[i].length - 1]);
};
for (i = mainArr[i].length - 2; i >= 1; i--){
	arrLeft.push(mainArr[i][0]);
};

arrResult = arrTop.concat(arrRight, arrBottom, arrLeft);

console.log(arrResult);