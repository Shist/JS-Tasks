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
let str = "visible";
if (str == "hidden") {
  str = "visible";
} else {
  str = "hidden";
}
// ИЛИ ТАК:
// str = (str === "hidden" ? "visible" : "hidden");
