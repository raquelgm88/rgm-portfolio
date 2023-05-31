'use strict';

console.log('>> Ready :)');

const leftBtn = document.querySelector('.fa-circle-chevron-left');
const rightBtn = document.querySelector('.fa-circle-chevron-right');
const content = document.querySelector('.projects__all');

const handleClickLeft = () => {
    content.scrollRight +=800;
}

leftBtn.addEventListener('click', handleClickLeft);
rightBtn.addEventListener('click', handleClickRight);