import { useEffect, useState } from "react";

export const SearchContents = ({ searchItem }) => {
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://itunes.apple.com/search?term=${searchItem}&limit=10`)
      .then((res) => {
        return res.json();
      })
      .then((contentData) => {
        setContents(contentData);
        setIsLoading(false);
      }).catch(err => {
        console.log('err')
      });
  }, [searchItem]);
  console.log(contents.results);

  return <></>;
};
