import * as Types from "./types";
import WINNING_COMBINATIONS from "./winningCombinations";

const initialGameBoard: Types.GameBoardType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const deriveActivePlayer = (gameTurns: Array<Types.GameTurnType>) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

export const deriveGameBoard = (gameTurns: Array<Types.GameTurn>) => {
  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

export const deriveWinner = (
  gameBoard: Types.GameBoardType,
  players: Types.Player
) => {
  let winner: String | null = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol as keyof typeof players];
    }
  }

  return winner;
};
