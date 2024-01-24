"use client";

import { useState } from "react";
import { SearchContents } from "../components/SearchPage/SearchContents";

export default function SearchPage() {
  const [searchItem, setSearchItem] = useState("");

  function renderSearchItems(e) {
    const inputSearch = e.target.value;
    setSearchItem(inputSearch);
  }
  return (
    <>
      <div className="flex items-center">
        <input
          placeholder="Search MyMusic..."
          className="border-[1px] placeholder:italic pl-2 focus:outline-none rounded-3xl w-96 p-2 bg-blue bg-opacity-20"
          onChange={renderSearchItems}
        ></input>
        <img src="Search.png" className="ml-1 w-8 h-8"></img>
      </div>
      <SearchContents searchItem={searchItem} />
    </>
  );
}
