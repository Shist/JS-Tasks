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
const lu = document.querySelectorAll("li.task-2");
lu.forEach((item) => {
  console.log(item.innerText);
});

// Задание 4 (задание 3 почему-то отсутствует)
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
console.log("Task 4");
const someP = document.createElement('p');
someP.classList.add('lorem'); // Добавляем класс из подключенной библиотеки с лоремом
someP.classList.add('15'); // Добавляем класс, который сделает нам 15 слов в параграфе
someP.style.fontSize = '36px';
someP.style.fontWeight = 700; // Тоже самое, что 'bold'
document.body.appendChild(someP);

// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
console.log("Task 5");
const t5p = document.querySelectorAll("p.task-5");
t5p.forEach((item) => { // На всякий случай делаем это для Всех потенциально найденных p-шек класса .task-5
    item.innerText = new Date();
});
