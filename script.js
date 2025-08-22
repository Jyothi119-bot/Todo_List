const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const saveTasksBtn = document.getElementById('saveTasksBtn');
const taskList = document.getElementById('taskList');


window.onload = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => addTaskToDOM(task));
};


addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== "") {
    addTaskToDOM(task);
    taskInput.value = "";
  }
});


saveTasksBtn.addEventListener('click', () => {
  const tasks = [];
  const listItems = taskList.querySelectorAll('li');
  listItems.forEach(item => {
  
    tasks.push(item.firstChild.textContent);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert("Tasks saved successfully!");
});


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
