import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import Delete from '@material-ui/icons/DeleteOutlined';
import { Divider } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    //minWidth: 650,
    //height:300,
  },
});

function createData(name, calories, fat, ) {
  return { name, calories, fat,  };
}

const rows = [
  createData('09/05/2021- 9:17:50 AM', "127.0.0.1", 'N/A'
   ),
   createData('09/05/2021- 9:17:50 AM', "127.0.0.1", 'N/A'
   ),
   createData('09/05/2021- 9:17:50 AM', "127.0.0.1", 'N/A'
   ),
   createData('09/05/2021- 9:17:50 AM', "127.0.0.1", 'N/A'
   ),
   createData('09/05/2021- 9:17:50 AM', "127.0.0.1", 'N/A'
   ),
  
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{maxHeight:338}}>
    
    <p style={{fontSize:18,fontWeight:'bold',margin:10,paddingTop:10}}>Login Record</p>
    
    <Divider style={{margin:5}}/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>       
            <TableCell>Time </TableCell>
            <TableCell align="right">IP Address</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}