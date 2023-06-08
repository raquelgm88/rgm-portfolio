'use strict';

console.log('>> Ready :)');

const leftBtn = document.querySelector('.js_left_button');
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
rightBtn.addEventListener('click', handleClickRight);