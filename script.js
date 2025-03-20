document.addEventListener('DOMContentLoaded', () => {
    const taskform = document.getElementById('task-form');
    const taskinput = document.getElementById('task-input');
    const tasklist = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addtask(task));

    taskform.addEventListener('submit', (e) => {
        e.preventDefault();
        addtask(taskinput.value);
        tasks.push(taskinput.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskinput.value = '';
    })

    function addtask(task){
        const li = document.createElement('li');
        li.textContent = task;

        const deletebutton = document.createElement('button');
        deletebutton.textContent = 'delete'
        deletebutton.addEventListener('click', () => {
            tasklist.removeChild(li);
            tasks = tasks.filter(t => t !== task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        })

        li.appendChild(deletebutton);
        tasklist.appendChild(li)
    }
})