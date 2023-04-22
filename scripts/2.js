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
let country = "Sweden";
let access = country == "Sweden" ? true : false;
console.log(access);

// Задание 2
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.
console.log("Task 2");
let num2 = 10;
console.log(`The number before iterations: ${num2}`);
let itersAmount2 = 10;
for (let i = 0; i < itersAmount2; i++) {
  num2++;
}
console.log(`The number after iterations: ${num2}`);
