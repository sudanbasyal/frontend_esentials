import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              //   sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const data = [
  {
    id: 1,
    first_name: "Nappie",
    last_name: "Flitcroft",
    email: "nflitcroft0@foxnews.com",
    gender: "Male",
    ip_address: "60.96.212.251",
  },
  {
    id: 2,
    first_name: "Bartram",
    last_name: "Busain",
    email: "bbusain1@sina.com.cn",
    gender: "Male",
    ip_address: "66.89.45.167",
  },
  {
    id: 3,
    first_name: "Ida",
    last_name: "Aizikovitch",
    email: "iaizikovitch2@w3.org",
    gender: "Female",
    ip_address: "93.112.6.89",
  },
  {
    id: 4,
    first_name: "Fancie",
    last_name: "Ivanyushin",
    email: "fivanyushin3@sciencedirect.com",
    gender: "Female",
    ip_address: "196.77.224.237",
  },
  {
    id: 5,
    first_name: "Bond",
    last_name: "Doogan",
    email: "bdoogan4@nymag.com",
    gender: "Male",
    ip_address: "163.190.138.87",
  },
  {
    id: 6,
    first_name: "Merilyn",
    last_name: "Handford",
    email: "mhandford5@squidoo.com",
    gender: "Female",
    ip_address: "145.165.121.112",
  },
  {
    id: 7,
    first_name: "Ingaborg",
    last_name: "Huet",
    email: "ihuet6@symantec.com",
    gender: "Female",
    ip_address: "51.173.66.236",
  },
  {
    id: 8,
    first_name: "Weider",
    last_name: "Clemenzi",
    email: "wclemenzi7@usnews.com",
    gender: "Male",
    ip_address: "252.254.217.43",
  },
  {
    id: 9,
    first_name: "Gualterio",
    last_name: "Worvill",
    email: "gworvill8@newsvine.com",
    gender: "Male",
    ip_address: "29.147.93.115",
  },
  {
    id: 10,
    first_name: "Monroe",
    last_name: "Miche",
    email: "mmiche9@ask.com",
    gender: "Male",
    ip_address: "55.92.173.161",
  },
];
