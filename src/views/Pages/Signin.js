import React, { useEffect, useState } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { signin } from "../../services/redux/actions";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import history from "../../services/History";
import SweetAlert from "react-bootstrap-sweetalert";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import { successColor } from "assets/jss/material-dashboard-pro-react";
const useStyles = makeStyles(() => ({
  signupButton: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor:'#000',
    color:'whitesmoke',
    "&:hover": {
      backgroundColor: "#ffa300  !important",
      color: "white"
    }
  },
  signinButton: {
    marginBottom: 30,
    backgroundColor:'#000',
    color:'whitesmoke',
    "&:hover": {
      backgroundColor: "#ffa300  !important",
      color: "white"
    }
  },
  successButton: {
    backgroundColor: `${successColor[0]} !important`,
    "&:hover": {
      backgroundColor: `${successColor[0]} !important`
    }
  },
  error: {
    color: "red"
  }
}));

const Signin = props => {
  const { signin, users, user } = props || {};

  useEffect(() => {
    setEmail("");
    setPassword("");
    setSwAlert(null);
  }, []);

  useEffect(() => {
    if (user && user.EMAIL) {
      history.entries = [];
      history.index = -1;
      history.push(`/app/Dashboard`);
    }
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [swAlert, setSwAlert] = useState(null);

  const customStyles = useStyles();

  const onSignin = () => {
    let error = false;
    if (email) {
      setEmailError(false);
    } else {
      setEmailError(true);
      error = true;
    }
    if (password) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
      error = true;
    }
    if (!error) {
      const user = {
        EMAIL: email,
        PASSWORD: password
      };
      const allUsers = users;
      const authUser = allUsers.find(
        u => u.EMAIL === user.EMAIL && u.PASSWORD === user.PASSWORD
      );
      if (authUser && authUser.EMAIL) {
        signin(user);
      } else {
        signin({});
        setSwAlert(
          <SweetAlert
            error
            style={{ display: "block", marginTop: "-100px" }}
            title="Invalid Email or Password"
            onConfirm={() => setSwAlert(null)}
            confirmBtnCssClass={`${props.classes.button} ${customStyles.successButton}`}
            confirmBtnText="Ok"
          />
        );
      }
    }
  };

  const onSignup = () => {
    history.push("/app/signup");
  };

  return (
    <GridContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {swAlert}
      <GridItem xs={5}>
        <Card>
          <CardHeader color="primary" icon>
            <GridContainer>
              <GridItem
                sm={12}
                md={12}
                xs={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20
                }}
              >
                <GridItem>
                  <Typography style={{ color: "#000", fontSize: 30 }}>
                    Sign In
                  </Typography>
                </GridItem>
              </GridItem>
            </GridContainer>
          </CardHeader>
          <CardBody>
            <GridContainer
              style={{
                flex: "display",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <GridItem sm={10} md={10} xs={10}>
                <GridContainer>
                  <GridItem sm={12} md={12} xs={12}>
                    <TextField
                      required
                      label="Email"
                      value={email}
                      fullWidth
                      style={{ marginBottom: 20 }}
                      onChange={e => setEmail(e.target.value)}
                      helperText={
                        emailError && (
                          <div className={customStyles.error}>
                            Please enter email
                          </div>
                        )
                      }
                    />
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <TextField
                      required
                      label="Password"
                      value={password}
                      fullWidth
                      style={{ marginBottom: 20 }}
                      onChange={e => setPassword(e.target.value)}
                      helperText={
                        passwordError && (
                          <div className={customStyles.error}>
                            Please enter password
                          </div>
                        )
                      }
                    />
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={customStyles.signupButton}
                      onClick={onSignin}
                    >
                      Login
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      //color={primaryColor[0]}
                      //style={{backgroundColor:'#ffa300',color:'whitesmoke'}}
                      className={customStyles.signinButton}
                      onClick={onSignup}
                    >
                      {`Don't have an account? Signup`}
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
  signin: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users
  };
};
const contactPageWithRedux = connect(
  mapStateToProps,
  {
    signin
  }
)(Signin);
export default withStyles(sweetAlertStyle)(contactPageWithRedux);
