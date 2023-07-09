const todoList = JSON.parse(localStorage.getItem('memory')) || []

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
        let { name, dueDate } = todoObject;
        const html = `
        <div class="row-box">
        <div class="name-box">${name}</div> 
        <div class="date-box">${dueDate}</div>
       <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList(); saveToDoList();
        " class="delete-button">Delete</button>
        </div>
        `
        todoListHTML += html

    });

document.querySelector('.js-todo-div').innerHTML = todoListHTML
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInput = document.querySelector('.js-due-date')
    const dueDate = dateInput.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = ''
    renderTodoList();

    saveToDoList()
}

function saveToDoList() {
    
    localStorage.setItem('memory', JSON.stringify(todoList))
}