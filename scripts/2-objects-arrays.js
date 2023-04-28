// Повторение. Логические операторы И и ИЛИ
// Задание 1
// Напишите функцию, которая принимает три числовых аргумента: number, min, max.
// Функция проверяет, находится ли число number в диапазоне чисел от min до max.
// 1 вариант решения: с помощью логического И в условии.
// *2 вариант решения: с помощью логического ИЛИ в условии.
console.log("Task 1");

function isInRangeAnd(num, min, max) {
  if (num >= min && num <= max) {
    return true;
  } else {
    return false;
  }
}

function isInRangeOr(num, min, max) {
  if (num < min || num > max) {
    return false;
  } else {
    return true;
  }
}

console.log(`isInRangeAnd(2, 5, 10) - ${isInRangeAnd(2, 5, 10)}`);
console.log(`isInRangeAnd(7, 5, 10) - ${isInRangeAnd(7, 5, 10)}`);
console.log(`isInRangeAnd(15, 5, 10) - ${isInRangeAnd(15, 5, 10)}`);
console.log(`isInRangeOr(2, 5, 10) - ${isInRangeOr(2, 5, 10)}`);
console.log(`isInRangeOr(7, 5, 10) - ${isInRangeOr(7, 5, 10)}`);
console.log(`isInRangeOr(15, 5, 10) - ${isInRangeOr(15, 5, 10)}`);

// Задание 2
// Есть объект с именами и заработными платами инженеров:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.
console.log("Task 2");
const engineers = {
  Den: 1000,
  Matt: 5000,
  Steve: 2000,
};
for (let property in engineers) {
  console.log(
    `Заработная плата ${property} составляет ${engineers[property]} рублей.`
  );
}

// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.
console.log("Task 3");
const arr = ["ab", 34, "cd", 72, "ef"];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    console.log(`arr[${i}] = ${arr[i]}`);
  }
}

// Задание 4
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.
console.log("Task 4");
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
numbers.forEach((item, i) => {
  console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
});

// Задание 5
// Дан массив объектов, например:
// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.
console.log("Task 5");
let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];
questions.forEach((item) => {
  item.usersAnswer = null;
});
console.log(questions);

// Задание 6
// Есть массив произвольных чисел:
// let numbersTask6 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Посчитать и вывести в консоль сумму элементов в массиве.
// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.
// 3) Найти и вывести в консоль максимальное число массива.
// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
// 4) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
console.log("Task 6");
let numbersTask6 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
console.log(`Массив:\n${numbersTask6}`);
let sum = 0;
let sumOfEvens = 0;
let maxNum = 0;
let currIndexOfMaxNum = -1;
let maxNumIndicies = [];
numbersTask6.forEach((item, i) => {
  sum += item;
  if (i % 2 === 1) {
    sumOfEvens += item;
  }
  if (item > maxNum) {
    maxNum = item;
    currIndexOfMaxNum = i;
    maxNumIndicies = [currIndexOfMaxNum];
  } else if (item === maxNum) {
    currIndexOfMaxNum = i;
    maxNumIndicies.push(currIndexOfMaxNum);
  }
});
console.log(`Сумма элементов массива:\n${sum}`);
console.log(`Сумма четных элементов массива:\n${sumOfEvens}`);
console.log(`Максимальный элемент массива:\n${maxNum}`);
console.log(`Индексы максимальных элементов массива:\n${maxNumIndicies}`);

// Задание 7
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.
console.log("Task 7");
let arrTask7 = [5, 4, 3, -3, -10, -1, 8, -20, 0];
console.log(`Исходный массив:\n${arrTask7}`);
let positiveArr = [];
arrTask7.forEach((item) => { item > 0 ? positiveArr.push(item) : null });
console.log(`Массив только с положительными элементами:\n${positiveArr}`);

// Задание 8
// Написать функцию, которая принимает массив (array) и число (num).
// Функция должна создать новый массив из элементов массива array, и в этом новом массиве должны содержаться только элементы, больше и равные (>=) значению num.
console.log("Task 8");

function foo (arr, num) {
  let newArr = [];
  arr.forEach((item) => {
    item >= num ? newArr.push(item) : null;
  })
  return newArr;
}

someArr = [2, 5, 7, 8, 10, 12, 19];
console.log(`Исходный массив:\n${someArr}`);
someNum = 8;
console.log(`Новый массив (все элементы >= ${someNum}):\n${foo(someArr, someNum)}`);
