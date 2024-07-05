//get
export interface LogEntry {
  _id: string;
  playerX: string;
  playerO: string;
  games: string[];
  dateTime: string;
  isLoading: boolean;
  isError: boolean;
}

export interface LogState {
  entries: LogEntry[];
  isLoading: boolean;
  isError: boolean;
}

//post
export interface SetLogEntry {
  playerX: string;
  playerO: string;
  games: { [key: string]: string };
}

export type PayloadSchema = {
  payload: SetLogEntry;
};
