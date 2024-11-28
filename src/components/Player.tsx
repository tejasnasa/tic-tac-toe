import { useState } from "react";

interface props {
  initialName: string;
  symbol: string;
}

const Player = ({ initialName, symbol }: props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && (
          <input
            type="text"
            value={name}
            onChange={handleChange}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
