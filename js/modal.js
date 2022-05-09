const btn_create_note = document.querySelector('.btn-create-note');
const modal_create_note = document.querySelector('#createModal');
const modalContent = document.querySelector('#createModal div');
const closeButton = document.querySelector('#createModal .btn-close');


btn_create_note.addEventListener('click', (e) => {
    modal_create_note.classList.add('active');
    modalContent.classList.add('active');
    e.stopPropagation();
});

// Логіка закривання модального вікна
window.addEventListener('click', ()=> {
    modal_create_note.classList.remove('active');
    modalContent.classList.remove('active');
});

modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

closeButton.addEventListener('click', (e)=> {
    e.preventDefault();
    modal_create_note.classList.remove('active');
    modalContent.classList.remove('active');    
   
})
