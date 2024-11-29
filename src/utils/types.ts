export interface GameTurnType {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

export type GameBoardType = Array<Array<String | null>>;

export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: GameBoardType;
}

export interface GameTurn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

export interface LogProps {
  turns: Array<GameTurn>;
}

export interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: Function;
}

export interface GameOverProps {
  winner: String | null;
  onRestart: React.MouseEventHandler<HTMLButtonElement>;
}

export interface Player {
  X: string;
  O: string;
}
