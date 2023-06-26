// Задание 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.
class Car {
  constructor(carName) {
    this.name = carName;
  }
  printDescription() {
    console.log(`This is car "${this.name}"`);
  }
}
const car = new Car("Ferari");
car.printDescription();

// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их
// значение в свойствах объекта, и двумя методами:
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств
class Calculator {
  constructor(firstNum, secondNum) {
    this.firstNum = +firstNum;
    this.secondNum = +secondNum;
  }
  sum() {
    return this.firstNum + this.secondNum;
  }
  mul() {
    return this.firstNum * this.secondNum;
  }
}
const calculator = new Calculator(
  prompt("Введите первое число:", 0),
  prompt("Введите второе число:", 0)
);
console.log(
  `${calculator.firstNum} + ${calculator.secondNum} = ${calculator.sum()}`
);
console.log(
  `${calculator.firstNum} * ${calculator.secondNum} = ${calculator.mul()}`
);

// Задание 3
// Реализовать следующее мини-приложение
// https://gist.github.com/zhekix
class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    // метод должен создать тег img
    // вложить в него src картинки (this.imgUrl)
    // и записать в this.html
    // + дергаем render
    // + странице должен залится фон черным
    const img = document.createElement("img");
    img.src = this.imgUrl;
    this.html = img;
    this.render();
    document.body.style.backgroundColor = "black";
  }

  render() {
    // метод должен отрисовать изображение (this.html) на странице
    // применить фиксированное позиционирование
    // использовать this.top и this.left для указания позиции
    // использовать this.width для указания ширины
    document.body.innerHTML = "";
    this.html.style.cssText = `
        position: fixed;
        top: ${this.top}px;
        left: ${this.left}px;
        width: ${this.width}px;
    `;
    document.body.append(this.html);
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    // + дергаем render
    this.top -= 20;
    this.render();
  }

  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    // + дергаем render
    this.top += 20;
    this.render();
  }

  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    // + дергаем render
    this.left -= 20;
    this.render();
  }

  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    // + дергаем render
    this.left += 20;
    this.render();
  }
}

const imgUrl = "https://bit.ly/2tcDito";
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();

// Задание 4
// Добавить к приложению желтый круг (пример ЗДЕСЬ)
// Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове
// метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.
// Сделать по примеру из последнего видео в уроке.
class Circle {
  constructor(size, color) {
    this.width = size;
    this.height = size;
    this.color = color;
  }
  render() {
    const circle = document.createElement("div");
    circle.style.cssText = `
        position: fixed;
        z-index: -1;
        top: 10px;
        left: 10px;
        width: ${this.width}px;
        height: ${this.height}px;
        background-color: ${this.color};
        border-radius: 100%;
    `;
    document.body.append(circle);
  }
}
const circle = new Circle(100, "yellow");
circle.render();
