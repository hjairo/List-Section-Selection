/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * List Section Selection - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


/* Variable to store NodeList of DOM elements */
const listItems = document.querySelectorAll('.item');

console.log(listItems);

const perPage = 2;

const sectionSelection = (list, section) => {

  const startIndex = (section * perPage) - perPage;
  const endIndex = (section * perPage) - 1;

  for (let i = 0; i < list.length; i++) {
    list[i].style.color = 'whitesmoke';
  };
  for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i <= endIndex) {
        list[i].style.color = 'green';
       };
   };
};

/* btn1 listener */
btn1.addEventListener('click', () => {

  sectionSelection(listItems, 1);
  console.log('First button is functional!');
});

/* btn2 listener */
btn2.addEventListener('click', () => {

  sectionSelection(listItems, 2);
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', () => {

  sectionSelection(listItems, 3);
  console.log('Third button is functional!');
});
