import React, { useState } from "react";

interface LogComponentProps {
  playerX: string;
  playerO: string;
  games: { [key: string]: string };
}

const LogComponent: React.FC<LogComponentProps> = ({
  playerX,
  playerO,
  games,
}) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Match Log</h2>
      <div>
        <strong>Player X:</strong> {playerX}
      </div>
      <div>
        <strong>Player O:</strong> {playerO}
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
    </div>
  );
};

export default LogComponent;
