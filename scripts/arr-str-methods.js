// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк
console.log("Task 1");

const ucFirst = (str) => {
    const newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}

console.log(`ucFirst("apple") = ${ucFirst("apple")}`);
console.log(`ucFirst("hello world") = ${ucFirst("hello world")}`);
console.log(`ucFirst("abc123") = ${ucFirst("abc123")}`);
