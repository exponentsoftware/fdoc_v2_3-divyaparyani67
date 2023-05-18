// 2. Create an array of objects called `projects`. Each object should have keys called `name`, `client`, and `tasks`. The `tasks` key should be an array of task objects with properties `title`, `assignee`, `status`, and `dueDate`. Then, create the following functions:

//    a. `findOverdueTasks` - Returns an array of tasks with a due date before a specified date.

//    b. `assignTaskToEmployee` - Assigns a task with a specified title to an employee with a given name, only if the employee and task exist.

//    c. `updateTaskStatus` - Updates a task's status in a specified project only if the task and project exist. This function should be able to update the task's status.

const projects = [
  // ... (Your array of projects with their information)
  {
    name: "Project 1",
    client: "TCS",
    tasks: [
      {
        title: "Task 1 ",
        assignee: "Greta",
        status: "Completed",
        dueDate: new Date("2023-05-16"),
      },
    ],
  },
  {
    name: "Project 2",
    client: "Wipro",
    tasks: [
      {
        title: "Task 2",
        assignee: "Anna",
        status: "In Progress",
        dueDate: new Date("2023-05-18"),
      },
    ],
  },
];

// function findOverdueTasks(projects, specifiedDate) {
//   const overdueTasks = [];

//   for (const project of projects) {
//     for (const task of project.tasks) {
//       if (task.dueDate < specifiedDate) {
//         overdueTasks.push(task);
//       }
//     }
//   }

//   return overdueTasks;
// }

//console.log(findOverdueTasks(projects, new Date("2023-05-18")));
// Output: Returns an array of tasks with a due date before '2023-05-01'

function assignTaskToEmployee(projects, projectName, taskTitle, assignee) {
 
}

console.log(assignTaskToEmployee(projects, "Project 1", "Task 1", "Alice"));
// Output: Assigns the task with title 'Task 1' in project 'Project 1' to the employee with name 'Alice'

function updateTaskStatus(projects, projectName, taskTitle, taskStatus) {
  
}

//console.log(updateTaskStatus(projects, "Project 1", "Task 1", "In Progress"));
// Output: Updates the task's status in the project with name 'Project 1'
