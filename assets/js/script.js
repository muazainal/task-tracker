const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");

// Add task
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Complete task
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  taskInput.value = "";
}

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
