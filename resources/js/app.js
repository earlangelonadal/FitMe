import './bootstrap';

import '../sass/app.scss'
import '../css/app.css'

import * as bootstrap from 'bootstrap'

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var banner = document.getElementById("banner");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    banner.classList.add("mt-banner")

    
  } else {
    navbar.classList.remove("sticky");
    banner.classList.remove("mt-banner");
  }
}