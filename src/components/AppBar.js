import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logoIcon from '../assets/dafriexchange-new-logo.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logostyle:{
      height:25,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  textStyle:{
    fontSize:11,
    marginLeft:15 
  },
logoutButton:{
    marginLeft:5,
    fontSize:9,
    justifyContent:'flex-end'
}
}));

const AppBarComp = (props)=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  style={{backgroundColor:"black"}}>
        <Toolbar variant="dense">
        <div style={{flex:0.5}}>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logoIcon} className={classes.logostyle} alt="logo"/>
          </IconButton>
       </div>
       <div style={{flex:2 ,display:"flex", justifyContent:'center'}}>
          <Typography  color="inherit" className={classes.textStyle}>
            Investment
          </Typography>
          <Typography  color="inherit" className={classes.textStyle}>
            Trade
          </Typography>
          <Typography  color="inherit" className={classes.textStyle}>
            Wallet
          </Typography>
          <Typography  color="inherit" className={classes.textStyle}>
            History
          </Typography>
          <Typography  color="inherit" className={classes.textStyle}>
            Support
          </Typography>
          </div>
          <div style={{flex:1, display:'flex',justifyContent:'flex-end',paddingTop:10}}>
          <Avatar className={classes.small}>{props.user[0]}</Avatar>
          <p style={{fontsize:9,padding:5,paddingTop:10}}>{props.user}</p>
  
  <Button color="inherit" size="small" className={classes.logoutButton} onClick={props.onSignout}>Logout</Button>
          </div>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  AppBarComp;
