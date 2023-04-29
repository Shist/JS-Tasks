// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра
console.log("Task 1");

function sumNums(num1, num2) {
  if (arguments.length !== 2) {
    return "Введено не 2 параметра!";
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Введённые данные не являются числами!";
  }
  return num1 + num2;
}

console.log(`Результат работы sumNums(2, 4):\n${sumNums(2, 4)}`);
console.log(`Результат работы sumNums('d', 4):\n${sumNums("d", 4)}`);
console.log(`Результат работы sumNums(1, [2]):\n${sumNums(1, [2])}`);
console.log(`Результат работы sumNums(1):\n${sumNums(1)}`);
console.log(`Результат работы sumNums():\n${sumNums()}`);

// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"
// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
console.log("Task 2");

function square(a) {
  if (arguments.length === 0) {
    throw 'Функция "square" не может быть вызвана без аргумента';
  }
  console.log(a * a);
}

square(10);
square();

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.
console.log("Task 3");

const guessNum = (num) => {
  if (typeof num !== "number") {
    return `${num} не является числом!`;
  }
  if (num < 1) {
    return `Ваше число ${num} меньше единицы!`;
  }
  if (num > 10) {
    return `Ваше число ${num} больше десяти!`;
  }
  if (num % 1 !== 0) {
    return `Ваше число ${num} не является целым!`;
  }
  const randNum = Math.round(Math.random() * 9) + 1;
  if (num === randNum) {
    return "Вы выиграли";
  } else {
    return `Вы не угадали, ваше число -  ${num}, а выпало число ${randNum}`;
  }
};

console.log(guessNum("abc"));
console.log(guessNum([1, 2, 3]));
console.log(guessNum({ name: null }));
console.log(guessNum(false));
console.log(guessNum(0));
console.log(guessNum(10.5));
console.log(guessNum(5.75));
console.log(guessNum(5));

// Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
console.log("Task 4");
const arr = [5, 4, 3, 8, 0];
const targetNum = 4;

const filterFor = (arr, a) => {
  const newArr = [];
  arr.forEach((item) => (item >= a ? newArr.push(item) : null));
  return newArr;
};

console.log(
  `filterFor([${arr}], ${targetNum}) = [${filterFor(arr, targetNum)}]`
);

// Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
console.log("Task 5");

const copyArr = (arr) => {
  return arr.map((item) => item);
};

const someArr = [4, 5, 8, 9];
const arrCopy = copyArr(someArr);
console.log(`copyArr([${someArr}]) = [${arrCopy}]`);

// Задание 6
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }
console.log("Task 6");

const sumObjectValues = (obj) => {
  if (typeof obj !== "object") {
    throw "Ошибка! Функция sumObjectValues(obj) должна принимать в себя объект!";
  }
  let sum = 0;
  for (key in obj) {
    typeof obj[key] === "number" ? (sum += obj[key]) : null;
  }
  return sum;
};

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};
console.log(
  `sumObjectsValues ( objectWithNumbers ) = ${sumObjectValues(
    objectWithNumbers
  )}`
);
