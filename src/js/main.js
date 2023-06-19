

// console.log('>> Ready :)');

/*const leftBtn = document.querySelector('.js_left_button');
const rightBtn = document.querySelector('.js_right_button');
const content = document.querySelector('.js_projects');

function handleClickLeft() {
  content.scrollLeft -= 538;

  console.log('Holi');
}

function handleClickRight() {
  content.scrollLeft += 538;
  console.log('Adios');
}

leftBtn.addEventListener('click', handleClickLeft);
rightBtn.addEventListener('click', handleClickRight);*/


// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

//import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


//
// Place any custom JS here
//

// Create an example popover
// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new bootstrap.Popover(popover);
//   });

// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});
