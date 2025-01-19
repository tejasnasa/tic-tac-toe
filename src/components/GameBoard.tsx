import * as Types from "../utils/types";

const GameBoard = ({ onSelectSquare, board }: Types.GameBoardProps) => {
  return (
    <div id="game-board">
      {board.flat().map((playerSymbol, index) => {
        const rowIndex = Math.floor(index / 3); // Calculate row index
        const colIndex = index % 3; // Calculate column index
        return (
          <button
            key={index}
            onClick={() => onSelectSquare(rowIndex, colIndex)}
            disabled={playerSymbol !== null}
          >
            {playerSymbol}
          </button>
        );
      })}
    </div>
  );
};

export default GameBoard;
