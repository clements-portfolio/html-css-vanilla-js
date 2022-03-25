/* ~ ~ ~ ~ ~ { Initialize DOM Variables } ~ ~ ~ ~ ~ */
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clear = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const input = document.querySelector('#task');

/* ~ ~ ~ ~ ~ { Load Event Listeners } ~ ~ ~ ~ ~ */
loadEventListeners();
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clear.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

/* ~ ~ ~ ~ ~ { Get Tasks from Local Storage } ~ ~ ~ ~ ~ */
function getTasks() {
  let tasks;
  
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
  });
}

/* ~ ~ ~ ~ ~ { Add a Task } ~ ~ ~ ~ ~ */
function addTask(e) {
  e.preventDefault();

  if (input.value === '') {
    alert('Please add text for the task title...');
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(input.value));

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  storeTask(input.value);

  input.value = '';
}

/* ~ ~ ~ ~ ~ { Add Task to Local Storage } ~ ~ ~ ~ ~ */
function storeTask(task) {
  let tasks;
  
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* ~ ~ ~ ~ ~ { Filter Tasks } ~ ~ ~ ~ ~ */
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

/* ~ ~ ~ ~ ~ { Remove a Task } ~ ~ ~ ~ ~ */
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Tasks can not be recovered! Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      clearTask(e.target.parentElement.parentElement);
    }
  }
}

/* ~ ~ ~ ~ ~ { Clear a Task from Local Storage } ~ ~ ~ ~ ~ */
function clearTask(taskItem) {
  let tasks;
  
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* ~ ~ ~ ~ ~ { Clear All Tasks } ~ ~ ~ ~ ~ */
function clearTasks() {
  if (confirm('THIS WILL DELETE ALL TASKS PERMANENTLY! Are You Sure?')) {
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }

    clearAll();
  }
}

/* ~ ~ ~ ~ ~ { Clear All Tasks from LocalStorage } ~ ~ ~ ~ ~ */
function clearAll() {
  localStorage.clear();
}