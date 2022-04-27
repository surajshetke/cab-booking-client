import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles, withStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";



import ListServices from "./ListServices";

const useStyles = makeStyles({
  customFont: {
    fontFamily: "Poppins,sans-serif",
    fontWeight: "600",
    marginTop: "50px",
  },
  customBody: {
    fontFamily: "Poppins,sans-serif",
    fontWeight: "400",
    color: "#7a7a7a",
  },
  customBodyBlack: {
    fontFamily: "Poppins,sans-serif",
    fontWeight: "400",
    color: "#d8d8d8",
    
  },
  customButton: {
    backgroundColor: "black",
    padding: "15px 34px",
    // marginTop:'-1px',
    color: "white",
    marginTop: "20px",
    margin: "0 auto",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#3d3d3d ",
      color: "white",
    },
  },
});

interface IServicesProps {}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid sx={{backgroundColor: "#000" }}>
        <Container maxWidth="md" sx={{paddingTop:'10px'}}>
          <Typography
            className={classes.customFont}
            sx={{color:'#fff' }}
            align="center"
            variant="h3"
          >
            Download  {<br/>}
            Rental Cab APP          
            </Typography>
          {/* <ListServices/> */}

          <Grid container sx={{ alignItems: "center", marginTop: "40px" }}>
            <Grid item xs={6}>
            
                <Typography
                  className={classes.customFont}
                  align="left"
                  variant="h5"
                  color="white"
                >
                  Download the Rental Cab App Free !
                  Get Exciting New Offer
                </Typography>

                <Typography
                  className={classes.customBodyBlack}
                  sx={{ mt: 1}}
                  align="left"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam tempore nulla veniam. Molestias, iure.
                </Typography>
                <Box sx={{display: "flex"}}>
                    <img src="apple.png" style={{width:'160px',margin:'10px 10px 10px 0px'}}></img>
                    <img src="Gp.png" style={{width:'160px',margin:'10px'}}></img>
                </Box>
              </Grid>
            <Grid item xs={6} sx={{ width: "100%" ,display:'flex',justifyContent: 'right'}}>
              <img src="App.png" width="50%"></img>
            </Grid>
          </Grid>
          {/* Row 2 */}
        </Container>
      </Grid>
    </>
  );
};

export default Services;
