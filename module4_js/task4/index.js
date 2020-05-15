let name = '';


do {

  name = prompt('Введите имя вашего героя:', '');

} while (6 < name.length);

console.log('Имя героя:', name);
