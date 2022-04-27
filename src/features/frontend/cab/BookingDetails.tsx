import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import * as React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import TripDetails from "./TripDetails";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import useStyles from "./BookingStyle";
import CarDetails from "./CarDetails";

import Person from "@mui/icons-material/Person";
import Luggage from "@mui/icons-material/Luggage";
import BackpackIcon from "@mui/icons-material/Backpack";
import ACIcon from "@mui/icons-material/AcUnit";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AuthService from "../../../services/AuthService";
import firebase from "../../../shared/config/firebase";
import useStyles from "../../../shared/style/Style";
import {useSelector} from 'react-redux'
import {selectBooking} from '../../../app/BookingSlice'

let theme = createTheme({
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
});

interface IBookingDetailsProps {}

const BookingDetails: React.FunctionComponent<IBookingDetailsProps> = (
  props
) => {
  const classes = useStyles();

  const {source,destination,pickupDate,dropDate} = useSelector(selectBooking)
  const [bookingState, setBookingState] = React.useState({
    mobile: "",
    otp: "",
    otpSent: false,
  });

  const [confirmationResult, setConfirmationResult] = React.useState<any>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBookingState({ ...bookingState, [name]: value });
  };
  const handleMobileChange = (e: any) => {
    const { name, value } = e.target;
    setBookingState({ ...bookingState, mobile: value });
  };
  const { mobile, otp, otpSent } = bookingState;

  // let confirmationResult: any;
  let recaptchaVerifier: any;
  
  const sendOtp = () => {
    console.log("in sendOTP ", recaptchaVerifier);

    const phoneNumber = "+91" + mobile;
    // console.log(phoneNumber);
    const appVerifier = recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResultp:any) => {
        setConfirmationResult(confirmationResultp);
        // console.log("OTP has been sent");
        alert("OTP sent you mobile");
        setBookingState({ ...bookingState, otpSent: true });
      })
      .catch((error:any) => {
        // Error; SMS not sent
        console.log("SMS not sent ", error);
        // alert("try again");
      });
  };


  const configureCaptcha = () => {
    recaptchaVerifier = new firebase.auth.RecaptchaVerifier("sign-in-button",
     {
      size: "invisible",
      callback: (response: any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // sendOtp();
        console.log("Recaptca varified");
      },
      defaultCountry: "IN",
    });
    sendOtp();
    console.log("in configureCaptcha()");
  };

  const submitOtp = () => {
    const code = otp;
    console.log(code);
    confirmationResult
      ?.confirm(code)
      .then((result: any) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
        // ...
      })
      .catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        console.log("OTP is wrong ", error);
      });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{ padding: { xs: "20px", sm: "0", lg: "50px 0", md: "50px 0" } }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ margin: "0px 0 50px 0" }}
          >
            Booking Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TripDetails mTop={50} />
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box
                sx={{
                  padding: "16px",
                  backgroundColor: "#fff",
                  boxShadow:
                    `0px 2px 1px -1px rgb(0 0 0 / 20%), 
                    0px 1px 1px 0px rgb(0 0 0 / 14%), 
                    0px 1px 3px 0px rgb(0 0 0 / 12%)`,
                }}
              >
                <Typography variant="h5">
                  Enter Mobile Number To Login OR SignUp
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    padding: "20px 0",
                    gap: "15px",
                    flexDirection: { xs: "column", lg: "row" },
                  }}
                >
                  <div id="sign-in-button"></div>
                  <TextField
                    variant="outlined"
                    label="Enter a Mobile Number"
                    name="mobile"
                    value={mobile}
                    className={classes.customInput}
                    onChange={handleMobileChange}
                    sx={{ backgroundColor: "#fff", minWidth: { md: 200 } }}
                    disabled={otpSent}
                  />
                  {otpSent ? (
                    <Box display="flex">
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter OTP"
                        name="otp"
                        value={otp}
                        className={classes.customInput}
                        onChange={handleChange}
                        sx={{ backgroundColor: "#fff" }}
                      />
                      <Button
                        sx={{ marginLeft: 2 }}
                        className={classes.customButton}
                        variant="contained"
                        onClick={submitOtp}
                      >
                        Verify OTP
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      onClick={configureCaptcha}
                      className={classes.customButton}
                      variant="contained"
                      sx={{ maxWidth: { md: 150 } }}
                    >
                      Send OTP
                    </Button>
                  )}
                </Box>
                <Typography variant="h5">Enter Your Details</Typography>
                <Box
                  sx={{
                    display: "flex",
                    padding: "20px 0",
                    gap: "15px",
                    flexDirection: { xs: "column", lg: "row" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Enter Name"
                    name="nameSignUp"
                    // value={source}
                    className={classes.customInput}
                    // onChange={handleChange}
                    sx={{ backgroundColor: "#fff" }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Enter Number"
                    name="numberSignUp"
                    // value={source}
                    className={classes.customInput}
                    // onChange={handleChange}
                    sx={{ backgroundColor: "#fff" }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Enter Email"
                    name="emailSignUp"
                    // value={source}
                    className={classes.customInput}
                    // onChange={handleChange}
                    sx={{ backgroundColor: "#fff" }}
                  />
                  <Button className={classes.customButton} variant="contained">
                    SignUp
                  </Button>
                </Box>
                <Divider sx={{ margin: "10px 0 15px 0" }} />
                <Box>
                  <Typography variant="h5">Cab Details</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      padding: "10px 0 0",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "500" }}>
                      {" "}
                      <Person
                        sx={{
                          position: "relative",
                          top: " 5px",
                          marginRight: "10px",
                        }}
                      />{" "}
                      Passengers
                    </Typography>
                    <Typography sx={{ marginTop: "7px" }}>4</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      padding: "10px 0 0",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "500" }}>
                      <ACIcon
                        sx={{
                          position: "relative",
                          top: " 5px",
                          marginRight: "10px",
                        }}
                      />
                      AC
                    </Typography>
                    <Typography sx={{ marginTop: "7px" }}>Available</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      padding: "10px 0 0",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "500" }}>
                      <DirectionsCarIcon
                        sx={{
                          position: "relative",
                          top: " 5px",
                          marginRight: "10px",
                        }}
                      />
                      Cab Number
                    </Typography>
                    <Typography sx={{ marginTop: "7px" }}>
                      MH-12 PK 2058
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      padding: "10px 0 0",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontWeight: "500" }}>
                      <DirectionsCarIcon
                        sx={{
                          position: "relative",
                          top: " 5px",
                          marginRight: "10px",
                        }}
                      />
                      Cab Type
                    </Typography>
                    <Typography sx={{ marginTop: "7px" }}>SUV</Typography>
                  </Box>
                </Box>
                <Divider sx={{ margin: "25px 0 15px 0" }} />
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px 0 0",
                    gap: "15px",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "500" }}>
                    <CurrencyRupeeIcon
                      sx={{
                        position: "relative",
                        top: " 5px",
                        marginRight: "10px",
                      }}
                    />
                    Total
                  </Typography>
                  <Typography variant="h5" sx={{ marginTop: "7px" }}>
                    1500
                  </Typography>
                </Box>
                <Button
                  className={classes.customButton}
                  sx={{ marginTop: "20px" }}
                  variant="contained"
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default BookingDetails;