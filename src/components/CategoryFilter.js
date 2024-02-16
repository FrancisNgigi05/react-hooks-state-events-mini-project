import React, { useState } from "react";

function CategoryFilter({ categoriesList }) {
  const [selectedCategory, setSelectedCategory] = useState([]);

  function handleCategory(category) {
    setSelectedCategory([...categoriesList]);
  }

  const categoriesDisplayedUsingFilter = selectedCategory.filter((categoryList) => {
    if(categoryList === "All") {
      return (true);
    }
    else {
       
    }
  })

  const categoriesDisplayedUsingMap = ;
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* code the button below here */}
      <button onClick={handleCategory}>
        
      </button>
    </div>
  );
}

export default CategoryFilter;
