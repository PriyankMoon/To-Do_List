const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTaskCompletion(this)">
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.classList.add('deleted');

    // Remove the element from the DOM after the animation is complete
    li.addEventListener('transitionend', function() {
        taskList.removeChild(li);
    });
}

function toggleTaskCompletion(checkbox) {
    const li = checkbox.parentElement;
    const taskText = li.querySelector('span');

    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}

// Listen for the Enter key press event in the input field
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
