/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
//rollover    

"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    const caption = $("#caption");        // the h2 element for the caption
    const mainImage = $("#main_image");   // the img element for the show
        
    // get all the <a> tags in the ul element
    const links = $("#image_list").querySelectorAll("a");
    
    // Process image links
    const imageCache = [];
    let image = null;
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // Start slide show
    let imageCounter = 0;
    setInterval( () => { 
        // calculate the index for the current image
        imageCounter = (imageCounter + 1) % imageCache.length;
        // get image from array
        image = imageCache[imageCounter];
        // set HTML img and h2 with values from image object
        mainImage.src = image.src;
        mainImage.alt = image.alt;
        caption.textContent = image.alt;
    },
    2000);  // 2 second interval
});

//navbar hamburger icon
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//clock
function displayTime() {
    let clock = document.querySelector("#clock"); // Get element with id="clock"
    let now = new Date();                         // Get current time
    clock.textContent = now.toLocaleTimeString(); // Display time in the clock
}
displayTime()                    // Display the time right away
setInterval(displayTime, 1000);  // And then update it every second. 




//form
 const visToggle = document.querySelector('.eyeIcon');

        const input = document.querySelector('#pwdWrap input');
        
        var password = true;
        
       visToggle.addEventListener('click', function(){
                 if(password) {
                     input.setAttribute('type','text'); // using js dynamically changed the type attribute
                     visToggle.classList.remove('fa-eye');
                     visToggle.classList.add('fa-eye-slash');
                 } else {
                     input.setAttribute('type','password');
                     visToggle.classList.remove('fa-eye-slash');
                     visToggle.classList.add('fa-eye');
                 }
            password = !password;
              });
              
 
//bmi calculator
function bmi () {
var height = Number(document.getElementById("height").value);
var weight = Number(document.getElementById("weight").value);
var result = weight / (height * height);
document.getElementById("result").innerHTML = "Your Result: " + result.toFixed(2);
}



