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

// Задание 9
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
console.log("Task 9");
const linksArr = [
  "https://www.amazon.com/",
  "https://www.youtube.com/",
  "https://devby.io/",
  "https://www.google.com/",
  "https://apple.com/",
];
const newDiv = document.createElement("div");
newDiv.classList.add("task-9"); // На всякий случай
newDiv.style.background = "yellow";
newDiv.style.padding = "20px";
newDiv.style.display = "flex";
newDiv.style.flexDirection = "column";
linksArr.forEach((siteUrl) => {
  const newA = document.createElement("a");
  newA.classList.add("task-9"); // На всякий случай
  newA.innerText = siteUrl;
  newA.href = siteUrl;
  newA.target = "_blank";
  newDiv.appendChild(newA);
});
document.body.appendChild(newDiv);

// Задание 10
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li
console.log("Task 10");
const t10liCollection = document.querySelectorAll("li.task-10");
t10liCollection.forEach((li, index) => {
  if (index % 2 == 1) {
    li.classList.add("forRemove");
  }
});
const objsToRemove = document.querySelectorAll(".forRemove");
objsToRemove.forEach((objToRemove) => {
  objToRemove.remove();
});

// Задание 11*
// Создать массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
console.log("Task 11");
const users = [
  { name: "Mark", age: 12 },
  { name: "Olga", age: 30 },
  { name: "Tom", age: 25 },
  { name: "Den", age: 43 },
];
const newTable = document.createElement("table");
newTable.border = 2;
newTable.align = "center";
newTable.width = 500;
const newTableHead = document.createElement("thead");
const newTableHeadRow = document.createElement("tr");
const newTableHeadName = document.createElement("th");
newTableHeadName.innerText = "Name";
newTableHeadName.fontWeight = "bold";
newTableHeadRow.appendChild(newTableHeadName);
const newTableHeadAge = document.createElement("th");
newTableHeadAge.innerText = "Age";
newTableHeadAge.fontWeight = "bold";
newTableHeadRow.appendChild(newTableHeadAge);
newTableHead.appendChild(newTableHeadRow);
newTable.appendChild(newTableHead);
const newTableBody = document.createElement("tbody");
users.forEach((user) => {
  newTr = document.createElement("tr");
  newTdName = document.createElement("td");
  newTdName.innerText = user.name;
  newTdName.style.color = "red";
  newTdName.align = "center";
  newTr.appendChild(newTdName);
  newTdAge = document.createElement("td");
  newTdAge.innerText = user.age;
  newTdAge.style.color = "blue";
  newTdAge.align = "center";
  newTr.appendChild(newTdAge);
  newTableBody.appendChild(newTr);
});
newTable.appendChild(newTableBody);
document.body.appendChild(newTable);
