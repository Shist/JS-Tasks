// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ...
// (необходимые значения добавьте с помощью BOM)
console.log("Task 1");
const userAgent = navigator.userAgent;
console.log(`Информация о браузере и операционной системе:\n${userAgent}`);
console.log(`Информация о текущем url:\n${location.href}`);
let detectedOS = "Unknown OS";
userAgent.includes("Mac") ? (detectedOS = "MacOS") : null;
userAgent.includes("Linux") ? (detectedOS = "Linux") : null;
userAgent.includes("Win") ? (detectedOS = "Windows") : null;
console.log(
  `На компьютере с ОС\n${detectedOS}\nс помощью браузера\n${userAgent}\nя открыл страничку\n${location.href}`
);

// Задание 2
// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).
// ПОДСКАЗКИ
// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив).
// 2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)
console.log("Task 2");
const lu = document.querySelectorAll("li");
lu.forEach((item) => {
  console.log(item.innerText);
});
