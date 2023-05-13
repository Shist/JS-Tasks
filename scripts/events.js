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
