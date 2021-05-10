import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/DeleteOutlined';
import { Button,Divider } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    //minWidth: 650,
    //height:300,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
   createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
   createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
   createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
   createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
   createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
   createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
   createData('Linux/Chrome', 'N/A', '09/05/2021- 9:17:50 AM', "127.0.0.1",
  <Button fontSize='small' style={{color:'red'}}><Delete/></Button>
   ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{maxHeight:360}}>
    <div style={{display:'flex'}}>
    <div style={{flex:1,margin:10,paddingTop:10}}><p style={{fontSize:18,fontWeight:'bold'}}>Device Managment</p></div>
    <div style={{flex:2,paddingTop:20}}><p style={{fontSize:11,textAlign:'center'}}>These Devices are currently allowed to access your account</p></div>
    </div>
    <Divider style={{margin:5,}}/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Device</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Latest Time of Activity</TableCell>
            <TableCell align="right">IP Address</TableCell>
            <TableCell align="right">Delete</TableCell>
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
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}