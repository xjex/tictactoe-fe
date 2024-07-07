"use client";
import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "@/redux/store/store";
import { selectMatch, isLoading, isError } from "@/redux/store/slice";
import { getMatchLogs } from "@/redux/actions/match-actions";

const MatchList = () => {
  const dispatch = useAppDispatch();
  const matchList = useAppSelector(selectMatch);
  const isAPILoading = useAppSelector(isLoading);
  const isAPIError = useAppSelector(isError);

  useEffect(() => {
    dispatch(getMatchLogs());
  }, [dispatch]);

  const calculateLoses = (player: number, draw: number, rounds: number) => {
    return rounds - player - draw;
  };

  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Match Histories</h1>
        <div className="cards flex flex-wrap gap-4 max-w-6xl p-5 rounded-lg shadow-lg bg-gray-800">
          {isAPILoading ? (
            <div className="text-center">Loading...</div>
          ) : isAPIError ? (
            <div className="text-center">Error on API</div>
          ) : (
            <>
              {matchList
                .slice()
                .sort(
                  (a, b) =>
                    new Date(b.dateTime).getTime() -
                    new Date(a.dateTime).getTime()
                )
                .map((entry) => (
                  <div
                    key={entry._id}
                    className="flex-1 min-w-[200px] border p-5 rounded-lg mb-4 hover:text-gray-900 hover:bg-slate-400 transition ease-in-out duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-center ">
                      <span className="text-lg font-bold underline underline-offset-8">
                        {entry.playerX} <span className="text-sm">(X) </span>{" "}
                        <span className="text-sm">vs.</span> {entry.playerO}
                        <span className="text-sm">(O) </span>
                      </span>
                    </div>

                    <small className="text-xs">
                      {new Date(entry.dateTime).toLocaleString()}
                    </small>

                    <div className="mt-2 mb-2">
                      <div className="flex flex-col items-start justify-start">
                        <strong className="text-xs mt-1 font-semibold">
                          Summary
                        </strong>
                      </div>
                      {entry.stats && (
                        <div className="flex mt-2 ml-5 flex-col items-start justify-start">
                          <span className="text-xs font-semibold">
                            Total Rounds: {entry.rounds}
                          </span>
                          <span className="text-xs font-medium">
                            Draw: {entry.stats.draws}
                          </span>
                          <span className="text-xs font-medium">
                            {entry.playerX}: {entry.stats.playerXWins}W -{" "}
                            {calculateLoses(
                              entry.stats.playerXWins,
                              entry.stats.draws,
                              entry.rounds
                            )}
                            L
                          </span>
                          <span className="text-xs font-medium">
                            {entry.playerO}: {entry.stats.playerOWins}W -{" "}
                            {calculateLoses(
                              entry.stats.playerOWins,
                              entry.stats.draws,
                              entry.rounds
                            )}
                            L
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-2 mb-2">
                      <div className="flex flex-col items-start justify-start">
                        <strong className="text-xs mt-1 font-semibold">
                          Records
                        </strong>
                      </div>
                    </div>
                    <div className="max-h-[calc(5*1.85rem)] overflow-y-auto scroll-m-1">
                      {Object.entries(entry.games).length > 0 ? (
                        Object.entries(entry.games).map(([gameId, result]) => (
                          <div
                            key={`${entry._id}-${gameId}`}
                            className="flex ml-5 flex-col items-start justify-start"
                          >
                            <p className="text-xs font-semibold">
                              <span className="text-xs">
                                Game {gameId}: {result}
                              </span>
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-lg font-semibold">
                          No games recorded
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchList;
