import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Divider } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Person from "@mui/icons-material/Person";
import Luggage from "@mui/icons-material/Luggage";
import BackpackIcon from "@mui/icons-material/Backpack";
import ACIcon from "@mui/icons-material/AcUnit"

import { endpoints } from "../../../api";

import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Poppins,sans-serif",
    h6: { fontWeight: "normal" },
  },
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
interface FeaturedPostProps {
  post: {
    status: string;
    avatar: string;
    ac: number;
    rate: number;
    seats: number;
    rtoNumber: string;
    type: string;
  };
}

export default function CarDetails(props: FeaturedPostProps) {
  const classes = useStyles();
  const { post } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid item xs={12} md={12} sx={{ marginBottom: "20px" }}>
          {/* <CardActionArea component="a" href="#"> */}
          <Card
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box sx={{ flex: 1, padding: "16px" }}>
              <Box>
                <Grid sx={{ display: "flex" }}>
                  <Typography
                    component="div"
                    sx={{
                      typography: { lg: "body1", sm: "body1", xs: "body2" },
                    }}
                  >
                    {post.type}
                  </Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ margin: "0 10px" }}
                  />
                  <Typography
                    component="div"
                    sx={{
                      typography: { lg: "body1", sm: "body1", xs: "body2" },
                    }}
                  >
                    Standard Service
                  </Typography>
                </Grid>
                <Divider sx={{ margin: "10px 0" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { lg: "center", sm: "center" },
                    flexDirection: { xs: "column", sm: "row", lg: "row" },
                  }}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 180,
                        height:90,
                        objectFit:"cover",
                        padding: "25px 0",
                      }}
                      image={`${endpoints.serverURL}/${post?.avatar}`}
                      // alt={post}
                    />
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Typography variant="subtitle1" paragraph>
                        Supplier Rating
                      </Typography>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="body1">
                      Passengers {post.seats}
                      <Person sx={{ position: "relative", top: " 5px" }} />
                    </Typography>
                    <Typography variant="body1">
                      medium 2
                      <Luggage sx={{ position: "relative", top: " 5px" }} />
                    </Typography>
                    <Typography variant="body1">
                      Small 3
                      <BackpackIcon
                        sx={{ position: "relative", top: " 5px" }}
                      />
                    </Typography>
                    <Typography variant="body1">
                      {post.ac?"AC":"Non AC"}
                      <ACIcon
                        sx={{ position: "relative", top: " 5px" }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", lg: "column", md: "column" },
                backgroundColor: "#F8F8F8",
              }}
            >
              <Box>
                <Typography variant="body1">Free Cancellation 24h</Typography>

                <Divider sx={{ margin: "10px 0" }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ align: { lg: "right", xs: "left" } }}
                >
                  INR {post?.rate} Per KM
                </Typography>
                <Typography
                  sx={{ margin: "10px 0", align: { lg: "right", xs: "left" } }}
                  variant="body1"
                >
                  One Way
                </Typography>
                <Button
                  sx={{ margin: "10px 0" }}
                  className={classes.customButton}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          </Card>
          {/* </CardActionArea> */}
        </Grid>
      </ThemeProvider>
    </>
  );
}
