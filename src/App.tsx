import { useState } from "react";
import Form from "./Components/Form/Form";
import Logo from "./Components/Logo/Logo";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";

export interface itemType {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState<itemType[]>([]);

  const handleItems = (item: itemType) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete all items? "
    );

    if (confirm) {
      setItems([]);
    }
  };

  return (
    <>
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList
        newItems={items}
        handleDeleteItem={handleDeleteItem}
        toggleComplete={toggleComplete}
        handleClearList={handleClearList}
      />
      <Stats newItems={items} />
    </>
  );
}

export default App;
