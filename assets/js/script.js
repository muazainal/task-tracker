const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const themeBtn = document.getElementById("themeToggle");

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "☐";
  completeBtn.className = "complete-btn";

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete-btn";

  /* ORDER MATTERS */
  li.appendChild(completeBtn); // LEFT
  li.appendChild(span);        // MIDDLE
  li.appendChild(deleteBtn);   // RIGHT

  list.appendChild(li);

  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      completeBtn.textContent = "✔";
    } else {
      completeBtn.textContent = "☐";
    }
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  input.value = "";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});
