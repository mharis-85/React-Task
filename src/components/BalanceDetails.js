import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { Button,Divider,CircularProgress } from '@material-ui/core';
// const useStyles = makeStyles({
//   table: {
//     //minWidth: 650,
//     //height:300,
//   },
// });





export default function BasicTable() {
  //const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{}}>
    <div style={{display:'flex'}}>
    <div style={{flex:2,margin:10,paddingTop:10}}><p style={{fontSize:18,fontWeight:'bold',}}>Balance Details</p></div>
    <div style={{flex:1,paddingTop:15}}><Button variant="contained" color="white"  style={{fontSize:11,textAlign:'center',}}>Submit Verification Documents?</Button></div>
    </div>
    <Divider style={{margin:5}}/>
    <div style={{display:'flex',}}>
    <div style={{flex:1.5,justifyContent:'space-between',padding:35}}>
    <p style={{color:'darkgray',fontSize:11}}>Account Balance</p>
    <p style={{fontSize:14, fontWeight:'bolder'}}>$45,567822245910 BTC</p>
    <p style={{color:'darkgray',fontSize:11}}>Esitmated value</p>
    <p style={{fontSize:14, fontWeight:'bolder'}}>$456,567,832,822245910</p>
    </div>

    <div style={{flex:1}}>
    <CircularProgress variant="determinate" value={75} size={150} style={{color:'#ffa300',height:250}}/>
    </div>
    </div>
    </TableContainer>
    
  );
}