import { Link, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Competition() {
  const [competitions, setCompetitions] = useState([]);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((res) => res.json())
      .then((data) => {
        setCompetitions(data);
        setFilteredCompetitions(data);
      });
  }, []);

  useEffect(() => {
    const filtered = competitions.filter((comp) => {
      return comp.name.toLowerCase().includes(textInput.toLowerCase());
    });
    setFilteredCompetitions(filtered);
  }, [textInput, competitions]);

  const handleOnChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <>
      <TextField onChange={handleOnChange} placeholder="Enter a comp name" />
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCompetitions.map((comp, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {comp.name}
                </TableCell>
                <TableCell>
                  <Link href={comp.url}>{comp.url}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Competition;
