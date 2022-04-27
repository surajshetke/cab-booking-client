import * as React from "react";
import { makeStyles, withStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
});

const useStyles = makeStyles({
  customButton: {
    backgroundColor: "black",
    padding: "8px 15px",
    // marginTop: "-1px",
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

export default useStyles;