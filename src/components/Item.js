import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  // Function to toggle the item's cart status
  const toggleCartStatus = () => {
    setIsInCart((prevStatus) => !prevStatus);
  };

  // Use the state variable 'isInCart' to determine the className for the <li> element
  const liClass = isInCart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
