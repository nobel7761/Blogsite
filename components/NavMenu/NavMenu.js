import Link from "next/link";
import React from "react";
import classes from "./NavMenu.module.css";
import useLoadAllArticles from "./../../Hooks/useLoadAllArticles";
import { useRouter } from "next/router";

const NavMenu = () => {
  const router = useRouter();
  const [allArticles, isLoading] = useLoadAllArticles();
  const articles = allArticles?.data?.data?.articles;

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchItem = event.target.searchItem.value;
    event.target.reset();

    articles?.find((element) =>
      element.title === searchItem ? router.push(`/article`) : ""
    );
  };

  return (
    <div>
      <div className={classes.banner}>
        <div className="w-3/4 mx-auto flex justify-between py-2">
          <Link href="/">
            <p className="cursor-pointer font-extrabold text-3xl hover:text-white">
              BLOG SITE
            </p>
          </Link>

          <Link href="/create">
            <p className="cursor-pointer font-medium hover:text-white">
              Create New Article
            </p>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-40 flex flex-col justify-center items-center">
            <input
              type="text"
              name="searchItem"
              className="w-1/3 p-2 rounded"
              placeholder="Search Your Article"
              required
            />
            <button
              type="submit"
              className="border-2 border-black text-white px-8 py-1 rounded mt-2 hover:bg-blue-600 hover:text-black"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* {allArticles.data.data.articles.map((article) =>
        article.title === searchItem ? (
          <p key={article.id}>{article.title}</p>
        ) : (
          "Not Found"
        )
      )} */}
    </div>
  );
};

export default NavMenu;
