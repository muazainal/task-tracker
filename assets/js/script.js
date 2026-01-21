// Grab HTML elements by their IDs so we can use them in JS
const input = document.getElementById("taskInput");  // Task input field
const addBtn = document.getElementById("addBtn");    // "Add" button
const list = document.getElementById("taskList");    // UL that holds tasks
const themeBtn = document.getElementById("themeToggle"); // Button to toggle dark mode

// When "Add" button is clicked, run addTask function
addBtn.addEventListener("click", addTask);

// When user presses Enter in the input field, also run addTask
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask(); // Only trigger if Enter key is pressed
  }
});

// Function to create and add a new task
function addTask() {
  const text = input.value.trim(); // Get the input text and remove spaces around it
  if (text === "") return;         // Do nothing if input is empty

  const li = document.createElement("li"); // Create a new list item

  const completeBtn = document.createElement("button"); // Button to mark task complete
  completeBtn.textContent = "⚒️"; // Default icon for incomplete
  completeBtn.className = "complete-btn"; // Add CSS class for styling

  const span = document.createElement("span"); // Span to hold the task text
  span.textContent = text; // Add the text inside the span

  const deleteBtn = document.createElement("button"); // Button to delete task
  deleteBtn.textContent = "❌"; // Icon for delete
  deleteBtn.className = "delete-btn"; // Add CSS class for styling

  // Add elements to the list item in order: complete button, text, delete button
  li.appendChild(completeBtn); // LEFT
  li.appendChild(span);        // MIDDLE
  li.appendChild(deleteBtn);   // RIGHT

  // Add the new list item to the task list (UL)
  list.appendChild(li);

  // When complete button is clicked, toggle task as completed
  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed"); // Add/remove "completed" class

    // Change the icon depending on task status
    if (li.classList.contains("completed")) {
      completeBtn.textContent = "✔️"; // Show check icon if done
    } else {
      completeBtn.textContent = "⚒️"; // Show default icon if not done
    }
  });

  // When delete button is clicked, remove the task
  deleteBtn.addEventListener("click", function () {
    li.remove(); // Remove the task from the list
  });

  input.value = ""; // Clear the input field after adding
}

// Toggle dark/light theme when theme button is clicked
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark"); // Add/remove dark class on body

  // Change button icon based on current theme
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️"; // Sun icon for light mode
  } else {
    themeBtn.textContent = "🌙"; // Moon icon for dark mode
  }
});
