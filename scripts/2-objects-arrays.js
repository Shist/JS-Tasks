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
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
numbers.forEach((item, i) => {
  console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
});
