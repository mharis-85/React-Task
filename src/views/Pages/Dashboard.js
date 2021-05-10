 import React, { useEffect } from "react";
 import PropTypes from "prop-types";
 import { connect } from "react-redux";
 import { signout } from "../../services/redux/actions";
 import history from "../../services/History";
import AppBar from "../../components/AppBar";

import DeveiceMangament from "../../components/DeviceManagmentComponent"
import BalanceDetails from "../../components/BalanceDetails"
import LoginRecord from "../../components/LoginRecord"
import CardList from "../../components/CardList"
import googleLogo from "../../assets/google.jpg"
import smsAuth from "../../assets/smsAuth.png"
import antiPhissinglogo from "../../assets/antiPhissinglogo.png"

const Dashboard= props =>{
     const { signout, user } = props || {};

   useEffect(() => {
     //setSwAlert(null);
   }, []);

   useEffect(() => {
     if (!(user && user.EMAIL)) {
       history.entries = [];
       history.index = -1;
       history.push(`/app/signin`);
     }
   }, [user]);

  // const [swAlert, setSwAlert] = useState(null);


const onSignout = () => {
  signout();
  history.push("/app/signin");
};
  return (
    <div>
      
  <AppBar onSignout={onSignout}   

    user= {user && user.EMAIL ? user.EMAIL : ""}
                   
  />
  <div style={{flex:1, display:'flex'}}>
{/*---left View of Content Div---*/}
  <div style={{flex:1}}>
  <div style={{margin:10}}><BalanceDetails/></div>
  <div style={{margin:10}}> <DeveiceMangament/></div>
  
  </div>
  {/*---right View of Content Div---*/}
  <div style={{flex:0.5}}>
  <div style={{margin:10,marginLeft:0}}>
  <CardList logo={googleLogo}/>
  </div>
  <div style={{margin:10,marginLeft:0}}>
  <CardList logo={googleLogo}/>
  </div>
  <div style={{margin:10,marginLeft:0}}>
  <CardList logo={smsAuth}/>
  </div>
  <div style={{margin:10,marginLeft:0}}>
  <CardList logo={antiPhissinglogo}/>
  </div>
  <div style={{margin:10,marginLeft:0}}>
  <CardList
  logo={antiPhissinglogo}
  />
  </div>
  <div style={{margin:10,marginLeft:0}}><LoginRecord/></div>
  </div>
  
  </div>

    </div>
  );
}

//export default Dashboard;
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  signout: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  {
    signout
  }
)(Dashboard);


