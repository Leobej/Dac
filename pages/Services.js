import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, description, price, time, category) {
  return { name, description, price, time, category };
}

const tempArr = [
  createData("Schimbare roti", "12312", 100, 24, "cat"),
  createData("Vopsire", "12312", 500, 200, 4.3),
  createData("Schimb ulei", "32", 400, 60, 6.0),
  createData("alt schimb ulei", "305", 200, 60, 4.3),
  createData("inca un schimb de ulei", "12323213", 60, 49, 3.9),
];

export default function BasicTable() {
  const clickHandler = (event) => {
    console.log(event.target.value);
  };
  let cell = "12";
  return (
    <TableContainer
      component={Paper}
      onClick={clickHandler}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        minWidth: "50%",
        maxWidth: "70%",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Denumire </TableCell>
            <TableCell align="right">Descriere</TableCell>
            <TableCell align="right">Pret</TableCell>
            <TableCell align="right">Timp</TableCell>
            <TableCell align="right">Categorie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tempArr.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
