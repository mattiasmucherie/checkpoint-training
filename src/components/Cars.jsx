import {
  Button,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
const cars = ["Saab", "Volvo", "Polestar", "Citroen", "Renault"];

function Cars() {
  const [cars, setCars] = useState([
    "Saab",
    "Volvo",
    "Polestar",
    "Citroen",
    "Renault",
  ]);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <form>
        <Grid container gap={1}>
          <TextField type="text" label="Add a car" />
          <Button type="submit" variant="contained">
            Add new car
          </Button>
        </Grid>
      </form>
      <List>
        {cars.map((car) => (
          <ListItem key={car}>
            <Typography variant="body1">{car}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Cars;
