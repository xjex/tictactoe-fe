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

  return (
    <div className="p-5 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Match Histories</h1>
        <div className="cards flex flex-wrap gap-4 max-w-4xl p-5 rounded-lg shadow-lg bg-gray-800">
          {isAPILoading && <div className="text-center">Loading...</div>}

          {isAPIError && <div className="text-center">Error on API</div>}

          {matchList.map((entry) => (
            <div
              key={entry._id}
              className="card flex-1 min-w-[200px] border p-5 rounded-lg mb-4 hover:text-gray-900 hover:bg-slate-600 transition ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center">
                <span className="text-lg font-bold underline underline-offset-8">
                  {entry.playerX} <span className="text-sm">vs.</span>{" "}
                  {entry.playerO}
                </span>
              </div>

              <small className="text-xs">
                {new Date(entry.dateTime).toLocaleString()}
              </small>
              <div className="matches max-h-[calc(5*1.85rem)] overflow-y-auto scroll-m-1">
                {Object.entries(entry.games).length > 0 ? (
                  Object.entries(entry.games).map(([gameId, result]) => (
                    <p
                      key={`${entry._id}-${gameId}`}
                      className="text-lg font-semibold"
                    >
                      <span className="text-sm">
                        Game {gameId}: {result}
                      </span>
                    </p>
                  ))
                ) : (
                  <p className="text-lg font-semibold">No games recorded</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchList;
