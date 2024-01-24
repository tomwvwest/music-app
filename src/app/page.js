"use client";

import { useState } from "react";
import { SearchContents } from "./components/SearchContents";

export default function Home() {
  const [searchItem, setSearchItem] = useState('')

  function renderSearchItems(e){
    const inputSearch = e.target.value
    setSearchItem(inputSearch)
  }

  return (
    <main className="h-screen">
      <input placeholder="here" className="border-2" onChange={renderSearchItems}></input>
      <SearchContents searchItem={searchItem}/>
    </main>
  );
}
