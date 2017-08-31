function calc(){
	var arrAB, result;
	this.setNumber = function(a, b){
		return arrAB = [a,b];
	};
	this.sum = function(){
		result = arrAB[0] + arrAB[1];
		alert(result);
	},
	this.sub = function(){
		result = arrAB[0] - arrAB[1];
		alert(result);
	},
	this.divi = function(){
		result = arrAB[0] / arrAB[1];
		alert(result);
	},
	this.mult = function(){
		result = arrAB[0] * arrAB[1];
		alert(result);
	}
	this.result = function(){
		console.log(result);
		alert(result);
	}
}

var calculator = new calc();
calculator.setNumber(8,2);
calculator.sum();
/*calculator.result();*/


