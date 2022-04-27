import { Box, Button, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { makeStyles, withStyles } from "@mui/styles";
import Divider from '@mui/material/Divider';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useSelector} from 'react-redux'
import {selectBooking} from '../../../app/BookingSlice'
let theme = createTheme({
  typography:{
    fontFamily:"Poppins,sans-serif"
  }
});

const useStyles = makeStyles({
  customButton: {
    backgroundColor: "black",
    padding: "8px 15px",
    marginTop: "-1px",
    color: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "#3d3d3d ",
      color: "white",
    },
  },
  customInput: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#c4c4c4 !important",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black !important",
      },
      ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
        color: "#666666 !important",
      },
    },
  },
  customDateTime: {
    ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "gray !important",
        color: "black",
      },
  },
  customTab: {
    flexDirection: "row",
    "& .css-aym9vq-MuiButtonBase-root-MuiTab-root": {
      minHeight: 0,
    },
    "& .Mui-selected": {
      color: "white",
      minHeight: 0,
      background: "black",
      borderRadius: "5px",
      transition: "0.3s ease-in-out all",
    },
    "& .css-1aquho2-MuiTabs-indicator": {
      background: "none",
    },
  },
});

interface ITripDetailsProps {
  mTop?:number;
}

const TripDetails: React.FunctionComponent<ITripDetailsProps> = (props) => {
  const classes = useStyles();
  const {source,destination,pickupDate,dropDate} = useSelector(selectBooking)

  const {mTop} = props

  return <>
  <ThemeProvider theme={theme}>
<Box sx={{padding:"16px",marginTop:{mTop},boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}}>
  <Box sx={{display: "flex",justifyContent: "space-between" ,margin:"10px 0 20px 0"}}>
        <Typography variant="h6" component="div">Your Trip Details</Typography>
        <Box>
        </Box>
    </Box>
    <Divider sx={{margin:"10px 0"}}/>
    <Box sx={{display: "flex",justifyContent: "space-between",margin:"10px 0" }}>
        <Typography variant="body1" component="div">From</Typography>
        <Typography variant="body1" component="div" sx={{fontWeight:'500'}}>{source ? source : "Empty"}</Typography>
    </Box>
    <Box sx={{display: "flex",justifyContent: "space-between",margin:"10px 0" }}>
        <Typography variant="body1" component="div">To</Typography>
        <Typography variant="body1" component="div" sx={{fontWeight:'500'}}>{destination}</Typography>
    </Box>
    <Box sx={{display: "flex",justifyContent: "space-between",margin:"10px 0" }}>
        <Typography variant="body1" component="div">Date</Typography>
        <Typography variant="body1" component="div" sx={{fontWeight:'500'}}>{pickupDate}</Typography>
    </Box>
    <Box sx={{display: "flex",justifyContent: "space-between",margin:"10px 0" }}>
        <Typography variant="body1" component="div">Pick-Up Time</Typography>
        <Typography variant="body1" component="div" sx={{fontWeight:'500'}}>11:00:00 AM</Typography>
    </Box>
    <Divider sx={{margin:"20px 0"}}/>
    <Box sx={{display: "flex",justifyContent: "space-between",margin:"10px 0" }}>
        <Typography variant="body1" component="div">Estimated Trip Time</Typography>
        <Typography variant="body1" component="div" sx={{fontWeight:'500'}}>28 mins</Typography>
    </Box>
    <Box sx={{display: "flex",justifyContent: "space-between",margin:"10px 0" }}>
        <Typography variant="body1" component="div">Estimated Distance</Typography>
        <Typography variant="body1" component="div" sx={{fontWeight:'500'}}>10.0 km</Typography>
    </Box>
  </Box>
  </ThemeProvider>
  </>;
};

export default TripDetails;
