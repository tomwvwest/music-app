import { SingleContentContainer } from "./SingleContentContainer";

export const ContentTypeContainer = ({ contentType }) => {
  contentType[0] = contentType[0][0].toUpperCase() + contentType[0].slice(1);

  return (
    <>
      <p className="font-bold text-2xl mb-4">{contentType[0]}s</p>
      <div className="flex overflow-auto">
        {contentType[1].map((content, i) => {
          return (
            <div key={i}>
              <SingleContentContainer content={content} />
            </div>
          );
        })}
      </div>
    </>
  );
};
