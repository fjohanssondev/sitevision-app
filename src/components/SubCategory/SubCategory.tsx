import React from 'react'
import { useLocation } from 'react-router-dom';

const SubCategory = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const subCategory = params.get("sub-category");

  return (
    <div>
      <h2>Selected Category: {category}</h2>
      <h3>Selected Sub-Category: {subCategory}</h3>
    </div>
  );
};

export default SubCategory