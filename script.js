'use strict';

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");
const $header = document.querySelector("[data-header]");

// Toggle the navbar when clicking the toggler
$navToggler.addEventListener("click", () => {
    $navbar.classList.toggle("active");
});

// Close the navbar when clicking outside of it
document.addEventListener("click", (e) => {
    if (!$navbar.contains(e.target) && !$navToggler.contains(e.target)) {
        $navbar.classList.remove("active");
    }
});

/*HEADER SCROLL*/
window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/*Add to favorite button toggle */

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]") ;

$toggleBtns.forEach($toggleBtns => {
    $toggleBtns.addEventListener("click", () => {
        $toggleBtns.classList.toggle("active");
    });
});

/*Login*/
// JavaScript to handle the login button click and display the login form
document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default action of anchor tag
    
    // Create and open the login form container
    document.getElementById('loginForm').style.display = 'flex'; // Show the login form (you should define the login form with this ID)
});
