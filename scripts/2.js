// That function checks if "amount" - valid or not
function isAmount(amount) {
  if (isNaN(amount)) {
    console.log(`You've entered not a number!`);
    return false;
  }
  if (amount < 0) {
    console.log(`You've entered negative value of amount!\n${amount} < 0`);
    return false;
  }
  if (amount === 0) {
    console.log(`You've entered null amount. The amount can not be null!`);
    return false;
  }
  if (amount % 1 !== 0) {
    console.log(
      `You've entered not an integer value of the amount!\n${amount} % 1 !== 0`
    );
    return false;
  }
  return true;
}

// Задание 1
// Перепишите код с использованием тернарного оператора
// let country = 'Sweden';
// let access;
// if (country == 'Sweden') {
// access = true;
// } else{
// access = false;
// }
console.log("Task 1");
const country1 = "Sweden";
const access1 = country1 == "Sweden" ? true : false;
console.log(access1);

// Задание 2
// Создать переменную и записать в нее число, например 10.
// 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.
console.log("Task 2");
let num2 = 10;
console.log(`The number before iterations: ${num2}`);
const itersAmount2 = 10;
for (let i = 0; i < itersAmount2; i++) {
  num2++;
}
console.log(`The number after iterations: ${num2}`);

// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"
console.log("Task 3");
for (let i = 0; i < 10; i += 2) {
  const userNum3 = Number(prompt("Enter your number:"));
  if (userNum3 === 10) {
    alert("Equal to 10");
    console.log(`Number ${userNum3} is equal to 10`);
  } else {
    alert("Not equal to 10");
    console.log(`Number ${userNum3} is not equal to 10`);
  }
}

// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.
console.log("Task 4");
const userAmount4 = Number(
  prompt("How many numbers' squares you want to calculate?", 1)
);
if (isAmount(userAmount4)) {
  for (let i = 0; i < userAmount4; i++) {
    console.log(i ** 2);
  }
}

// Задание 5
// Напишите программу, которая выводит в консоль числа от 1 до 100.
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}
