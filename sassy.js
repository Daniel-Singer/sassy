'use strict';


// init eventlisteners

(function initEventListeners(){
    const buttons = document.querySelectorAll('.btn-ripple');
    for(let button of buttons){
        button.addEventListener('click', rippleEffect)
    }
})();

function rippleEffect(e){

    e.preventDefault();

    const event_x = e.clientX;
    const event_y = e.clientY;

    const btn_top = e.target.offsetTop;
    const btn_left = e.target.offsetLeft;
    
    const x = event_x - btn_left;
    const y = event_y - btn_top;

    const span = document.createElement('span');
    span.classList.add('ripple');
    this.appendChild(span);

    span.style.top = y + 'px';
    span.style.left = x + 'px';

    setTimeout(() => {
        this.removeChild(span)
    }, 500)
};