// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк
console.log("Task 1");

const ucFirst = (str) => {
  const newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
};

console.log(`ucFirst("apple") = ${ucFirst("apple")}`);
console.log(`ucFirst("hello world") = ${ucFirst("hello world")}`);
console.log(`ucFirst("abc123") = ${ucFirst("abc123")}`);

// Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.
console.log("Task 2");

const checkSpam = (str) =>
  str.toLowerCase().includes("badword") || str.toLowerCase().includes("xxx")
    ? true
    : false;

console.log(`checkSpam("abcbAdWoRdabc") = ${checkSpam("abcbAdWoRdabc")}`);
console.log(`checkSpam("abcxXxabc") = ${checkSpam("abcxXxabc")}`);
console.log(`checkSpam("xbadxwordx") = ${checkSpam("xbadxwordx")}`);

// Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.
console.log("Task 3");

const reverseStr = (str) => str.split("").reverse().join("");

console.log(`reverseStr("привет Женя") = ${reverseStr("привет Женя")}`);
console.log(`reverseStr("Hello World!") = ${reverseStr("Hello World!")}`);
console.log(`reverseStr("abc123") = ${reverseStr("abc123")}`);

// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.
// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
console.log("Task 4");

const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

stations.forEach((item) => {
  console.log(`${item.slice(0, 3)}: ${item.slice(item.indexOf(";") + 1)}`);
});
