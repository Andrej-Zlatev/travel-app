import { useState } from "react";
import { itemType } from "../../App";
import Item from "../Item/Item";

interface Props {
  newItems: itemType[];
  handleDeleteItem: (id: number) => void;
  toggleComplete: (id: number) => void;
  handleClearList: () => void;
}

const PackingList = ({
  newItems,
  handleDeleteItem,
  toggleComplete,
  handleClearList,
}: Props) => {
  const [sortBy, setSortBy] = useState("input");
  let filteredItems: itemType[] | undefined;

  if (sortBy === "input") {
    filteredItems = newItems;
  }

  if (sortBy === "description") {
    filteredItems = newItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    filteredItems = newItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {filteredItems?.map((item) => (
          <Item
            {...item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
