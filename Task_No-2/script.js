// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  var taskList = document.getElementById("taskList");
  var newTaskItem = document.createElement("div");
  newTaskItem.classList.add("task-item");
  newTaskItem.innerHTML = `
      <input type="checkbox" onclick="toggleTaskCompletion(this)">
      <span>${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  taskList.appendChild(newTaskItem);
  taskInput.value = "";
}

// Function to delete a task
function deleteTask(deleteButton) {
  var taskItem = deleteButton.parentElement;
  taskItem.remove();
}

// Function to toggle task completion
function toggleTaskCompletion(checkbox) {
  var taskText = checkbox.nextElementSibling;
  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}
