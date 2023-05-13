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
const inputT3 = document.querySelector("input.task-3");
const btnT3 = document.querySelector("button.task-3");
const ulT3 = document.querySelector("ul.task-3");
btnT3.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.innerText = inputT3.value;
  ulT3.appendChild(newLi);
  inputT3.value = "";
});
