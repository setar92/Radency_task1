class NoteList{
    constructor(listArr) {
        this.noteList = [],
        this.listArr = listArr
    }


    save() {
        localStorage.setItem("Notes", JSON.stringify(this.noteList));
    };

    open() {
        this.noteList = JSON.parse(localStorage.getItem("Notes")) || [];
    }

    noteListArr() {
        this.listArr.forEach(el => {
            this.noteList.push(new Note(el))
        });
    }

    editNote(id) {
        let index = this.listArr.findIndex(el => el.id == id);

        this.noteList[index].title = document.forms[1].nodeName.value;
        this.noteList[index].body = document.forms[1].nodeBody.value;
        this.noteList[index].category = document.forms[1].category.value;
        this.listArr[index].title = document.forms[1].nodeName.value;
        this.listArr[index].body = document.forms[1].nodeBody.value;
        this.listArr[index].category = document.forms[1].category.value;
        this.save();
    }

    addNewNote() {
        let newNoteObj = createObjNote();
        let newClassNote = new Note(newNoteObj);

        this.listArr.push(newNoteObj);
        this.noteList.push(newClassNote);
        this.save()
        return newClassNote;
    };
    removeNote(id) {
        if (confirm('Are you sure, remove?')) {
        let index = this.listArr.findIndex(el => el.id == id);
        this.noteList.splice(index, 1);
        this.listArr.splice(index, 1);        
        };
        this.save()
    };
    archiveNote(id) {
        if (confirm('Are you sure, archive?')) {
            let index = this.listArr.findIndex(el => el.id == id);
            this.noteList[index].isDone = !this.noteList[index].isDone;
            this.listArr[index].isDone = !this.listArr[index].isDone;    
            };
            this.save()
    };
}
