function calc(){
	var arrAB, result;
	this.setNumber = function(a, b){
		return arrAB = [a,b];
	};
	this.sum = function(){
		result = arrAB[0] + arrAB[1];
	},
	this.sub = function(){
		result = arrAB[0] - arrAB[1];
	},
	this.divi = function(){
		result = arrAB[0] / arrAB[1];
	},
	this.mult = function(){
		result = arrAB[0] * arrAB[1];
	}
	this.result = function(){
		console.log(result);
	}
}

var calculator = new calc();
calculator.setNumber(6,3);
calculator.divi();
calculator.result();


