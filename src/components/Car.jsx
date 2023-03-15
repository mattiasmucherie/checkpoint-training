import { ListItem, Typography } from "@mui/material";
import { useState } from "react";

function Car(props) {
  const [isGreen, setIsGreen] = useState(false);

  const handleOnClick = () => {
    setIsGreen(!isGreen);
  };
  return (
    <ListItem>
      <Typography
        variant="body1"
        color={isGreen ? "green" : "black"}
        onClick={handleOnClick}
      >
        {props.carName}
      </Typography>
    </ListItem>
  );
}

export default Car;
