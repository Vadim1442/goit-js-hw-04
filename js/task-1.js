'use strict';

function slugify(title) {
  const strings = title.split(' ');
  const lowercaseArray = [];

  for (const string of strings) {
    lowercaseArray.push(string.toLowerCase());
  }
  const slug = lowercaseArray.join('-');
  return slug;
  //   return title.toLowerCase().split(' ').join('-');
}

// Перетворюємо рядок на нижній регістр, розділяємо слова за пробілами, з'єднуємо їх тире
// return title.toLowerCase().split(' ').join('-');

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
