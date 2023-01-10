const listArr = JSON.parse(localStorage.getItem("Notes")) || defaultNotes;

const notes = new NoteList(listArr);
notes.noteListArr();

const tbody = document.querySelector('#mainTable tbody');
//малюємо незаархівовані нотатки
function activeNotes() {
    notes.noteList.forEach(el => {
        if (!el.isDone) {
            tbody.append(el.createNote())
        }
        renderCategorys();
        archive();
    });
}
activeNotes()

// Салюємо нотатки з архіву
function archive() {
    document.querySelector('#archiveTableBody').innerHTML='';
    notes.noteList.forEach(el => {
        if (el.isDone) {
            let note = el.createNote();
            note.querySelector('td:nth-child(7)').innerHTML='';
            document.querySelector('#archived tbody').append(note)
        }
    })
}
//Створюємо нову нотатку
document.querySelector('.inputForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newNoteClass = notes.addNewNote();
    tbody.append(newNoteClass.createNote());
    document.forms[0].reset();
   
    renderCategorys();
});

document.querySelector('#mainTableBody').addEventListener('click', (e) => {
    e.stopPropagation();
    const target = e.target;
    const tr = target.parentElement.parentElement;
    const emptyTr = tr.nextElementSibling;
    const id = tr.dataset.id;

    //edit
    if (target.parentElement.classList == 'btn-1') {
        openEditWindow(id);

        document.forms[1].addEventListener('submit', (e)=> {   
            notes.editNote(id);
        })

        renderCategorys();
    }
    //archive
    if (target.parentElement.classList == 'btn-2') {
        notes.archiveNote(id);
        tr.remove();
        emptyTr.remove();
        
        archive();
        renderCategorys();
        
    }
    //remove
    if (target.parentElement.classList == 'btn-3') {     
        notes.removeNote(id);
        tr.remove();
        emptyTr.remove();
        
        renderCategorys();
    }

});

document.querySelector('#archiveT').addEventListener('click', (e) => {
    
    e.stopPropagation();
    const target = e.target;
    const tr = target.parentElement.parentElement;
    const emptyTr = tr.nextElementSibling;
    const id = tr.dataset.id;

    if (target.parentElement.classList == 'btn-2') {
        
        notes.archiveNote(id);
        tr.remove();
        emptyTr.remove();
        
        archive();
        renderCategorys();
        tbody.innerHTML='';
        activeNotes();
    }
    //remove
    if (target.parentElement.classList == 'btn-3') {   
        console.log(3)  
        notes.removeNote(id);
        tr.remove();
        emptyTr.remove();
        
        renderCategorys();
    }
})

