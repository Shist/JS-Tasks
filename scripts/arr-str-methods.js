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
