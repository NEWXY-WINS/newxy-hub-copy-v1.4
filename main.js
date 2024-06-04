// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Set active slide
    slides[slideIndex - 1].style.display = "block";

    // Update dot indicators
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
}

     // Function to change the background image and save it to local storage
// Function to change the background and save it to localStorage
function changeBackground() {
  // Get the image URL from the input field
  var imageUrl = document.getElementById('backgroundUrl').value;
  
  // Change the background image of the body
  document.body.style.backgroundImage = 'url(' + imageUrl + ')';
  
  // Save the image URL to local storage
  localStorage.setItem('backgroundImageUrl', imageUrl);
}

// Function to load the background image from local storage
function loadBackgroundImage() {
  // Check if a background image URL is saved in local storage
  var savedImageUrl = localStorage.getItem('backgroundImageUrl');
  if (savedImageUrl) {
    // Set the background image of the body to the saved URL
    document.body.style.backgroundImage = 'url(' + savedImageUrl + ')';
  }
}

// Call the loadBackgroundImage function when the page loads
window.addEventListener('load', loadBackgroundImage);

