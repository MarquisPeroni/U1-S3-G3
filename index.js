document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('taskForm');
    const inputTask = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('tasks');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskName = inputTask.value.trim();

        if (taskName !== '') {
            addTask(taskName);
            inputTask.value = '';
        }
    });

    function addTask(taskName) {

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskText = document.createElement('span');
        taskText.textContent = taskName;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            tasksContainer.removeChild(taskDiv);
        });

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteButton);

        tasksContainer.appendChild(taskDiv);
    }
});
