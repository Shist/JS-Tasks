// That function checks if "amount" - valid or not
function isAmount(amount) {
  if (isNaN(amount)) {
    console.log(`You've entered not a number!`);
    return false;
  }
  if (amount < 0) {
    console.log(`You've entered negative value of amount!\n${amount} < 0`);
    return false;
  }
  if (amount === 0) {
    console.log(`You've entered null amount. The amount can not be null!`);
    return false;
  }
  if (amount % 1 !== 0) {
    console.log(
      `You've entered not an integer value of the amount!\n${amount} % 1 !== 0`
    );
    return false;
  }
  return true;
}

// Задание 1
// Перепишите код с использованием тернарного оператора
// let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }
console.log("Task 1");
const country1 = "Sweden";
const access1 = country1 == "Sweden" ? true : false;
console.log(access1);

// Задание 2
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.
console.log("Task 2");
let num2 = 10;
console.log(`The number before iterations: ${num2}`);
const itersAmount2 = 10;
for (let i = 0; i < itersAmount2; i++) {
  num2++;
}
console.log(`The number after iterations: ${num2}`);

// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"
console.log("Task 3");
for (let i = 0; i < 10; i += 2) {
  const userNum3 = Number(prompt("Enter your number:"));
  if (userNum3 === 10) {
    alert("Equal to 10");
    console.log(`Number ${userNum3} is equal to 10`);
  } else {
    alert("Not equal to 10");
    console.log(`Number ${userNum3} is not equal to 10`);
  }
}

// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
console.log("Task 4");
const userAmount4 = Number(
  prompt("How many numbers' squares you want to calculate?", 1)
);
if (isAmount(userAmount4)) {
  for (let i = 0; i < userAmount4; i++) {
    console.log(i ** 2);
  }
}

// Задание 5
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
console.log("Task 5");
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

// Задание 6
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }
console.log("Task 6");
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  console.log(`number ${i}!`);
  i++;
}

// Задание 7
// Переписать задание 4 в виде функции. Т.е. описать функцию, которая
// выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).
console.log("Task 7");

function printNumsSquares(amount) {
  if (isAmount(amount)) {
    for (let i = 0; i < amount; i++) {
      console.log(i ** 2);
    }
  }
}

const userAmount7 = Number(
  prompt("How many numbers' squares you want to calculate?", 1)
);
printNumsSquares(userAmount7);

// Задание 8
// Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max.
// Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка:
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255.
// Одна функция может вызывать другую функцию
console.log("Task 8");

function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min; // Переписал floor на round
}

function getRandomRGB() {
  const R = getRandomInteger(0, 255);
  const G = getRandomInteger(0, 255);
  const B = getRandomInteger(0, 255);
  return `rgb(${R}, ${G}, ${B})`;
}

console.log(`Generated random color: ${getRandomRGB()}`);

// Задание 9
// Написать функцию, которая принимает целое число n.
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить
// в консоль текущее число (i) и информацию о том, целое ли оно.
// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"
console.log("Task 9");

function foo(n) {
  if (isAmount(n)) {
    for (let i = 1; i < n; i += 0.5) {
      console.log(`${i} ${i % 1 === 0 ? "integer" : "decimal"}`);
    }
  }
}

const amountForFoo9 = 7;
console.log(`The result of function (n = ${amountForFoo9}) :`);
foo(amountForFoo9);
