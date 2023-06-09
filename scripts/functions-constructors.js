// Задание 1
// Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
// Добавить эти объекты в массив shops.
// В итоге должен получиться массив объектов типа:
// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
console.log("Task 1");
function Shop(name, address) {
  this.name = name;
  this.address = address;
}
const shops = [
  new Shop("Green", "ул. Петра Мстиславца 11, Минск"),
  new Shop("ProStore", "пр-т Дзержинского, 126, Минск"),
];
console.log("Array with shops:");
console.log(shops);

// Задание 2
// С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']
console.log("Task 2");
const shopsAddresses = shops.map((shop) => (shop = shop.address));
console.log("Array with shops' addresses:");
console.log(shopsAddresses);
