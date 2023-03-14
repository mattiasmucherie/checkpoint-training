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

  return <Typography>Fridge</Typography>;
}

export default Fridge;
