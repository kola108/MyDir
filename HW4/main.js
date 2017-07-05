/*Пройти двумерный массив против часовой стрелки от нижней правой точки*/
var i,
	j,
	mainArr = [],
	arrTop = [],
	arrBottom = [],
	arrLeft = [],
	arrRight = []
	arrResult1 = [];
for (i = 0; i < 10; i++){
	mainArr[i] = [];
	for (j = 0; j < 10; j++){
		mainArr[i][j] = Math.floor(Math.random() * 101);
	};
};
console.table(mainArr);
arrTop = mainArr[0].slice().reverse();
arrBottom = mainArr[mainArr.length - 1].slice();
for (i = mainArr.length - 2; i >= 1; i--){
	arrRight.push(mainArr[i][mainArr[i].length - 1]);
};
for (i = 1; i <= mainArr.length - 2; i++){
	arrLeft.push(mainArr[i][0]);
};

arrResult1 = arrBottom.concat(arrRight, arrTop, arrLeft);

console.log(arrResult1);

/*получить эл-ты, лежащие на гранях треугольника, образованного верхней стороной, правой стороной и главной диагональю
направление - от верхнего левого угла*/

var arrMainDiagonal = [];
for (i = 0; i < mainArr.length; i++){
	for(j = 0; j < mainArr[i].length; j++){
		if(i === j){
			arrMainDiagonal.push(mainArr[i][j]);
		}
	}
};

console.log(arrMainDiagonal);

/*Пhойти двумерный массив по спирали от верхнего левого угла*/

var length,
	arrTop1 = [],
	arrBottom1 = [],
	arrLeft1 = [],
	arrRight1 = []
	arrResult2 = [];
	arrTop2 = [],
	arrBottom2 = [],
	arrLeft2 = [],
	arrRight2 = [],
	arrTop3 = [],
	arrBottom3 = [],
	arrLeft3 = [],
	arrRight3 = [],
	arrTop4 = [],
	arrBottom4 = [],
	arrLeft4 = [],
	arrRight4 = [],
	arrTop5 = [],
	arrBottom5 = [];

arrTop1 = mainArr[0].slice();
arrBottom1 = mainArr[mainArr.length - 1].slice().reverse();
for (i = 1; i <= mainArr[i].length - 2; i++){
	arrRight1.push(mainArr[i][mainArr[i].length - 1]);
};
for (i = mainArr[i].length - 2; i >= 1; i--){
	arrLeft1.push(mainArr[i][0]);
};
arrTop2 = mainArr[1].slice();
length = arrTop2.length;
arrTop2 = arrTop2.splice(1, length - 2);
arrBottom2 = mainArr[mainArr.length - 2].slice().reverse();
length = arrBottom2.length;
arrBottom2 = arrBottom2.splice(1, length - 2);
for (i = 2; i <= mainArr[i].length - 3; i++){
	arrRight2.push(mainArr[i][mainArr[i].length - 2]);
};
for (i = mainArr[i].length - 3; i >= 2; i--){
	arrLeft2.push(mainArr[i][1]);
};
arrTop3 = mainArr[2].slice();
length = arrTop3.length;
arrTop3 = arrTop3.splice(2, length - 4);
arrBottom3 = mainArr[mainArr.length - 3].slice().reverse();
length = arrBottom3.length;
arrBottom3 = arrBottom3.splice(2, length - 4);
for (i = 3; i <= mainArr[i].length - 4; i++){
	arrRight3.push(mainArr[i][mainArr[i].length - 3]);
};
for (i = mainArr[i].length - 4; i >= 3; i--){
	arrLeft3.push(mainArr[i][2]);
};
arrTop4 = mainArr[3].slice();
length = arrTop4.length;
arrTop4 = arrTop4.splice(3, length - 6);
arrBottom4 = mainArr[mainArr.length - 4].slice().reverse();
length = arrBottom4.length;
arrBottom4 = arrBottom4.splice(3, length - 6);
for (i = 4; i <= mainArr[i].length - 5; i++){
	arrRight4.push(mainArr[i][mainArr[i].length - 4]);
};
for (i = mainArr[i].length - 5; i >= 4; i--){
	arrLeft4.push(mainArr[i][3]);
};
arrTop5 = mainArr[4].slice();
length = arrTop5.length;
arrTop5 = arrTop5.splice(4, length - 8);
arrBottom5 = mainArr[mainArr.length - 5].slice().reverse();
length = arrBottom5.length;
arrBottom5 = arrBottom5.splice(4, length - 8);

arrResult2 = arrTop1.concat(arrRight1, arrBottom1, arrLeft1, arrTop2, arrRight2, arrBottom2, arrLeft2, arrTop3, arrRight3, arrBottom3, arrLeft3, arrTop4, arrRight4, arrBottom4, arrLeft4, arrTop5, arrBottom5);

console.log(arrResult2);


/*Отзеркалить части массива, разделенные главной диагональю.*/
var addArr = [];
for (i = 0; i < mainArr.length; i++){
	addArr[i] = [];
	for(j = 0; j < mainArr[i].length; j++){
		addArr[i][j] = mainArr[j][i];
	}
};

console.table(addArr);


