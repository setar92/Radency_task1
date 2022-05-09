let defaultNotes =[
    {
        title: "first date",
        body: "05/05/2020 I will go on a date 05/05/2020.",
        category: "Idea",
        id: 1,
        isDone: false,
        createdDate: 'April 21, 2022'
    },

    {
        title: "You have to do your homework tomorrow ",
        body: "You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow. You have to do your homework tomorrow",
        category: "Task",
        id: 2,
        isDone: false,
        createdDate: 'April 21, 2022'
    },

    {
        title: "Buy a gift",
        body: "Buy a gift for brother's birthday",
        category: "Task",
        id: 3,
        isDone: false,
        createdDate: 'April 21, 2022'
    },

    {
        title: "ostriches",
        body: "Start raising ostriches. It is necessary to order food for them no later than 25/05/2022",
        category: "Idea",
        id: 4,
        isDone: false,
        createdDate: 'April 20, 2022'
    },

    {
        title: "Why",
        body: "Why do planes fly and not fall?",
        category: "Random Thought",
        id: 5,
        isDone: false,
        createdDate: 'April 13, 2022'
    },

    {
        title: "doctor",
        body: "Visits to the doctor 15/04/2022",
        category: "Task",
        id: 6,
        isDone: true,
        createdDate: 'April 19, 2022'
    },

    {
        title: "journey",
        body: "Go on a journey",
        category: "Idea",
        id: 7,
        isDone: true,
        createdDate: 'April 21, 2022'
    }
];


function countCategory() {   
    const countArchived = {
        Task: 0,
        Idea: 0,
        RandomThought: 0
    };
    const countActive = {
        Task: 0,
        Idea: 0,
        RandomThought: 0
    };
    const count =[];

    noteList = JSON.parse(localStorage.getItem("Notes")) || defaultNotes;

    noteList.filter(note => note.isDone===true).map(note=> {
        switch (note.category) {
            case 'Task': countArchived.Task += 1;
            break;
            case 'Idea': countArchived.Idea += 1;
            break
            case 'Random Thought': countArchived.RandomThought += 1;
            break
        } 
    });
    noteList.filter(note => note.isDone===false).map(note=> {
        switch (note.category) {
            case 'Task': countActive.Task += 1;
            break;
            case 'Idea': countActive.Idea += 1;
            break
            case 'Random Thought': countActive.RandomThought += 1;
            break
        } 
    });
    count[0]=countArchived;
    count[1]=countActive;
    return count
}

function renderCategorys() {
    const categorysTemplate = document.querySelector('#categorysTemplate');
    const categorysTemplateClone = categorysTemplate.content.cloneNode(true);
    const categorysTable = document.querySelector('#archiveTable tbody');
    // Очіщаємо табличку, на випадок якщо ми її перемальовуємо
    categorysTable.innerHTML='';

    // Рахуємо кількість нотаток кожної категорії
    const count = countCategory();
    // Малюємо рядок з кількостями нотаток по категоріям, якщо такі нотатки є (хоча б 1)
    if (count[0].Task||count[1].Task) {
        const taskTemplate = categorysTemplateClone.cloneNode(true);
        taskTemplate.querySelector('#categoryTr img').setAttribute('src', "css/img/cart-check-fill.svg" );
        taskTemplate.querySelector('#categoryTr td:nth-child(2)').textContent = 'Task';
        taskTemplate.querySelector('#categoryTr td:nth-child(3)').textContent = count[1].Task;
        taskTemplate.querySelector('#categoryTr td:nth-child(4)').textContent = count[0].Task;
       
        categorysTable.append(taskTemplate);
        
    }
    if (count[0].Idea||count[1].Idea) {
        const ideaTemplate = categorysTemplateClone.cloneNode(true);
        ideaTemplate.querySelector('#categoryTr img').setAttribute('src', "css/img/chat-square-quote-fill.svg" );
        ideaTemplate.querySelector('#categoryTr td:nth-child(2)').textContent = 'Idea';
        ideaTemplate.querySelector('#categoryTr td:nth-child(3)').textContent = count[1].Idea;
        ideaTemplate.querySelector('#categoryTr td:nth-child(4)').textContent = count[0].Idea;
        
        categorysTable.append(ideaTemplate);    
    }
    if (count[0].RandomThought||count[1].RandomThought) {
        const randomThoughtTemplate = categorysTemplateClone.cloneNode(true);
        randomThoughtTemplate.querySelector('#categoryTr img').setAttribute('src', "css/img/chat-dots-fill.svg" );
        randomThoughtTemplate.querySelector('#categoryTr td:nth-child(2)').textContent = 'Random Thought';
        randomThoughtTemplate.querySelector('#categoryTr td:nth-child(3)').textContent = count[1].RandomThought;
        randomThoughtTemplate.querySelector('#categoryTr td:nth-child(4)').textContent = count[0].RandomThought;
        
        categorysTable.append(randomThoughtTemplate);  
    }

    
}
