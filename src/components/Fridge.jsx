import { Typography } from "@mui/material";
import { useState } from "react";

function Fridge() {
  const [fridgeItems, setFridgeItems] = useState([
    { name: "Eggs", count: 12 },
    { name: "Milk", count: 1 },
    { name: "Cheese", count: 2 },
    { name: "Apples", count: 6 },
    { name: "Oranges", count: 4 },
    { name: "Carrots", count: 8 },
    { name: "Lettuce", count: 1 },
  ]);

  const [error, setError] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setError("");
    const item = event.target.elements[0].value;
    const count = event.target.elements[1].value;
    const updatedFridge = [...fridgeItems];
    const index = updatedFridge.findIndex((fridgeItem) => {
      return fridgeItem.name === item;
    });
    if (index === -1) {
      setError("Couldn't find that item");
    } else {
      if (updatedFridge[index].count - Number(count) < 0) {
        setError("You dont have enought of that item");
      } else {
        updatedFridge[index].count = updatedFridge[index].count - Number(count);
        setFridgeItems(updatedFridge);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="item" />
        <input type="number" name="count" />
        <button type="submit"> Remove items from fridge</button>
      </form>
      <p>{error}</p>
      <ul>
        {fridgeItems.map((fi) => {
          return (
            <li key={fi.name}>
              {fi.name} {fi.count}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fridge;
