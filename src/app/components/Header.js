export const Header = () => {
  return (
    <section className="border-b bg-blue h-18 fixed w-screen flex justify-between items-center text-white px-10">
      <img src="Logo.png" className="h-16"></img>
      <ul className="flex text-xs">
        <li className="ml-4 flex flex-col items-center hover:bg-white hover:bg-opacity-40 p-1 px-2 rounded-xl transition-[3s]">
          <img src="home.png" className="mb-[2px]"></img>
          Home
        </li>
        <li className="ml-4 flex flex-col items-center hover:bg-white hover:bg-opacity-40 p-1 px-2 rounded-xl transition-[3s]">
          <img src="library.png" className="mb-[2px]" ></img>Your Library
        </li>
        <li className="ml-4 flex flex-col items-center hover:bg-white hover:bg-opacity-40 p-1 px-2 rounded-xl transition-[3s]">
          <img src="search.png" className="mb-[2px]"></img>Search
        </li>
        <li></li>
      </ul>
    </section>
  );
};
