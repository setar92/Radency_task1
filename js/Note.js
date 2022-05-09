class Note {
    constructor(el) {
            this.title = el.title,
            this.body = el.body,
            this.category = el.category,
            this.isDone = el.isDone,
            this.id = el.id,
            this.createdDate = el.createdDate
    }
    getDatesFromBody() {
        let regEx = /[0-9]{1}[0-9]*[/][0-9]{1}[0-9]*[/][0-9]{4}/ig;
        let result = [];
        let myArray = [];

        while ((myArray = regEx.exec(this.body)) != null) {
            result.push(myArray);
        }
        return result.join(", ")
    }
   
    getCategoryIcon() {
        
        switch(this.category) {
            case "Task":            return "css/img/cart-check-fill.svg";
            case "Random Thought": return "css/img/chat-dots-fill.svg";
            case "Idea":            return "css/img/chat-square-quote-fill.svg";
        }
    }

    createNote() {
        let template = document.querySelector("#noteTemplate");
        let templateClone = template.content.cloneNode(true);

        let categoryItem = templateClone.querySelector('.notes td:nth-child(1) img').setAttribute('src', this.getCategoryIcon() );
        let title = templateClone.querySelector('.notes td:nth-child(2)').textContent = this.title;
        let createdDate = templateClone.querySelector('.notes td:nth-child(3)').textContent = this.createdDate;
        let category = templateClone.querySelector('.notes td:nth-child(4)').textContent = this.category;
        let body = templateClone.querySelector('.notes td:nth-child(5)').textContent = this.body;
        let dates = templateClone.querySelector('.notes td:nth-child(6)').textContent = this.getDatesFromBody();
        templateClone.querySelector('.notes').dataset.id = this.id;


        return templateClone
    }
}



