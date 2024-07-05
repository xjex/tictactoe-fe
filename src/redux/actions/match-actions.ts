import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../service/api.service";
import { PayloadSchema, SetLogEntry } from "../types/match.types";
export const getMatchLogs = createAsyncThunk("matches/Logs", async () => {
  try {
    const res = await get(`/api/getlogs`);

    return res;
  } catch (error) {
    throw error;
  }
});

export const createMatchLog = createAsyncThunk(
  "admin/createNewUser",
  async (payload: SetLogEntry) => {
    try {
      const res = await post(`/api/savelog`, payload);

      return res;
    } catch (error) {
      throw error;
    }
  }
);
