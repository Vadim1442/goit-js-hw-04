'use strict';

function filterArray(numbers, value) {
  // Створюємо порожній масив для зберігання результату
  const newArray = [];

  // Перебираємо кожен елемент масиву numbers
  for (const number of numbers) {
    // Перевіряємо, чи більше число за value
    if (number > value) {
      // Додаємо число до масиву newArray
      newArray.push(number);
    }
  }

  // Повертаємо масив із підходящими числами
  return newArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
