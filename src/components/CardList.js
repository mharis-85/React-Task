import React from 'react'
import {Paper,Button,TableContainer,Avatar} from '@material-ui/core';
 const CardList=(props)=> {
    return (
        <TableContainer component={Paper} style={{maxHeight:70}}>
        <div style={{flex:1,display:'flex'}}>
        <div style={{flex:0.5,justifyContent:'center',alignSelf:'center',marginLeft:10}}>
        <Avatar src={props.logo}/>
        </div>
        <div style={{flex:2}}>
        <p style={{fontSize:14,fontWeight:'bold'}}>Google Authentication</p>
        <p style={{fontSize:11}}>Lorum ipsum text</p>
        </div>
        <div style={{flex:1,alignSelf:'center'}}>
        <Button variant="contained" style={{backgroundColor:'#ffa300',color:'whitesmoke',height:25}}>Enable</Button>
        </div>
            
        </div>
        </TableContainer>
    )
}
export default CardList;
