import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles, withStyles } from '@mui/styles';

import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  customButton: {
    backgroundColor: 'transparent',
    padding:"15px 20px",
    boxShadow:'none',
    border:'1.5px solid black',
    color:'black',
   '&:hover': {
    backgroundColor:'black ',
  color:'white'
  },
}
})

const theme = createTheme();

const HeroUi = () => {
  const classes = useStyles()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "520px" }}>
        {/* <CssBaseline /> */}
        <Grid item xs={12} sm={8} md={4} sx={{alignSelf: "center"}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
           
            <Typography variant="h4" gutterBottom component="div" sx={{fontWeight:'600',fontFamily:'Poppins,sans-serif',fontSize:'3.5rem',lineHeight:'1'}}>
            <Typography variant="h6" gutterBottom component="div" sx={{fontFamily:'Poppins,sans-serif'}}>
            The Best way to get
            </Typography>
                Wherever you're going 
            </Typography>
          <Button className={classes.customButton} variant="contained" sx={{width:'50%',mt:1}} >Book Your Cab </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: "url(Cab.png)",
            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

      </Grid>
    </ThemeProvider>
  );
};

export default HeroUi;
