import {validateTitle,validatePriority,validateDueDate} from "./validator.js"; 

let tasks = [];
function addTask(title, priority, d2) {
  if (
    validateTitle(title) &&
    validatePriority(priority) &&
    validateDueDate(d2)
  ) {
    tasks.push({
      title,
      priority,
      d2,
      completed: false
    });
    console.log("Task added");
  } else {
    console.log("Invalid task");
  }
}

function showTasks() {
  console.log(tasks);
}

export { addTask, showTasks };