import { Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Swanson() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      {loading ? <CircularProgress /> : <Typography>{quote}</Typography>}

      <Button variant="contained" onClick={handleClick}>
        New Quote
      </Button>
    </>
  );
}

export default Swanson;
