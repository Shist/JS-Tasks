// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай!
// (вместо Николай должно показываться имя, которое ввел пользователь)
let userName2 = prompt("Enter your name:");
userName2 = (userName2 == null ? "Anonymous" : userName2);
alert(`Hello, ${userName2}!`);

// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
let userNum3 = Number(prompt("Enter the number:", 0));
userNum3 = (userNum3 === null ? 0 : userNum3);
let userDegree3 = Number(prompt("Enter degree for the number:", 0));
userDegree3 = (userDegree3 === null ? 0 : userDegree3);
console.log(userNum3 ** userDegree3);

// Задание 5
// Создать произвольную переменную, присвоить ей произвольное строковое значение. C помощью if написать условие: если переменная
// равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let str5 = "visible";
if (str5 == "hidden") {
  str5 = "visible";
} else {
  str5 = "hidden";
}
// ИЛИ ТАК:
// str5 = (str5 === "hidden" ? "visible" : "hidden");
console.log(str5);

// Задание 6
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let num6 = prompt("Enter the number:", 0);
num6 = (num6 === null ? 0 : num6);
if (num6 == 0) {
    num6 = 1;
} else if (num6 < 0) {
    num6 = "less then zero"
} else {
    num6 *= 10;
}
console.log(num6);
