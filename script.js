// switch (s) {
// 	case "+":
// 		y = y + x;
// 		break;
// 	case "-":
// 		y = y - x;
// 		break;
// 	case "*":
// 		y = y * x;
// 		break;
// 	case "/":
// 		y = y / x;
// 		break;
// 	case "Abs":
// 	case "abs":
// 	case "ABS":
// 		y = Math.abs(y);
// 		break;
// 	case "Mod":
// 	case "MOD":
// 		y = y % x;
// 	default:
// 		y = x;
// }




// 1 завдання

function Task1() {
	var y = 2; 
	var x = 5;
	var s = "*";

console.log("=============================================");

if (s == '+') {
	y = y + x;
} else if (s == "-") {
	y = y - x;
} else if (s == "*") {
	y = y * x;
} else if (s == "/") {
	y = y / x;
} else if (s == "Abc" || s == "abc" || s == "ABS" ) {
	y = Math.abs(y);
} else if (s == "Mod" || s == "MOD") {
	y = y % x;
} else {
	y = x;
}
 console.log('Ответ =' + ' ' + y);
}




function Task2() {
	console.log("=============================================");
	for (i = 1; i <= 100; i++) {
	if (i % 15 == 0) {
		console.log("FizzBuzz")
	} else if (i % 5 == 0) {
		console.log("Buzz")
	} else if (i % 3 == 0) {
		console.log("Fizz")
	} else {
		console.log(i)
	}

	}
}





function Task3(argument) {
var s0 = 10000;
var p = 30;
var m = ((p/12)/100);
var p= s0 * m;
var sn = 25000;

console.log("=============================================");

	for (i= 1; s0 < sn; i++) {
		s0 = s0 + p;
		console.log("Месяц " + i +" : " + s0);
	}

}




function Task4() {

 var s0 = 10000;
 var sn = 25000;
 var p = 30;
 var m = ((p/12)/100);
 var f = 2;

	console.log("=============================================");
	if (f == 1) { 
		p = s0 * m;
		for (i= 1; s0 < sn; i++) {
			s0 += p;
			console.log("Месяц " + i +" : " + s0);
		}
	} 
	else if (f == 2) {
		for (i = 1; s0 < sn; i++) {
			p = s0 * m;
			s0 += p;
			console.log("Месяц " + i +" : " + Math.round(s0 * 100) / 100);
		} 
	}
 else {
	alert("Некоректне значення F. Спробуйте ще раз.");
}

}

function OnButtonClick() {
	
}