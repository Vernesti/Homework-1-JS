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

// var y = 2, x = 5, s = "*";

// if (s == '+') {
// 	y = y + x;
// } else if (s == "-") {
// 	y = y - x;
// } else if (s == "*") {
// 	y = y * x;
// } else if (s == "/") {
// 	y = y / x;
// } else if (s == "Abc" || s == "abc" || s == "ABS" ) {
// 	y = Math.abs(y);
// } else if (s == "Mod" || s == "MOD") {
// 	y = y % x;
// } else {
// 	y = x;
// }
//  console.log('Ответ =' + ' ' + y);



// 2 завдання

// for (i = 1; i <= 100; i++) {
// 	if (i % 15 == 0) {
// 		console.log("FizzBuzz")
// 	} else if (i % 5 == 0) {
// 		console.log("Buzz")
// 	} else if (i % 3 == 0) {
// 		console.log("Fizz")
// 	} else {
// 		console.log(i)
// 	}

	
// }


// 3 завдання


// var s0 = 10000,
//  p = 30,
//  m = ((p/12)/100),
//  p= s0 * m,
//  sn = 25000;

// for (i= 1; s0 < sn; i++) {
// 	s0 = s0 + p;
// 	console.log("Месяц " + i +" : " + s0);
// }




// 4 завдання 


// var s0 = 10000,
// sn = 25000
//  p = 30,
//  m = ((p/12)/100),
//  f = 0,
//  p;

// if (f==1 || f==2) {
// 	if (f == 1) 
// 	{
// 		p= s0 * m;

// 		for (i= 1; s0 < sn; i++) 
// 		{
// 			s0 = s0 + p;
// 			console.log("Месяц " + i +" : " + s0);
// 		}
// 	} 
// 		else if (f==2) 
// 		{
// 			for (i = 1; s0 < sn; i++) 
// 			{
// 				p= s0 * m;
// 				s0 = s0 + p;
// 			console.log("Месяц " + i +" : " + Math.round(s0 * 100) / 100);
// 			} 
// 		}
// } else {
// 	alert("Некоректне значення F. Спробуйте ще раз.");
// }

