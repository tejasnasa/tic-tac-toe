interface GameTurn {
  square: {
    row: number;
    col: number;
  };
  player: string;
}

interface props {
  turns: Array<GameTurn>;
}

const Log = ({ turns }: props) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
