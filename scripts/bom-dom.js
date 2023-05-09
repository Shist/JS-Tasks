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
const someP = document.createElement("p");
someP.classList.add("lorem"); // Добавляем класс из подключенной библиотеки с лоремом
someP.classList.add("15"); // Добавляем класс, который сделает нам 15 слов в параграфе
someP.style.fontSize = "36px";
someP.style.fontWeight = 700; // Тоже самое, что 'bold'
document.body.appendChild(someP);

// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:"
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
console.log("Task 5");
const t5p = document.querySelectorAll("p.task-5");
t5p.forEach((item) => {
  // На всякий случай делаем это для Всех потенциально найденных p-шек класса .task-5
  item.innerText = new Date();
});

// Задание 6
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег,
// добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
console.log("Task 6");

const foo6 = (tag, color, content) => {
  const newItem = document.createElement(tag);
  newItem.style.color = color;
  newItem.innerText = content;
  return newItem;
};

document.body.appendChild(foo6("h3", "red", "abc"));
document.body.appendChild(foo6("span", "green", "def"));
document.body.appendChild(foo6("a", "orange", "ghj"));

// Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
console.log("Task 7");

const selectObj = document.createElement("select");
selectObj.classList.add("task-7"); // На всякий случай
for (let year = 1960; year <= 2020; year++) {
  const newOption = document.createElement("option");
  newOption.innerText = year;
  selectObj.options.add(newOption);
}
document.body.appendChild(selectObj);

// Задание 8
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
console.log("Task 8");
const clients = [
  { name: "Женя", order: true },
  { name: "Кристина", order: true },
  { name: "Павел", order: false },
  { name: "Виолетта", order: false },
  { name: "Костя", order: true },
];
const t8ul = document.querySelectorAll("ul.task-8");
clients.forEach((item) => {
  const newLi = document.createElement("li");
  newLi.classList.add("task-8"); // На всякий случай
  newLi.innerText = `Клиент ${item.name} ${
    item.order ? "оплатил" : "отменил"
  } заказ`;
  // На случай, если у нас вдруг будет не один, а много ul из класса task-8
  t8ul.forEach((ul) => {
    ul.appendChild(newLi);
  });
});
