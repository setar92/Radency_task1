const archiveModal = document.querySelector('#archived');
const btn_showArchive = document.querySelector('#show-Archive-btn');
const archiveContent = document.querySelector('#archived .modal_content');
const btn_closeArchive = document.querySelector('#close-archive');
const btn_open_archive = document.querySelector('#btn-open-archive');

btn_showArchive.addEventListener('click', (e) => {
    closeArchiveWindow()
    e.stopPropagation();
});

btn_open_archive.addEventListener('click', (e) => {
    closeArchiveWindow()
    e.stopPropagation();
});

// Логіка закривання модального вікна
window.addEventListener('click', ()=> {
    archiveModal.classList.remove('active');
    archiveContent.classList.remove('active');
});

archiveContent.addEventListener('click', (e) => {
    e.stopPropagation();
});

btn_closeArchive.addEventListener('click', (e)=> {
    e.preventDefault();
    archiveModal.classList.remove('active');
    archiveContent.classList.remove('active');   
});

function closeArchiveWindow() {
    archiveModal.classList.add('active');
    archiveContent.classList.add('active');
}




