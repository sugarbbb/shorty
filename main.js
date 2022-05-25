import './style.scss'
import "./node_modules/waypoints/lib/noframework.waypoints";
import "./node_modules/scrollreveal/dist/scrollreveal"
import "./node_modules/jquery/dist/jquery";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


const navBar = document.querySelector("#nav");
const aboutSection = document.querySelector("#middle");

new Waypoint({
  element: aboutSection,
  handler: function (direction) {
    if (direction === "down") {
      navBar.classList.toggle("site-navbar-onscroll");
    } else {
      navBar.classList.toggle("site-navbar-onscroll");
    }
  },
  offset: "75%",
});

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  // reset: true,
}).reveal('.content',{
  interval: 200
});





