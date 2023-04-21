// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай!
// (вместо Николай должно показываться имя, которое ввел пользователь)
const userName2 = prompt("Enter your name:");
alert(`Hello, ${userName2}!`);

// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
const userNum3 = prompt("Enter the number:");
const userDegree3 = prompt("Enter degree for the number:");
console.log(userNum3 ** userDegree3);
