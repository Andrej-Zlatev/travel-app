import { itemType } from "../../App";

interface Props extends itemType {
  handleDeleteItem: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const Item = ({
  description,
  quantity,
  packed,
  id,
  handleDeleteItem,
  toggleComplete,
}: Props) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => toggleComplete(id)}
        checked={packed}
      />
      <span className={`${packed ? "complete" : ""}`}>
        {description} {quantity}
        <button onClick={() => handleDeleteItem(id)}>❌</button>
      </span>
    </li>
  );
};

export default Item;
