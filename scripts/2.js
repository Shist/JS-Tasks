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
let country1 = "Sweden";
let access1 = country1 == "Sweden" ? true : false;
console.log(access1);

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

// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"
console.log("Task 3");
for (let i = 0; i < 10; i += 2) {
    let userNum3 = Number(prompt("Enter your number:"));
    if (userNum3 === 10) {
        alert("Equal to 10");
        console.log(`Number ${userNum3} is equal to 10`);
    } else {
        alert("Not equal to 10");
        console.log(`Number ${userNum3} is not equal to 10`);
    }
}
