document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
  
    addTaskBtn.addEventListener('click', function() {
      const taskName = taskInput.value.trim();
      if (taskName !== '') {
        const task = createTaskElement(taskName);
        pendingTasksList.appendChild(task);
        taskInput.value = '';
      }
    });
  
    function createTaskElement(taskName) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const span = document.createElement('span');
      span.textContent = taskName;
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
  
      editBtn.addEventListener('click', function() {
        const newTaskName = prompt('Edit task:', taskName);
        if (newTaskName !== null && newTaskName.trim() !== '') {
          span.textContent = newTaskName;
        }
      });
  
      deleteBtn.addEventListener('click', function() {
        li.remove();
      });
  
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          const completedTask = createTaskElement(taskName);
          completedTask.classList.add('completed');
          completedTasksList.appendChild(completedTask);
          li.remove();
        } else {
          pendingTasksList.appendChild(li);
          li.classList.remove('completed');
        }
      });
  
      return li;
    }
  });
