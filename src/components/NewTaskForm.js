import React, { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit } ) {
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  const categoriesDisplayed = categories.map((category, index) => {
    if (category !== "All") {
      return(
        <option key={index}  value={category}>{category}</option>
      );
    }
    else {
      return (null);
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const addTask = {
      text: newTask,
      category: newCategory
    }

    onTaskFormSubmit(addTask);

    setNewCategory("Code");
    setNewTask("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={(e)=>setNewCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categoriesDisplayed}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;