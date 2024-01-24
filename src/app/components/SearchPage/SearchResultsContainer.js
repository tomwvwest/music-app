import { ContentTypeContainer } from "./ContentTypeContainer";

export const SearchResultsContainer = ({ contents }) => {
  const sortedContents = {};
  contents.forEach((content) => {
    if (!content.kind && sortedContents[content.wrapperType])
      sortedContents[content.wrapperType].push(content);
    else if (!content.kind && !sortedContents[content.wrapperType])
      sortedContents[content.wrapperType] = [content];
    else if (sortedContents[content.kind])
      sortedContents[content.kind].push(content);
    else sortedContents[content.kind] = [content];
  });

  //convert to an array to sort
  let arrayOfContents = [];
  for (const contentType in sortedContents) {
    if(contentType === contents[0].kind) arrayOfContents.unshift([contentType, sortedContents[contentType]])
    else arrayOfContents.push([contentType, sortedContents[contentType]]);
  }
  arrayOfContents = [arrayOfContents[0], ...arrayOfContents.slice(1).sort((a,b) => b[1].length - a[1].length)]

  //[[type, [contents]], [type, [contents]]]

  return (
    <>
      {arrayOfContents.map((contentType) => {
        return (<div key={contentType[0]} className="bg-blue bg-opacity-100 text-white rounded-2xl p-5 mt-5 overflow-hidden"><ContentTypeContainer contentType={contentType}/></div>);
      })}
    </>
  );
};
