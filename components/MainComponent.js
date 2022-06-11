import React, { useState } from "react";
import useLoadAllSubCategories from "../Hooks/useLoadAllSubCategories";
import useLoadAllCategories from "./../Hooks/useLoadAllCategories";
import Categories from "./Categories/Categories";
import Loading from "./Loading/Loading";
import SubCategories from "./SubCategories/SubCategories";

const MainComponent = () => {
  const [categories, isLoading] = useLoadAllCategories();
  const [subCategories, isLoading2] = useLoadAllSubCategories();
  // console.log("SubCategories", subCategories, isLoading2);
  return isLoading || isLoading2 ? (
    <Loading></Loading>
  ) : (
    <div className="w-3/4 mx-auto">
      {/* Showing All Categories */}
      <h1 className="text-center uppercase text-2xl my-4 font-semibold">
        All Categories
      </h1>
      <div className=" grid grid-cols-4 gap-5">
        {categories.data.data.categories.map((category) => (
          <Categories key={category.id} categories={category}></Categories>
        ))}
      </div>

      {/* Showing All Sub Categories */}
      <h1 className="text-center uppercase text-2xl my-4 font-semibold">
        All Sub Categories
      </h1>
      <div className="grid grid-cols-4 gap-10">
        {subCategories.data.data.sub_categories.map((subCategory) => (
          <SubCategories
            key={subCategory.id}
            subCategories={subCategory}
          ></SubCategories>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
