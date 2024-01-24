"use client";
import Link from "next/link";
import { useUserContext } from "../contexts/userContext";

export const Header = () => {
  const { user, setUser } = useUserContext();

  return (
    <section className="border-b bg-blue h-18 fixed w-screen flex justify-between items-center text-white px-10">
      <Link href="/">
        <img src="Logo.png" className="h-16"></img>
      </Link>
      <ul className="flex text-xs items-center">
        <Link href="/">
          <li className="ml-4 flex flex-col items-center hover:bg-white hover:bg-opacity-40 p-1 px-2 rounded-xl transition-[3s]">
            <img src="home.png" className="mb-[2px]"></img>
            Home
          </li>
        </Link>
        <li className="ml-4 flex flex-col items-center hover:bg-white hover:bg-opacity-40 p-1 px-2 rounded-xl transition-[3s]">
          <img src="library.png" className="mb-[2px]"></img>Your Library
        </li>
        <Link href="/search">
          <li className="ml-4 flex flex-col items-center hover:bg-white hover:bg-opacity-40 p-1 px-2 rounded-xl transition-[3s]">
            <img src="search.png" className="mb-[2px]"></img>Search
          </li>
        </Link>
        <li className="ml-4 flex items-center hover:bg-white hover:bg-opacity-40 p-1 px-2 rounded-xl transition-[3s] italic">
          {user.username}
          <div className="w-10 h-10 overflow-hidden border rounded-full ml-2 mb-[2px]">
            <img src={user.image_url} className=""></img>
          </div>
        </li>
      </ul>
    </section>
  );
};
