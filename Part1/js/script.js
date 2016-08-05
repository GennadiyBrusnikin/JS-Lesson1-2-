var a = +prompt("Введите число"); // Вводим число преращаем к типу number


// Задаем проверку числа на тип number
if (isNaN(a)) {
	alert ('Введите число' + a + 'неправильно');
  } else {
	console.log ( pow(a, n) );
}

var n = +prompt("Введите степень числа"); // Вводим степень числа преращаем к типу number

 

// Задаем проверку степени числа на тип number
if (isNaN(n)) {
	alert ('Введите число' + n + 'неправильно');
  } else {
	console.log ( pow(a, n) );
}

// функция возведения в степень
function pow(a, n) {

    var result = a;

    for (var i = 0; i < Math.abs(n); i++) { // возводим в степень 
    	
    	if (n > 0) { // если степень больше 0

    		result *=a; // или result = result * a
    	}  
    } 

    switch (n) { // если степень равно 0
  		case 0:
    	result = 1;
    	break;
    }


    if (n < 0) { // если степень меньше 0
    	result = 1/result; 
	} 

    if (a < 0) {
        result = -result;
    }

	return result; // возвращаем результат в функцию
}