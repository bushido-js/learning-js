//Вспомогательные функции внутри других ф-ий

//Пусть у нас дан массив с числами. Решим следующую задачу: запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.

let arr = [11, 12, 13, 54, 32, 67, 90, 99, 123];
let rangeArr = [];

// Делаем из числа массив, для того чтобы использовать цифры числа
function getDigits(num){
  return String(num).split('');
}

// Сумма цифр числа
function getSum(arr){
  let sum = 0;
  for (i = 0; i < arr.length; i++){
    sum += Number(arr[i])
  }
  return sum;
}

//Проверка на диапазон от 1 до 9
function inRange(num){
  return num >= 1 && num <= 9;
}

// Само решение с использованием вспомогательных функций
for (j = 0; j < arr.length; j++){
  if (inRange(getSum(getDigits(arr[j]))) == true){
    rangeArr.push(arr[j]);
  }
}

console.log(rangeArr);

/*  Вопрос в строке 28, при использовании i вместо j, код не
выполняется. Как я понимаю это сявзанно с тем что в строке 16,
используется уже i, и эта переменная входит в диапазон функции,
которую мы используем в цикле(строка 28).

Эта задача из учебника ⋕js.Pm.FP.AFIF.1 
ссылка (http://code.mu/ru/javascript/book/prime/functions/practice/auxiliary-functions-inside-functions/)

В учебнике используется цикл через of, но я чаще использую написание
циклов в ручную, то есть через i, j или k 

Я в строке 28 использовал i, и долго не мог понять в чем дело, 
Мой вопрос, как быть при работе с вспомогательными функциями и
циклами, ведь не всегда будет очевидно, что переменна i, уже
используется, как поступать в таком случае, всегда, если возможно
использовать циклы через of или in? ?*? */