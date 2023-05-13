// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
console.log("Task 1");
const inputT1 = document.querySelector("input.task-1");
const ulT1 = document.querySelector("ul.task-1");
inputT1.addEventListener("keydown", (event) => {
  const newLi = document.createElement("li");
  newLi.innerText = event.key;
  ulT1.appendChild(newLi);
});

// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ
// в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
console.log("Task 2");
const inputT2 = document.querySelector("input.task-2");
inputT2.addEventListener("keyup", () => {
  console.log(inputT2.value);
});

// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li.
// Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
console.log("Task 3");
const formT3 = document.querySelector("form.task-3");
const inputT3 = document.querySelector("input.task-3");
const ulT3 = document.querySelector("ul.task-3");
formT3.addEventListener("submit", (event) => {
  event.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerText = inputT3.value;
  ulT3.appendChild(newLi);
  inputT3.value = "";
});

// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div.
// Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число.
// Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие,
// выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
console.log("Task 4");
const formT4 = document.querySelector("form.task-4");
const inputFirstT4 = document.querySelector("input.task-4-input-1");
const selectT4 = document.querySelector("select.task-4");
const inputSecondT4 = document.querySelector("input.task-4-input-2");
const divT4 = document.querySelector("div.task-4");
formT4.addEventListener("submit", (event) => {
  event.preventDefault();
  switch (selectT4.value) {
    case "+":
      divT4.innerText = +inputFirstT4.value + +inputSecondT4.value;
      break;
    case "-":
      divT4.innerText = inputFirstT4.value - inputSecondT4.value;
      break;
    case "*":
      divT4.innerText = inputFirstT4.value * inputSecondT4.value;
      break;
    case "/":
      divT4.innerText = inputFirstT4.value / inputSecondT4.value;
      break;
    case "%":
      divT4.innerText = inputFirstT4.value % inputSecondT4.value;
      break;
    case "^":
      divT4.innerText = inputFirstT4.value ** inputSecondT4.value;
      break;
  }
});

// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз
// рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов.
// Использовать обработку событий mouseenter,mouseleave на этой кнопке.
console.log("Task 5");
const btnT5 = document.querySelector("button.task-5");
btnT5.addEventListener("mouseenter", () => {
  btnT5.style.backgroundColor = `#${Math.round(
    Math.random() * 16777215
  ).toString(16)}`;
  btnT5.style.color = `#${Math.round(Math.random() * 16777215).toString(16)}`;
});
btnT5.addEventListener("mouseleave", () => {
  btnT5.style.transform = `rotate(${Math.round(Math.random() * 360) - 180}deg)`;
});
