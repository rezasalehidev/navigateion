var menuBars = document.getElementById("menu-bars");
var overlay = document.getElementById("overlay");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});


function toggleNav() {
  menuBars.classList.toggle("change");
  //overlay active
  overlay.classList.toggle("overlay-active");
  //
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slider-left", "overlay-slider-right");
    navAnimation('out', 'in');
  } else {
    navAnimation('in', 'out');
    overlay.classList.replace("overlay-slider-right", "overlay-slider-left");
  }
}


// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
}