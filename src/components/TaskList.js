import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  const tasksDisplayed = tasks.map((task, text) => {
    return(
      <Task key={text} text={task.text} category={task.category} handleDelete={handleDelete}/>
    )
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksDisplayed}
    </div>
  );
}

export default TaskList;