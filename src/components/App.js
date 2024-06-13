import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categories] = useState(CATEGORIES);
  const [tasks, setTasks] = useState(TASKS);
  const [categoryButton, setCategoryButton] = useState("All");

  const handleDelete = (text) => {
    const newArray = tasks.filter((task) => {
      return(task.text !== text);
    })

    setTasks(newArray);
  }

  const diplayedItems = tasks.filter((task) => {
    if (categoryButton === "All") {
      return (true);
    }
    else {
      return (task.category === categoryButton);
    }
  })

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} categoryButton={categoryButton} setCategoryButton={setCategoryButton}  />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={categories} />
      <TaskList tasks={diplayedItems} handleDelete={handleDelete} />
    </div>
  );
}

export default App;