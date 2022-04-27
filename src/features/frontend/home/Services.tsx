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
    marginTop: "10px",
  },
  customBody: {
    fontFamily: "Poppins,sans-serif",
    fontWeight: "400",
    color: "#7a7a7a",
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
      <Grid>
        <Container>
          <Typography
            className={classes.customFont}
            sx={{ mt: 1 }}
            align="center"
            variant="h3"
          >
            Services We Offer
          </Typography>
          {/* <ListServices/> */}

          <Grid container sx={{ alignItems: "center", marginTop: "40px" }}>
            <Grid item xs={6}>
              <Grid item xs={8}>
                <Typography
                  className={classes.customFont}
                  align="left"
                  variant="h4"
                >
                  Outstation Rides
                </Typography>
                <Typography sx={{ mt: 1 }} align="left" variant="h6">
                  Plan your outstation journey anywhere across 7000+
                  destinations.
                </Typography>

                <Typography
                  className={classes.customBody}
                  sx={{ mt: 1 }}
                  align="left"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam tempore nulla veniam. Molestias, iure.
                </Typography>
                <Button className={classes.customButton} variant="contained">
                  Book Ride Now
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={6} sx={{ width: "100%" }}>
              <img src="Outstation.png" width="100%"></img>
            </Grid>
          </Grid>
          {/* Row 2 */}
          <Grid container sx={{ alignItems: "center", marginTop: "40px" }}>
            <Grid item xs={7} sx={{ width: "100%" }}>
              <img src="City.png" width="100%"></img>
            </Grid>
            <Grid item xs={5}>
              <Grid item xs={9} sx={{float:'right'}}>
                <Typography
                  className={classes.customFont}
                  align="left"
                  variant="h4"
                >
                  City Rides
                </Typography>
                <Typography sx={{ mt: 1 }} align="left" variant="h6">
                  Plan your outstation journey anywhere across 7000+
                  destinations.
                </Typography>

                <Typography
                  className={classes.customBody}
                  sx={{ mt: 1 }}
                  align="left"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam tempore nulla veniam. Molestias, iure.
                </Typography>
                <Button className={classes.customButton} variant="contained">
                  Book Ride Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* Row 3 */}
          <Grid container sx={{ alignItems: "center", marginTop: "40px" }}>
            <Grid item xs={5}>
              <Grid item xs={9}>
                <Typography
                  className={classes.customFont}
                  align="left"
                  variant="h4"
                >
                  Rental Rides
                </Typography>
                <Typography sx={{ mt: 1 }} align="left" variant="h6">
                  Plan your outstation journey anywhere across 7000+
                  destinations.
                </Typography>

                <Typography
                  className={classes.customBody}
                  sx={{ mt: 1 }}
                  align="left"
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam tempore nulla veniam. Molestias, iure.
                </Typography>
                <Button className={classes.customButton} variant="contained">
                  Book Ride Now
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={7} sx={{ width: "100%" }}>
              <img src="Rental.png" width="100%"></img>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Services;
