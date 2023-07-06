let todoList = JSON.parse(localStorage.getItem('memory')) || []

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <div class="row-box">
    <div class="name-box">${name}</div> 
    <div class="date-box">${dueDate}</div>
   <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList(); saveToDoList();
    " class="delete-button">Delete</button>
    </div>
    `
    todoListHTML += html
}


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