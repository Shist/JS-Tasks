// 1.1 Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить
// остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".
const namesArr = ["Misha", "Pasha", "Bronya", "Alex", "Natasha"];
const [firstName, secondName, ...otherNamesArr] = namesArr;
if (namesArr.length < 2) {
  secondName = "alex";
}
console.log(`First name: ${firstName}\nSecond name: ${secondName}`);
otherNamesArr.forEach((name, index) =>
  console.log(`Person name №${index + 3} : ${name}`)
);

// 1.2 Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый
// параметр должен быть равен одному из элементов массива
const secondNamesArr = ["Pela", "Andrey", "Daniil", "Kate", "Tom"];
const foo = (firstParam, secondParam, thirdParam) => {
  console.log(
    `firstParam = ${firstParam}\nsecondParam = ${secondParam}\nthirdParam = ${thirdParam}`
  );
};
foo(...secondNamesArr);

// 1.3 Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если
// соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.
const someObj = {
  a: 24,
  b: "some string",
  c: 741,
  d: 10285,
  e: "something",
};
let { a, b, ...otherFields } = someObj;
if (a === undefined) {
  a = 1;
}
if (b === undefined) {
  b = 2;
}
console.log(`JSON.stringify( someObj ) = ${JSON.stringify(someObj)}`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`JSON.stringify( otherFields ) = ${JSON.stringify(otherFields)}`);
