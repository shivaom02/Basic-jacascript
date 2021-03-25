'use strict';
const btnModal = document.querySelectorAll('.show-modal');
const Modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const Overlay = document.querySelector('.overlay');


for(let i =0; i< btnModal.length; i++) {
    btnModal[i].addEventListener('click', function() {
        Modal.classList.remove('hidden');
        Overlay.classList.remove('hidden');
    })
}

function hideModal () {
    Modal.classList.add('hidden');
    Overlay.classList.add('hidden');
}

closeModal.addEventListener('click', hideModal);
Overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', function (el) {
    if(el.code === 'Escape') {
        hideModal();
    }
});