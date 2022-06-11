import React from "react";
import useLoadArticlesById from "../../Hooks/useLoadArticlesById";

const SubCategories = ({ subCategories }) => {
  /* const [allArticles, isLoading] = useLoadArticlesById(subCategories.id);
  console.log("All articles", allArticles); */
  return (
    <div className="border-2 border-black rounded p-4">
      <h1 className="text-right">
        <i className="text-gray-400">{subCategories.name}</i>
      </h1>

      <div>
        {/*  {allArticles.map((article) => (
          <p key={article.id}>{article.title}</p>
        ))} */}
        {subCategories.id}
      </div>
    </div>
  );
};

export default SubCategories;
