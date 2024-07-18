import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";

function SearchBar() {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-gray-800">
      <Search />
      <Pagination />
    </div>
  );
}

export default SearchBar;
