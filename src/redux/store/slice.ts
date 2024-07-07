import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMatchLogs } from "../actions/match-actions";
import { RootState } from "./store";
import { LogState } from "../types/match.types";

const initialState: LogState = {
  entries: [],
  isLoading: false,
  isError: false,
};

const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatchLogs.fulfilled, (state, action) => {
      state.entries = action.payload;

      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getMatchLogs.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });

    builder.addCase(getMatchLogs.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export const isLoading = (state: RootState) => state.matches.isLoading;
export const isError = (state: RootState) => state.matches.isError;
export const selectMatch = (state: RootState) => state.matches.entries;
export default matchSlice.reducer;
