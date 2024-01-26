import { useUserContext } from "@/app/contexts/userContext";
import { useEffect, useState } from "react";

export const SingleContentContainer = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useUserContext();

  useEffect(() => {
    fetch(`/api/users/${user.user_id}`)
      .then((res) => res.json())
      .then(({user}) => {
        const parsedLib = user.library.map(content => JSON.parse(content))
        console.log(parsedLib.includes(content))
        // console.log(content)
      });
  }, []);

  function extractReleaseYear(str) {
    return str.slice(0, 4);
  }
  function handleHover() {
    setIsHovered(!isHovered);
  }

  function addToLibrary(e) {
    fetch(`/api/users/${user.user_id}/library`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    })
      .then((res) => {
        return res.json();
      })
      .then(({ newContent }) => {
        // console.log(newContent);
      });
    // .catch(err => {

    // })
  }

  return (
    <div
      className="w-36 relative mr-3 hover:bg-white hover:bg-opacity-30 rounded-xl p-2"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={content.artworkUrl100} className="w-32 h-32"></img>
      <div className="mt-1 ml-1">
        <p className="font-semibold overflow-hidden h-6 whitespace-nowrap overflow-ellipsis">
          {content.trackName || content.collectionName}
        </p>
        <p className="overflow-hidden h-6 whitespace-nowrap overflow-ellipsis hover:underline">
          {content.artistName}
        </p>
      </div>
      <p className="absolute top-3 right-2 text-xs bg-white bg-opacity-80 text-black p-[2px] rounded-bl-lg rounded-tl-lg pl-1">
        {extractReleaseYear(content.releaseDate)}
      </p>
      <div
        className={`${
          isHovered ? "opacity-100" : "opacity-0"
        } w-7 h-7 border-black border rounded-full absolute top-4 left-4 flex bg-white bg-opacity-80 hover:cursor-pointer`}
        onClick={addToLibrary}
      >
        <img src="add.png"></img>
      </div>
    </div>
  );
};
