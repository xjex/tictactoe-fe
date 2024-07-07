import React, { useState } from "react";

interface LogComponentProps {
  playerX: string;
  playerO: string;
  rounds: number;
  playerXWins: number;
  playerOWins: number;
  draws: number;

  games: { [key: string]: string };
}

const LogComponent: React.FC<LogComponentProps> = ({
  playerX,
  playerO,
  games,
  playerXWins,
  playerOWins,
  draws,
  rounds,
}) => {
  const calculateLoses = (player: number, draw: number, rounds: number) => {
    return rounds - player - draw;
  };
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Match Log</h2>
      {rounds == 0 ? (
        <p className="text-sm">No games played yet</p>
      ) : (
        <>
          <div>
            <strong>{playerX} :</strong>
            {playerXWins}W -{calculateLoses(playerXWins, draws, rounds)}L
          </div>
          <div>
            <strong>{playerO} :</strong> {playerOWins}W -
            {calculateLoses(playerOWins, draws, rounds)}L
          </div>
          <div>
            <strong> Round : {rounds}</strong>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">Games:</h3>
            <ul>
              {Object.entries(games).map(([game, result], index) => (
                <li key={index}>
                  Game {game}: {result}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default LogComponent;
