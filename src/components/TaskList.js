import React, { useState } from "react";
import Task from "./Task";

function TaskList( {listOfTasks} ) {
  const [tasks, setTasks] = useState(listOfTasks);

  function handleDelete(taskText) {
    const updatedTask = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTask);
  }

  const taskList = tasks.map((task) => {
    return (
      <Task key={task.text} text={task.text} category={task.category} onDelete={handleDelete}/>
    )
  })

  return (
    <div className="tasks">
      <i>
        { taskList }
      </i>
    </div>
  );
}

export default TaskList;
