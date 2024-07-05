import React from "react";
import Link from "next/link";
const Navigationcomponent = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <Link href="/">
          <li className="border hover:bg-gray-700 p-2 rounded-md transition duration-300 ease-in-out ">
            Home
          </li>
        </Link>
        <Link href="/game">
          <li className="border hover:bg-gray-700 p-2 rounded-md transition duration-300 ease-in-out ">
            Game
          </li>
        </Link>
        <Link href="/scoreboard">
          <li className="border hover:bg-gray-700 p-2 rounded-md transition duration-300 ease-in-out ">
            Scoreboard
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigationcomponent;
