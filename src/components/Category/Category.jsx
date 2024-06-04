import React from "react";
import "./category.scss";
function Category({ srcImg, alt, category }) {
  return (
    <div className="categoryContainer">
      <img src={srcImg} alt={alt} />
      <p>{category}</p>
    </div>
  );
}

export default Category;
