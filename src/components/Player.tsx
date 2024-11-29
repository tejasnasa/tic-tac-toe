import { useState } from "react";
import * as Types from "../utils/types";

const Player = ({ initialName, symbol, isActive, onChangeName }: Types.PlayerProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState<string>(initialName);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && (
          <input type="text" value={name} onChange={handleChange} required />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
