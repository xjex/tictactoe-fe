"use client";
import React, { useState } from "react";
import BoardComponent from "./board-components";
const Board = () => {
  const [playerX, setPlayerX] = useState<string | null>(null);
  const [playerO, setPlayerO] = useState<string | null>(null);
  const [nameX, setNameX] = useState<string>("");
  const [nameO, setNameO] = useState<string>("");

  const handleStartGame = () => {
    setPlayerX(nameX);
    setPlayerO(nameO);

    if (!nameX || !nameO) {
      alert("Please enter player names");
      return;
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {playerX && playerO ? (
        <>
          <span className="text-3xl  font-bold m-2">
            {playerX} vs {playerO}
          </span>

          <BoardComponent playerX={playerX} playerO={playerO} />
        </>
      ) : (
        <div className="flex flex-col items-center text-gray-900">
          <p className=" text-slate-300 text-left mb-3">Enter Player Names</p>

          <div>
            <p className="mb-2 text-slate-300">Player X</p>
            <input
              type="text"
              placeholder="Enter Player X name"
              value={nameX}
              onChange={(e) => setNameX(e.target.value)}
              className="mb-2 p-2 border rounded"
            />
          </div>

          <div>
            <p className=" text-slate-300 text-left">Player O</p>
            <input
              type="text"
              placeholder="Enter Player O name"
              value={nameO}
              onChange={(e) => setNameO(e.target.value)}
              className="mb-2 p-2 border rounded"
            />
          </div>
          <div className="mt-5">
            <button
              onClick={handleStartGame}
              className="p-2 border hover:bg-green-600 text-white rounded transition ease-in-out duration-300"
            >
              Start Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Board;
