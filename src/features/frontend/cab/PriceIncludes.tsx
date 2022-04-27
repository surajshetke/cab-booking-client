import { Box, Button, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { makeStyles, withStyles } from "@mui/styles";
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check'

import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  typography:{
    fontFamily:"Poppins,sans-serif"
  }
});

const useStyles = makeStyles({
    listStyle:{
        listStyle:'none',
    },
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

interface IPriceIncludesProps {
}

const PriceIncludes: React.FunctionComponent<IPriceIncludesProps> = (props) => {
  const classes = useStyles();

  return <>
  <ThemeProvider theme={theme}>
<Box sx={{padding:"16px",marginTop:"20px",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"}}>
  <Box sx={{display: "flex",justifyContent: "space-between" ,margin:"10px 0 20px 0"}}>
        <Typography variant="h6" component="div">Prices Include</Typography>
    </Box>
    <Divider sx={{margin:"10px 0"}}/>
   <ul style={{paddingLeft:0}}>
       <li className={classes.listStyle}><CheckIcon sx={{position: "relative", top: " 5px" }}/><span style={{fontWeight:"400"}}> Taxes and Tolls</span></li>
       <li className={classes.listStyle}><CheckIcon sx={{position: "relative", top: " 5px" }}/><span style={{fontWeight:"400"}}> Flight Monitoring</span></li>
       <li className={classes.listStyle}><CheckIcon sx={{position: "relative", top: " 5px" }}/><span style={{fontWeight:"400"}}> Taxes and Tolls</span></li>
       <li className={classes.listStyle}><CheckIcon sx={{position: "relative", top: " 5px" }}/><span style={{fontWeight:"400"}}> Free Amendments</span></li>
       <li className={classes.listStyle}><CheckIcon sx={{position: "relative", top: " 5px" }}/><span style={{fontWeight:"400"}}> Free Cancellations</span></li>
   
   </ul>
  </Box>
  </ThemeProvider>
  </>;
};

export default PriceIncludes;
