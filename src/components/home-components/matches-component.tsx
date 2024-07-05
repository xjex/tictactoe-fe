import React from "react";

const MatchList = () => {
  return (
    <div className="p-5 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Match List</h1>
        <div className="cards flex flex-wrap gap-4 max-w-4xl p-5 rounded-lg shadow-lg bg-gray-800">
          {/* Card 1 */}
          <div className="card flex-1 min-w-[200px] border p-5 rounded-lg mb-4 hover:text-gray-900 hover:bg-slate-600 transition ease-in-out duration-300 cursor-pointer">
            <h2 className="text-xl font-bold">Player X vs Player O</h2>
            <p className="mb-2">(Date Time)</p>
            <div className="matches max-h-[calc(5*1.85rem)] overflow-y-auto scroll-m-1">
              <p className="text-lg font-semibold">Game 1: Player X</p>
              <p className="text-lg font-semibold">Game 2: Player Y</p>
              <p className="text-lg font-semibold">Game 3: Player Z</p>
              <p className="text-lg font-semibold">Game 4: Player A</p>
              <p className="text-lg font-semibold">Game 5: Player B</p>
              <p className="text-lg font-semibold">Game 6: Player C</p>
              <p className="text-lg font-semibold">Game 7: Player D</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card flex-1 min-w-[200px] border p-5 rounded-lg mb-4 hover:text-gray-900 hover:bg-slate-600 transition ease-in-out duration-300 cursor-pointer">
            <h2 className="text-xl font-bold">Player X vs Player O</h2>
            <p className="mb-2">(Date Time)</p>
            <div className="matches max-h-[calc(5*1.85rem)] overflow-y-auto scroll-m-1">
              <p className="text-lg font-semibold">Game 1: Player X</p>
              <p className="text-lg font-semibold">Game 2: Player Y</p>
              <p className="text-lg font-semibold">Game 3: Player Z</p>
              <p className="text-lg font-semibold">Game 4: Player A</p>
              <p className="text-lg font-semibold">Game 5: Player B</p>
              <p className="text-lg font-semibold">Game 6: Player C</p>
              <p className="text-lg font-semibold">Game 7: Player D</p>
            </div>
          </div>

          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default MatchList;
