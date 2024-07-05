"use client";
import React, { useState } from "react";
import BoardElement from "./board-element";
import LogComponent from "./logs-component";

interface BoardProps {
  playerX: string;
  playerO: string;
}

const BoardComponent: React.FC<BoardProps> = ({ playerX, playerO }) => {
  const [elements, setElements] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);
  const [games, setGames] = useState<{ [key: string]: string }>({});
  const [gameCount, setGameCount] = useState(1);

  const handleClick = (i: number) => {
    const newElements = elements.slice();
    if (calculateWinner(elements) || elements[i]) {
      return;
    }
    newElements[i] = xIsNext ? "X" : "O";
    setElements(newElements);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setElements(Array(9).fill(null));
    setXIsNext(true);
  };

  const handleNextGame = () => {
    const winner = calculateWinner(elements);
    if (winner || elements.every((element) => element !== null)) {
      const gameResult = winner ? (winner === "X" ? playerX : playerO) : "Draw";
      setGames({ ...games, [`Game ${gameCount}`]: gameResult });
      setGameCount(gameCount + 1);
      handleReset();
    }
  };

  const renderBoardElement = (i: number) => (
    <BoardElement key={i} value={elements[i]} onClick={() => handleClick(i)} />
  );

  const renderBoard = () => {
    const boardSize = 3;
    let board = [];
    for (let row = 0; row < boardSize; row++) {
      let boardRow = [];
      for (let col = 0; col < boardSize; col++) {
        boardRow.push(renderBoardElement(row * boardSize + col));
      }
      board.push(
        <div key={row} className="flex">
          {boardRow}
        </div>
      );
    }
    return board;
  };

  const winner = calculateWinner(elements);
  const isDraw = elements.every((element) => element !== null) && !winner;
  const status = winner
    ? `Winner: ${winner === "X" ? playerX : playerO}`
    : isDraw
    ? "It's a Draw!"
    : `${xIsNext ? playerX : playerO}'s Turn`;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl">{status}</div>
      {renderBoard()}
      <div className="flex items-center mb-10">
        <button
          onClick={handleNextGame}
          className="mt-4 p-2 bg-green-500 text-white rounded mr-4"
        >
          Next Game
        </button>
        <button
          onClick={handleReset}
          className="mt-4 p-2 bg-red-500 text-white rounded"
        >
          Stop
        </button>
      </div>
      <LogComponent playerX={playerX} playerO={playerO} games={games} />
    </div>
  );
};
const calculateWinner = (
  elements: (string | null)[],
  boardSize: number = 3
): string | null => {
  const winningLines = getWinningLines(boardSize);

  for (const line of winningLines) {
    const [a, b, c] = line;
    if (
      elements[a] &&
      elements[a] === elements[b] &&
      elements[a] === elements[c]
    ) {
      return elements[a];
    }
  }

  return null;
};

const getWinningLines = (boardSize: number): number[][] => {
  const lines: number[][] = [];

  // Horizontal lines
  for (let row = 0; row < boardSize; row++) {
    const start = row * boardSize;
    for (let col = 0; col < boardSize; col++) {
      lines.push(Array.from({ length: boardSize }, (_, i) => start + i));
      break;
    }
  }

  // Vertical lines
  for (let col = 0; col < boardSize; col++) {
    lines.push(
      Array.from({ length: boardSize }, (_, i) => col + i * boardSize)
    );
  }

  // Diagonal lines
  lines.push(Array.from({ length: boardSize }, (_, i) => i * (boardSize + 1))); // Top-left to bottom-right
  lines.push(
    Array.from({ length: boardSize }, (_, i) => (i + 1) * (boardSize - 1))
  ); // Top-right to bottom-left

  return lines;
};

export default BoardComponent;
