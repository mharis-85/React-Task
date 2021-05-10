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
import { signup } from "../../services/redux/actions";
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
    color: "white",
    backgroundColor: "#000 !important",
    "&:hover": {
      backgroundColor: "#ffa300  !important",
      color: "white"
    }
  },
  signinButton: {
    marginBottom: 30,
    color: "white",
    backgroundColor: "#000 !important",
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

const Signup = props => {
  const { signup, user } = props || {};

  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [swAlert, setSwAlert] = useState(null);

  const customStyles = useStyles();

  const onSignup = () => {
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
    if (confirmPassword) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
      error = true;
    }
    if (!error) {
      const newUser = {
        EMAIL: email,
        PASSWORD: password
      };
      signup(newUser);
      setSwAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="User Registsred Successfully"
          onConfirm={() => history.push("/app/signin")}
          confirmBtnCssClass={`${props.classes.button} ${customStyles.successButton}`}
          confirmBtnText="Ok"
        />
      );
    }
  };

  const onSignin = () => {
    history.push("/app/signin");
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
                    Sign Up
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
                    <TextField
                      required
                      label="Confirm Password"
                      value={confirmPassword}
                      fullWidth
                      onChange={e => setConfirmPassword(e.target.value)}
                      style={{ marginBottom: 20 }}
                      helperText={
                        confirmPasswordError && (
                          <div className={customStyles.error}>
                            Please enter confirm password
                          </div>
                        )
                      }
                    />
                  </GridItem>
                  <GridItem sm={12} md={12} xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      //color="primary"
                      className={customStyles.signupButton}
                      onClick={onSignup}
                    >
                      Register
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      //color="primary"
                      className={customStyles.signinButton}
                      onClick={onSignin}
                    >
                      Already have an account? Signin
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

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  signup: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const contactPageWithRedux = connect(
  mapStateToProps,
  {
    signup
  }
)(Signup);
export default withStyles(sweetAlertStyle)(contactPageWithRedux);
