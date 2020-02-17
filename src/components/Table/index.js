import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Hike', "1/1/2020", 6.1, 2.5, "Poo Poo Point is a beautiful hike in Issaquah, WA."),
  createData('Concert', "1/6/2020", 0, 3, "The Rolling Stones is the best concert experience ever."),
  createData('Dance Class', "1/24/2020", 0, 1, "Learning how to Waltz is the best way to get a date."),
  createData('Networking', "2/5/2020", 0, 2, "Networking with full-stack developers is the best way to get a job."),
  createData('Cooking Class', "2/15/2020", 0, 3, "Learn how to cook food with the best chefs in the PNW."),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
      <div>
          <div className="container">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <div className="tableHeader"><TableCell>Activity</TableCell></div>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Distance&nbsp;(mi)</TableCell>
            <TableCell align="right">Duration&nbsp;(hrs)</TableCell>
            <TableCell align="right">Description&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}