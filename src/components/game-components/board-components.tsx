"use client";
import React, { useState, useEffect } from "react";
import BoardElement from "./board-element";
import LogComponent from "./logs-component";
import { useAppDispatch } from "@/redux/store/store";

import { createMatchLog } from "@/redux/actions/match-actions";
import { useRouter } from "next/navigation";

interface BoardProps {
  playerX: string;
  playerO: string;
}

const BoardComponent: React.FC<BoardProps> = ({ playerX, playerO }) => {
  const router = useRouter();
  const [elements, setElements] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);
  const [games, setGames] = useState<{ [key: string]: string }>({});
  const [gameCount, setGameCount] = useState(1);
  const [isEnded, setIsEnded] = useState(false);
  const [playerXWins, setPlayerXWins] = useState(0);
  const [playerOWins, setPlayerOWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const [rounds, setRounds] = useState(0);

  const winner = calculateWinner(elements);

  const isDraw = elements.every((element) => element !== null) && !winner;

  const dispatch = useAppDispatch();

  const handleClick = (i: number) => {
    if (isEnded || elements[i]) return;

    const newElements = elements.slice();
    newElements[i] = xIsNext ? "X" : "O";
    setElements(newElements);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    if (winner || isDraw) {
      checkStatus();
      setIsEnded(true);
    }
  }, [elements]);

  const handleStop = () => {
    dispatch(
      createMatchLog({
        playerX: playerX,
        playerO: playerO,
        games: games,
        stats: {
          playerXWins: playerXWins,
          playerOWins: playerOWins,
          draws: draws,
        },
        rounds: rounds,
      })
    );

    router.push("/");
  };

  const handleReset = () => {
    setElements(Array(9).fill(null));
    setIsEnded(false);
    setXIsNext(true);
  };

  const handleNextGame = () => {
    const winner = calculateWinner(elements);
    if (winner || elements.every((element) => element !== null)) {
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

  const checkStatus = () => {
    if (winner || elements.every((element) => element !== null)) {
      const gameResult = winner ? (winner === "X" ? playerX : playerO) : "Draw";
      setGames({ ...games, [`${gameCount}`]: gameResult });
      setGameCount(gameCount + 1);
      setRounds(rounds + 1);

      if (winner === "X") {
        setPlayerXWins(playerXWins + 1);
      } else if (winner === "O") {
        setPlayerOWins(playerOWins + 1);
      } else if (isDraw) {
        setDraws(draws + 1);
      }
    }
  };

  const status = winner
    ? `Winner: ${winner === "X" ? playerX : playerO}`
    : isDraw
    ? "It's a Draw!"
    : `${xIsNext ? playerX : playerO}'s Turn`;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl">{status}</div>
      {renderBoard()}

      {isEnded && (
        <div className="flex items-center ">
          <button
            onClick={handleNextGame}
            className="mt-4 p-2 bg-green-500 text-white rounded mr-4"
          >
            Continue
          </button>
          <button
            onClick={handleStop}
            className="mt-4 p-2 bg-red-500 text-white rounded"
          >
            Stop
          </button>
        </div>
      )}
      <div className="mt-4">
        <LogComponent
          playerX={playerX}
          playerO={playerO}
          rounds={rounds}
          playerXWins={playerXWins}
          playerOWins={playerOWins}
          draws={draws}
          games={games}
        />
      </div>
      <div></div>
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
  // Top-left to bottom-right
  lines.push(Array.from({ length: boardSize }, (_, i) => i * (boardSize + 1)));

  // Top-right to bottom-left
  lines.push(
    Array.from({ length: boardSize }, (_, i) => (i + 1) * (boardSize - 1))
  );

  return lines;
};

export default BoardComponent;
