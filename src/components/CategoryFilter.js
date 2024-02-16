import React from "react";

function CategoryFilter({onButton, selectedButton, categories}) {
  const category = categories.map((category, index) => {
    return (
      <>

        <button className={onButton === category ? 'selected' : ''} key={index} onClick={() => {selectedButton(category)}}>
          {category}
        </button>
      </>
    )
  })
  
  return (
    <div className="categories">
      <h4>CategoryFilter</h4>
      {category}
    </div>
  )  
}

export default CategoryFilter;