class Calc{
	constructor(a=0, b=0){ /*Есть возможность создать объект калькулятора уже с заданными значеними a и b в противном случае они = 0*/
		this.varA = a;
		this.varB = b;
		this.varPi = Math.PI;
		this.newVarPi = 0; /*Переменная в которой будет лежать значение Пи с нужным для нас количеством чисел после запятой*/
		this.result = 0;
		this.engineerMode = "off";  /*Эта переменная позволяет нам переключаться в режим инженерного калькулятора*/
	}
	/*когда мы вызываем метод работающий с значениями а и b то эти значения записыаются в переменные объекта varA и varB*/
	/*так же мы можем ничего не указывать в аргументах методов калькулятора, в таокм случае действия будут производится с заданными a и b, которые появились при создании калькулятора*/
	sum(a=this.varA ,b=this.varB){this.result = a + b; this.varA = a; this.varB = b; alert(`Результат ${this.result}`)};
	sub(a=this.varA ,b=this.varB){this.result = a - b; this.varA = a; this.varB = b; alert(`Результат ${this.result}`)};
	apl(a=this.varA ,b=this.varB){this.result = a * b; this.varA = a; this.varB = b; alert(`Результат ${this.result}`)};
	div(a=this.varA ,b=this.varB){this.result = a / b; this.varA = a; this.varB = b; alert(`Результат ${this.result}`)};
	getPi(n=0){this.newVarPi =this.varPi.toFixed(n); alert(`Число Пи с ${n} знаками после запятой = ${this.newVarPi}`)};
	pow(a=this.varA ,b=this.varB){
		if(this.engineerMode === 'on'){
			this.result = Math.pow(a,b); 
			this.varA = a; 
			this.varB = b; 
			alert(`Результат ${this.result}`)
		}
	};
	sqr(a=this.varA){
		if(this.engineerMode === 'on'){
			this.result = Math.sqrt(a); 
			this.varA = a; 
			alert(`Результат ${this.result}`)
		}
	};
}

let calc = new Calc();



