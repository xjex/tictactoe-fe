import Board from "@/components/game-components/board";
import React from "react";

const GamePage = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold mb-5">Tic-Tac-Toe</h1>
        <Board />
      </div>
    </>
  );
};

export default GamePage;
