const navbar = document.querySelector('#navbar'); //select Navbar element
let navbarTopLine = navbar.offsetTop; //offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.

function stickyNavbar() {
  if (window.scrollY >= navbarTopLine) { //The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.
    document.body.style.paddingTop = navbar.offsetHeight + 'px'; //We add 'px' because The HTMLElement.offsetHeight property returns the height of an element, including vertical padding and borders, as an integer.
    document.body.classList.add('sticky-navbar'); //The classList property is useful to add, remove and toggle CSS classes on an element.
  } else {
    document.body.classList.remove('sticky-navbar');
    document.body.style.paddingTop = 0;
  }
};

window.addEventListener('scroll', stickyNavbar); //Listening on scroll event
