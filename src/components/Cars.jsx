import {
  Button,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Car from "./Car";

function Cars() {
  const [cars, setCars] = useState([
    "Saab",
    "Volvo",
    "Polestar",
    "Citroen",
    "Renault",
  ]);
  const [searchText, setSearchText] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      setCars([...cars, searchText]);
      setSearchText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Grid container gap={1}>
          <TextField
            type="text"
            label="Add a car"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <Button type="submit" variant="contained" disabled={!searchText}>
            Add new car
          </Button>
        </Grid>
      </form>
      <List>
        {cars.map((car) => (
          <Car key={car} carName={car} />
        ))}
      </List>
    </div>
  );
}

export default Cars;
