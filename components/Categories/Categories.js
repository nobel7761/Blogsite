import React, { useState } from "react";

const Categories = ({ categories }) => {
  return (
    <div>
      <p className="w-full bg-orange-500 hover:bg-black text-white text-center p-2 rounded mr-3 my-4">
        {categories.name}
      </p>
    </div>
  );
};

export default Categories;
