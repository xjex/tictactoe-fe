interface Stats {
  playerXWins: number;
  playerOWins: number;
  draws: number;
}

export interface LogEntry {
  _id: string;
  playerX: string;
  playerO: string;
  games: string[];
  stats: Stats;
  rounds: number;
  dateTime: string;
  isLoading: boolean;
  isError: boolean;
}
export interface LogState {
  entries: LogEntry[];
  isLoading: boolean;
  isError: boolean;
}

export interface SetLogEntry {
  playerX: string;
  playerO: string;
  games: { [key: string]: string };

  stats: {
    playerXWins: number;
    playerOWins: number;
    draws: number;
  };
  rounds: number;
}

export type PayloadSchema = {
  payload: SetLogEntry;
};
