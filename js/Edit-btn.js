const modalEdit = document.querySelector('#editModal');
const modalEditContent = modalEdit.querySelector('.modal_content');
const closeModalButton = document.querySelector('#editModal .btn-close');

function openEditWindow(id) {
    const form = modalEdit.querySelector('.inputForm');
    const tr = document.querySelector(`tr[data-id = "${id}"]`);

    form.nodeName.value = tr.querySelector(':nth-child(2)').textContent;
    form.nodeBody.value = tr.querySelector(':nth-child(5)').textContent;
    form.category.value = tr.querySelector(':nth-child(4)').textContent;

    modalEdit.classList.add('active');
    modalEditContent.classList.add('active');
    form.nodeName.focus();
};



// Логіка закривання модального вікна
window.addEventListener('click', () => {
    modalEdit.classList.remove('active');
    modalEditContent.classList.remove('active');
});

modalEditContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

closeModalButton.addEventListener('click', (e)=> {
    e.preventDefault();
    modalEdit.classList.remove('active');
    modalEditContent.classList.remove('active');    
   
});



   





