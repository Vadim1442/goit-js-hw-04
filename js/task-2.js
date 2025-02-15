'use strict';

function calcAverageCalories(days) {
  // Рлбимо змінну для підрахунку загальної кількості калорій
  let totalCalories = 0;

  // Перебираємо масив days за допомогою циклу for...of
  for (const day of days) {
    totalCalories += day.calories; // Тут додаємо калорії поточного дня до загальної суми
  }

  return totalCalories / days.length || 0; // Ділимо загальну кількість калорій на кількість днів або повертаємо 0, якщо масив порожній
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ]),
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ]),
); // 2270

console.log(calcAverageCalories([])); // 0
