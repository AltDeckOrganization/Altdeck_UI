import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "PROMOTED COINS", minWidth: 170 },
  { id: "code", label: "SYMBOL", minWidth: 170 },
  {
    id: "population",
    label: "1H",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "24H",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "market",
    label: "MARKET MAP",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "launch",
    label: "LAUNCH",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "upvotes",
    label: "UPVOTES",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size, market, launch, upvotes) {
  //   const density = population / size;
  return { name, code, population, size, market, launch, upvotes };
}

const rows = [
  createData("India", "h", "IN", 1324171354, 3287263, 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961, 3287263, 1324171354, 3287263),
  createData("Italy", "IT", 60483973, 301340, 3287263, 1324171354, 3287263),
  createData(
    "United States",
    "US",
    327167434,
    9833520,
    3287263,
    1324171354,
    3287263
  ),
  createData("Canada", "CA", 37602103, 9984670, 3287263, 1324171354, 3287263),
  createData(
    "Australia",
    "AU",
    25475400,
    7692024,
    3287263,
    1324171354,
    3287263
  ),
  createData("Germany", "DE", 83019200, 357578, 3287263, 1324171354, 3287263),
  createData("Ireland", "IE", 4857000, 70273, 3287263, 1324171354, 3287263),
  createData("Mexico", "MX", 126577691, 1972550, 3287263, 1324171354, 3287263),
  createData("Japan", "JP", 126317000, 377973, 3287263, 1324171354, 3287263),
  createData("France", "FR", 67022000, 640679, 3287263, 1324171354, 3287263),
  createData(
    "United Kingdom",
    "GB",
    67545757,
    242495,
    3287263,
    1324171354,
    3287263
  ),
  createData("Russia", "RU", 146793744, 17098246, 3287263, 1324171354, 3287263),
  createData("Nigeria", "NG", 200962417, 923768, 3287263, 1324171354, 3287263),
  createData("Brazil", "BR", 210147125, 8515767, 3287263, 1324171354, 3287263),
];

export default function News() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          style={{ color: "white" }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ color: "White" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
