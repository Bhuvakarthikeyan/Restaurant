import React from "react";

const Categories = (props) => {
  return (
    <div className="btn-container">
      {props.categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              props.activeCategory === category
                ? "filter-btn active"
                : "filter-btn"
            }`}
            key={index}
            onClick={() => props.filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
