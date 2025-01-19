// 
// Welcome to JavaScript for the Web!
// ↓↓ Write your JavaScript below ↓↓

// BEGIN Exercise 0
// console.log("Hello world!")
// END Exercise 0

// BEGIN Exercise 1
// console.log(document.querySelector('main').childElementCount);
// console.log(document.querySelector('.dark').id);
// console.log(document.querySelector('#relaxing-images p').innerText);
// END Exercise 1

// BEGIN Exercise 1.5
// document.querySelector('h1').innerText = "Hi! I'm <name> and I'm learning JavaScript today!";
// document.querySelector('h2').innerText = "This message sponsored in part by: JavaScript";
// document.querySelector('#html-basics img').src = "https://picsum.photos/200";
// document.querySelector('h1').innerHTML = "Hi! I'm <em>name</em> and I'm learning <em>JavaScript</em> today!";

// BEGIN Exercise 2
// Select an element, class, and id and 
// apply the "picked" class to it, e.g.:
// document.querySelector("h1").classList.add('picked');
// document.querySelector(".hidden").classList.remove('hidden');
// document.querySelector("#using-css").classList.toggle('fun');
// END Exercise 2

// BEGIN Exercise 3 VARIABLES
// let hiddenSection = document.querySelector('.hidden');
// hiddenSection.classList.toggle('hidden');
// hiddenSection.classList.remove('transparent');
// hiddenSection.classList.add('fun');
// END Exercise 3

// BEGIN Exercise 4 LISTS
// let headings = document.querySelectorAll('h2');

// console.log(headings.length);
// headings[2].classList.add('picked');
// console.log(headings[1].innerText);
// headings[0].parentElement.classList.toggle('hidden');
// END Exercise 4 LISTS

// BEGIN Exercise 5 for LOOPS
// Reveal the hidden message by finding all elements with the
// class "message" and applying the class "reveal" to them

// let words = document.querySelectorAll('.message');
// for (let i = 0; i < words.length; i = i + 1) {
//   words[i].classList.add('reveal');
// }
// END Exercise 5

// BEGIN EXERCISE 6

// let isCollapsibles = document.querySelectorAll('.is-collapsible');
// for (let i = 0; i < isCollapsibles.length; i = i + 1) {
// 	isCollapsibles[i].classList.add('collapsible');
// }

// END Exercise 6

// BEGIN EXAMPLE: EVENT LISTENERS
// function togglePicked (event) { 
//   event.currentTarget.classList.toggle('picked');
//   }

// let topSections = document.querySelectorAll('main > section');
// for (let section of topSections) {
//   section.addEventListener('click',togglePicked);
//   }
// END EXAMPLE: EVENT LISTENERS

// BEGIN Exercise 7 -- KEEP OR SWITCH WITH EXAMPLE B
// let headers = document.querySelectorAll(".collapsible header");
// function toggleOpen(event) { 
//   event.currentTarget.classList.toggle('open'); 
// };

// for (let header of headers) {
//   header.addEventListener('click', toggleOpen);
// }

// ALTERNATE SOLUTION THAT USES AN ANONYMOUS FUNCTION
// for (let header of headers) {
//   header.addEventListener('click', function(event) { 
//     event.currentTarget.classList.toggle('open'); }
//     );
// }
// END Exercise 7

// BEGIN Exercise 8 -- KEEP
// Not super deep, but this is needed to show the next section

// let hidden = document.querySelector('#relaxing-images');
// hidden.classList.remove('hidden');
// END Exercise 8

// BEGIN Exercise 9 -- KEEP
// let imgs = document.querySelectorAll('.carousel-list li');
// for (let img of imgs){
//   img.classList.add('hidden');
// }
// imgs[0].classList.remove('hidden');

// END Exercise 9

// BEGIN EXERCISE 10 

// let currentImg = imgs[0];

// function goToNextSibling(event) {
//   currentImg.classList.add('hidden');
//   currentImg.nextElementSibling.classList.remove('hidden');
//   currentImg = currentImg.nextElementSibling;
// }

// END EXERCISE 10

// BEGIN EXERCISE 11 -- REPLACE PART OF 10

// function goToNextSibling(event) {
//   currentImg.classList.add('hidden');
//   if (currentImg.nextElementSibling) {   
//     currentImg.nextElementSibling.classList.remove('hidden');
//     currentImg = currentImg.nextElementSibling;
//   } else {
//     currentImg.parentElement.firstElementChild.classList.remove('hidden');
//     currentImg = currentImg.parentElement.firstElementChild;
//   }
// }
// document.querySelector('.carousel-list').addEventListener('click', goToNextSibling );

// OTHER SOLUTIONS: SOLUTION 2: Indices, Indices + Modulo

// Apply whichever solution as the click callback
// document.querySelector('.carousel-list').addEventListener('click', goToNextSibling );
// END Exercise 11


// REPLACED & RENUMBERED-- BEGIN Exercise 4.5 for...of LOOPS -- KEEP
// Find all elements with the class "is-collapsible" and 
// add the class "collapsible" to them.

// let collapsibleSections = document.querySelectorAll(".is-collapsible");

// for (let section of collapsibleSections) {
//   section.classList.add('collapsible');
// }
// REPLACED & RENUMBERED--END Exercise 4.5

// BEGIN EXAMPLE: ALL BUT ONE -- CAN REPLACE EXERCISE 5 CODE
// let headers = document.querySelectorAll(".collapsible header");
// function toggleOpen(event) { 
//   for (let header of headers) {
//     header.classList.remove('open');
//   }
//   event.currentTarget.classList.add('open'); 
// };

// for (let header of headers) {
//   header.addEventListener('click', toggleOpen);
// }

// END EXAMPLE: ALL BUT ONE