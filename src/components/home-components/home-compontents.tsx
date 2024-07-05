import React from "react";
import Link from "next/link";
import MatchList from "./matches-component";
const HomeComponent = () => {
  return (
    <>
      <div className="flex p-10 items-center justify-center">
        <div className="game-board  text-center mb-10">
          <Link href="/game">
            {" "}
            <button className="border rounded-lg p-5 hover:bg-green-600  transition-all duration-300 ease-in-out ">
              Start New Game
            </button>
          </Link>
          <div className="mt-10">
            <MatchList />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
