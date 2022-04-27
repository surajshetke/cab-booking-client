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
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const useStyles = makeStyles({
  customFont: {
    fontFamily: "Poppins,sans-serif",
    fontWeight: "500",
    // marginTop: "50px",
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

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ backgroundColor: "#1D1D1B" }}>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            spacing={5}
            alignItems="center"
          >
            <Grid item xs={4}>
              <Typography
                className={classes.customFont}
                variant="h6"
                color="white"
              >
                About Rental Cab
              </Typography>
              <Divider
                light
                sx={{
                  height: "1px",
                  backgroundColor: "#727272",
                  width: "100%",
                  my: 2,
                }}
              />

              <Typography
                className={classes.customBodyBlack}
                variant="body1"
                color="body1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                modi adipisci vitae earum dolorum quae?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                className={classes.customFont}
                variant="h6"
                color="white"
              >
                Footer
              </Typography>
              <Divider
                light
                sx={{
                  height: "1px",
                  backgroundColor: "#727272",
                  width: "100%",
                  my: 2,
                }}
              />

              <Typography
                className={classes.customBodyBlack}
                variant="body1"
                color="body1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                modi adipisci vitae earum dolorum quae?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                className={classes.customFont}
                variant="h6"
                color="white"
              >
                Contact
              </Typography>
              <Divider
                light
                sx={{
                  height: "1px",
                  backgroundColor: "#727272",
                  width: "100%",
                  my: 2,
                }}
              />

              <Typography
                className={classes.customBodyBlack}
                variant="body1"
                color="body1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                modi adipisci vitae earum dolorum quae?
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
