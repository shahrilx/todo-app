document.addEventListener('DOMContentLoaded', () => {
    fetch('/')
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById('todo-list');
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo.name;
                todoList.appendChild(li);
            });
        });
});

