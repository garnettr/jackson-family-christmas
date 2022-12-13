'use strict';

import { data } from './repoData.js';

// Exporting the below Functions to App.JS
import { generateIcon } from './utils.js';

generateIcon(data[0], document.querySelector('#family-images'));


// ======================
// Intersection Observer

// Defining elements to be Observed
let imageElements;

// Set things up
// Upon page load trigger Observer
window.addEventListener("load", (event) => {
  imageElements = document.querySelectorAll("#family-images > div");

  createObserver();
}, false);


// Setting the Observer up
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  };

  observer = new IntersectionObserver(handleIntersect, options);
  // Elements to be Observed
  imageElements.forEach(element => observer.observe(element));
}
// What todo when elements enters the view 
function handleIntersect(entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      element.target.classList.add("slideUp");
    }
  });
}

console.log(data[0]);