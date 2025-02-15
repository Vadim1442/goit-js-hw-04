'use strict';

function isEnoughCapacity(products, containerSize) {
  // Робим змінну для підрахунку загальної кількості товарів
  let totalSum = 0;
  const values = Object.values(products); // Отримуємо масив значень (кількостей товарів) з об'єкта products

  // Перебираємо всі значення масиву values
  for (const value of values) {
    totalSum += value; // Тут додаємо значення до загальної суми
  }
  // Повертаємо true, якщо всі товари вміщуються, або false  якщо ні
  return totalSum <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
