const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const saveTasksBtn = document.getElementById('saveTasksBtn');
const taskList = document.getElementById('taskList');

// Load saved tasks from localStorage on page load
window.onload = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => addTaskToDOM(task));
};

// Add task temporarily (not saved yet)
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== "") {
    addTaskToDOM(task);
    taskInput.value = "";
  }
});

// Save all current tasks to localStorage
saveTasksBtn.addEventListener('click', () => {
  const tasks = [];
  const listItems = taskList.querySelectorAll('li');
  listItems.forEach(item => {
    // Get the text excluding the delete button
    tasks.push(item.firstChild.textContent);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert("Tasks saved successfully!");
});

// Add task to the DOM
function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}