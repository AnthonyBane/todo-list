// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click',deleteItem);
todoList.addEventListener('click', completeItem);

// Functions
function addToDo(event){
    // Prevents form from submitting refreshing the web browser
    event.preventDefault();

    // New ToDo div element
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-item')
    
    // New ToDo list element
    const newToDoItem = document.createElement('li');
    newToDoItem.classList.add('todo');
    newToDoItem.innerText = todoInput.value;
    todoDiv.appendChild(newToDoItem);

    // Complete todo button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add('complete-button');
    todoDiv.appendChild(completeButton);
    
    // Delete todo button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    // Append new todo to list
    todoList.appendChild(todoDiv);

    // Reset input form
    todoInput.value = "";
}

function deleteItem(event){
    const target = event.target;

    if (target.classList[0] === 'delete-button'){
        const todoItem = target.parentElement;
        todoItem.remove();
    }
}

function completeItem(event){
    const target = event.target;

    if (target.classList[0] === "complete-button"){
        const todoItem = target.parentElement;
        todoItem.classList.toggle("complete");
    }
}