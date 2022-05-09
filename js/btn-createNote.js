    function createObjNote() {
        const form = document.forms[0];
        let objNewNote = new Object;
    
        objNewNote.title = form.nodeName.value;
        objNewNote.body = form.nodeBody.value;
        objNewNote.category = form.category.value;
        objNewNote.createdDate = getDateNow();
        objNewNote.id = Date.now();
        objNewNote.isDone = false;

        
        return objNewNote
    }

    function getDateNow() {
        let date = new Date();
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
    
        return date.toLocaleString("en-US", options)
    };
    

    
    
    
