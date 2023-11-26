const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    let completedCount = 0;

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '12345') {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('mainPage').style.display = 'block';
        } else {
            alert('Invalid login credentials');
        }
    }

    function showTodoList() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(todos => {
                const todoListDiv = document.getElementById('todoList');
                todoListDiv.innerHTML = '<h3>Todo List</h3>';

                todos.forEach(todo => {
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = todo.completed;
                    checkbox.disabled = true;

                    const label = document.createElement('label');
                    label.appendChild(checkbox);
                    label.appendChild(document.createTextNode(todo.title));

                    todoListDiv.appendChild(label);

                    if (todo.completed) {
                        completedCount++;
                    }
                });

                checkCompletedTasks();
            });
    }

    function checkCompletedTasks() {
        if (completedCount === 5) {
            alert('Congrats. 5 Tasks have been Successfully Completed');
            completedCount = 0; // Reset count after displaying the alert
        }
    }

    function logout() {
        document.getElementById('loginPage').style.display = 'block';
        document.getElementById('mainPage').style.display = 'none';
    }