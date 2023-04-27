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
