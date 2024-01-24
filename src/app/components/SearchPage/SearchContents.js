import { useEffect, useState } from "react";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { SearchResultsContainer } from "./SearchResultsContainer";

export const SearchContents = ({ searchItem }) => {
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(true);

  useEffect(() => {
    if (!searchItem.length) {
      setIsEmptySearch(true);
      return;
    }
    setIsLoading(true);
    fetch(`https://itunes.apple.com/search?term=${searchItem}`)
      .then((res) => {
        return res.json();
      })
      .then((contentData) => {
        setContents(contentData.results);
        setIsEmptySearch(false)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchItem]);

  if (isEmptySearch)
    return (
      <p className="opacity-60 italic text-2xl mt-8 ml-4">Search MyMedia</p>
    );

  if (!contents.length) {
    return <p className="opacity-60 italic text-2xl mt-8 ml-4">No results.</p>;
  }
  if (isLoading) return <LoadingSkeleton />;

  return <SearchResultsContainer contents={contents}/>;
};
