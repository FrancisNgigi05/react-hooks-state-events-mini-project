import React from "react";

function CategoryFilter({ categories, categoryButton, setCategoryButton }) {
  const buttonsDisplayed = categories.map((category, index) => {
    return (
        <button key={index} className={categoryButton === category ? "selected": "" } onClick={()=>setCategoryButton(category)}>{category}</button>
    )
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonsDisplayed}
    </div>
  );
}

export default CategoryFilter;