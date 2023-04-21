// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай!
// (вместо Николай должно показываться имя, которое ввел пользователь)
console.log("Task 2");
let userName2 = prompt("Enter your name:");
userName2 = userName2 == null ? "Anonymous" : userName2;
alert(`Hello, ${userName2}!`);

// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.
console.log("Task 3");
const userNum3 = Number(prompt("Enter the number:", 0));
const userDegree3 = Number(prompt("Enter degree for the number:", 0));
if (!isNaN(userNum3) && !isNaN(userDegree3)) {
  console.log(userNum3 ** userDegree3);
} else {
  console.log("You've entered not nubmers!");
}

// Задание 5
// Создать произвольную переменную, присвоить ей произвольное строковое значение. C помощью if написать условие: если переменная
// равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
console.log("Task 5");
let str5 = "visible";
if (str5 === "hidden") {
  str5 = "visible";
} else {
  str5 = "hidden";
}
// ИЛИ ТАК:
// str5 = (str5 === "hidden" ? "visible" : "hidden");
console.log(str5);

// Задание 6
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
console.log("Task 6");
let num6 = Number(prompt("Enter the number:", 0));
if (!isNaN(num6)) {
  if (num6 === 0) {
    num6 = 1;
  } else if (num6 < 0) {
    num6 = "less then zero";
  } else {
    num6 *= 10;
  }
  console.log(num6);
} else {
  console.log("You've entered not a nubmer!");
}

// Задание 7
// Запросите у пользователя число и запишите его в переменную.
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение:
// если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.
console.log("Task 7");
const userNum7 = Number(prompt("Enter the number:", 0));
if (!isNaN(userNum7)) {
  const result7 = userNum7 < 5 ? "0" : "1";
  console.log(result7);
} else {
  console.log("You've entered not a nubmer!");
}

// Задание 8
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом:
// Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел
console.log("Task 8");
const firstUserNum8 = Number(prompt("Enter the first number:", 0));
const secondUserNum8 = Number(prompt("Enter the second number:", 0));
if (!isNaN(firstUserNum8) && !isNaN(secondUserNum8)) {
  if (firstUserNum8 > secondUserNum8) {
    console.log(`The greater number: ${firstUserNum8}`);
  } else if (secondUserNum8 > firstUserNum8) {
    console.log(`The greater number: ${secondUserNum8}`);
  } else {
    console.log(
      `The numbers ${firstUserNum8} and ${secondUserNum8} are equal!`
    );
  }
} else {
  console.log("You've entered not nubmers!");
}

// Задание 9
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2.
// Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
console.log("Task 9");
const firstNum9 = Number(prompt("Enter the first number:", 0));
const secondNum9 = Number(prompt("Enter the second number:", 0));
if (!isNaN(firstNum9) && !isNaN(secondNum9)) {
  firstNum9 % secondNum9 === 0
    ? console.log(`Yes, ${firstNum9} % ${secondNum9} == 0`)
    : console.log(`No, ${firstNum9} % ${secondNum9} != 0`);
} else {
  console.log("You've entered not nubmers!");
}

// Задание 10
// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!",
// если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).
console.log("Task 10");
const avrgMark10 = Number(prompt("Enter the average mark:", 0));
if (!isNaN(avrgMark10)) {
  if (avrgMark10 < 0) {
    console.log("You've entered negative value of the mark! Minimum is 0.");
  } else if (avrgMark10 > 10) {
    console.log(
      "You've entered impossibly big value of the mark! Maximum is 10."
    );
  } else {
    if (avrgMark10 >= 9) {
      console.log("Wow, you are a real gem!");
    } else if (avrgMark10 >= 5) {
      console.log("Not bad, but let's push some more!");
    } else {
      console.log("Twinkle, go study!");
    }
  }
} else {
  console.log("You've entered not a nubmer!");
}

// Задание 11
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.
console.log("Task 11");
const examMark11 = Number(prompt("Enter the exam mark:", 0));
const projectsAmount11 = Number(prompt("Enter the projects' amount:", 0));
if (!isNaN(examMark11) && !isNaN(projectsAmount11)) {
  if (examMark11 < 0) {
    console.log("You've entered negative value of the exam mark!");
  } else if (examMark11 > 100) {
    console.log("You've entered impossibly big value value of the exam mark!");
  } else if (projectsAmount11 < 0) {
    console.log("You've entered negative value of the projects' amount!");
  } else if (projectsAmount11 % 1 != 0) {
    console.log("You've entered not an integer value of the projects' amount!");
  } else {
    if (examMark11 > 90 || projectsAmount11 > 10) {
      console.log(100);
    } else if (examMark11 > 75 && projectsAmount11 >= 5) {
      console.log(90);
    } else if (examMark11 > 50 && projectsAmount11 >= 2) {
      console.log(75);
    } else {
      console.log(0);
    }
  }
} else {
  console.log("You've entered not a nubmer!");
}

// Задание 12
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50.
// Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу,
// рассчитывающую общую стоимость аренды на запрашиваемое количество дней.
console.log("Task 12");
const rentDayCost12 = 40;
const weekDiscount12 = 50;
const weekDaysNum12 = 7;
const threeDaysDiscount12 = 20;
const threeDaysNum12 = 3;
const userRentDays12 = Number(
  prompt("Enter the whole amount of auto rent days:", 0)
);
if (!isNaN(userRentDays12)) {
  if (userRentDays12 % 1 != 0) {
    console.log("You've entered not an integer value of the auto rent days!");
  } else if (userRentDays12 < 0) {
    console.log("You've entered negative value of of the auto rent days!");
  } else {
    let wholeRentCost12 = userRentDays12 * rentDayCost12;
    if (userRentDays12 >= weekDaysNum12) {
      wholeRentCost12 -= weekDiscount12;
    } else if (userRentDays12 >= threeDaysNum12) {
      wholeRentCost12 -= threeDaysDiscount12;
    }
    console.log(`The whole rent cost: ${wholeRentCost12}`);
  }
} else {
  console.log("You've entered not a nubmer!");
}
