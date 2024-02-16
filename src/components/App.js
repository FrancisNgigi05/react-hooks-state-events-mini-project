import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categories] = useState(CATEGORIES)
  const [categoryButton, setCategoryButton] = useState("All");
  const [task, setTask] = useState(TASKS);

  function addNewItem(newItem) {
    setTask([...task, newItem])
  }

  function deleteItem(deleteItem) {
    setTask(task.filter((item) => {
      return (item.text !== deleteItem);
    }))
  }

  const displayedItem = task.filter((item) => {
    if(categoryButton === "All") {
      return (true);
    }
    else {
      return (categoryButton === item.category);
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onButton={categoryButton} selectedButton={setCategoryButton}/>
      <NewTaskForm onTaksFormSubmit={addNewItem} categories={categories}/>
      <TaskList deletedItem={deleteItem} tasks={displayedItem}/>
    </div>
  )
}

export default App;