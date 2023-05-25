import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, filterBySelectedCategory] = useState("All")

  function handleFilterChange(event){
    filterBySelectedCategory(event.target.value)
  }
    const foodsToDisplay = items.filter((item) => {
      if (selectedCategory === "All")
      {
        return item;
      } else {
        return item.category === selectedCategory;
      }
    })
//move in category
  



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"  onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
