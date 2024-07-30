import { itemType } from "../../App";

interface Props {
  newItems: itemType[];
}

const Stats = ({ newItems }: Props) => {
  if (!newItems.length) {
    return (
      <p className="stats">
        <em> Start adding some items to your packing list.</em>
      </p>
    );
  }
  const numItems = newItems.length;
  const completeItems = newItems.filter((items) => items.packed).length;
  const percentage = Math.round((completeItems / numItems) * 100);

  return (
    <footer className="stats">
      <p>
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : ` You have ${numItems} items on your list, and you already packed  
        ${completeItems}  (${percentage}%) `}
        </em>
      </p>
    </footer>
  );
};

export default Stats;
