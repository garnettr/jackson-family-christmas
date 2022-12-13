

'use strict'

// Exporting the below Functions to App.JS
export { generateIcon };

/* A helper function that loops through and adds 
attributes to an element  */
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


const generateIcon = function(obj, container) {
   
  // Targeted container to hold created elements
  const appContainer = container;

  /* Destructuring the Object and saving it's keys as variables */
  for (const {imgSrc: imgSrc, imgName: imgName, 
    filePaths: filePaths } of obj) {

     // Create a New Div Element to house elements
     let newContainerDiv = document.createElement("div");

     // New IMG Element for Icon
     let newImg = document.createElement("img");
     // Loop through and add attributes 
     setAttributes(newImg, {"src": imgSrc, "alt": imgName+" " +"profile picture", "width": '100px', "height": '100px'});

    // New Span Element for Image title
    let newImgTitle = document.createElement("span");
    newImgTitle.innerText = imgName;

      

     /* 
     Finally lets add the newly created elements and its content 
     inside of a Container Div
     */
     newContainerDiv.append(newImg, newImgTitle);


    // Let's add that container to the App's Container 
     appContainer.append(newContainerDiv);
  }

};

