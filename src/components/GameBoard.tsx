type GameBoard = Array<Array<String | null>>;
interface GameTurn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}
interface props {
  onSelectSquare: React.MouseEventHandler<HTMLButtonElement>;
  board: GameBoard;
}

const GameBoard = ({ onSelectSquare, board }: props) => {
  // const [gameBoard, setGameBoard] = useState<gameBoard>(initialGameBoard);

  // const handleSelectSquare = (rowIndex: number, colIndex: number) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updateBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });

  //   onSelectSquare();
  // };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
