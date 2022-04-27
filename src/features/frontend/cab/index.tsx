import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarDetails from "./CarDetails";
import TripDetails from "./TripDetails";
import FormHelperText from "@mui/material/FormHelperText";
import { makeStyles, withStyles } from "@mui/styles";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Box,
  MenuItem,
  TextField,
  FormControl,
  Typography,
  InputLabel,
  Button,
} from "@mui/material";
import PriceIncludes from "./PriceIncludes";
import CabService from "../../../services/CabService";

const useStyles = makeStyles({
  listStyle: {
    listStyle: "none",
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

const featuredPosts = {
  title: "Featured post",
  date: "Nov 12",
  description:
    "This is a wider card with supporting text below as a natural lead-in to additional content.",
  image: "CAR 1.png",
  imageLabel: "Image Text",
};

// const theme = createTheme();

const BookCab = () => {
  const classes = useStyles();
  const [rawCabList, setRawCabList] = React.useState([]);
  const [cabList, setCabList] = React.useState([]);
  React.useEffect(() => {
    CabService.getAllCab()
      .then((response) => {
        if (response?.data?.data) {
          setRawCabList(response?.data?.data);
          setCabList(response?.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterCabs = (e: any) => {
    const { name, value } = e.target;

    if (value == "all") {
      setCabList(rawCabList);
    } else {
      const filteredCabs = rawCabList.filter((cab) => 
      cab[name] == value);

      setCabList(filteredCabs);
    }
  };

  const sortCabs = (e: any) => {
    const { value: order } = e.target;
    const sortedCabs = [...rawCabList].sort((a: any, b: any) => {
      if (order == "asc") {
        return a.rate - b.rate;
      } else {
        return b.rate - a.rate;
      }
    });

    setCabList(sortedCabs);
  };

  const clearFilter = () => {
    setCabList(rawCabList);
  };

  return (
    <>
      <section style={{ padding: "50px 0" }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ marginBottom: "50px" }}>
            Transfer quotes from Pune to Pune Airport
          </Typography>

          <Grid container spacing={3} justifyContent="space-between">
            <Grid item md={4} xs={12}>
              <TripDetails />
              <PriceIncludes />
            </Grid>
            <Grid item md={8} xs={12}>
              <Box>
                <Grid
                  container
                  sx={{
                    margin: "10px 0",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    lg={3.8}
                    sm={3.8}
                    sx={{ marginRight: "10px", marginBottom: "10px" }}
                  >
                    <FormControl fullWidth className={classes.customInput}>
                      <InputLabel id="demo-simple-select-label">
                        Sort by Price
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        label="Sort by Price"
                        onChange={sortCabs}
                      >
                        <MenuItem value="asc">Ascending</MenuItem>
                        <MenuItem value="desc">Descending</MenuItem>
                      </Select>
                      <Typography variant="caption">Filter By Price</Typography>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={3.8}
                    sm={3.8}
                    sx={{ marginRight: "10px", marginBottom: "10px" }}
                  >
                    <FormControl fullWidth className={classes.customInput}>
                      <InputLabel id="demo-simple-select-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Type"
                        name="type"
                        onChange={filterCabs}
                      >
                        <MenuItem value="autorickshaw">Autorickshaw</MenuItem>
                        <MenuItem value="hatchback">Hatchback</MenuItem>
                        <MenuItem value="suv">SUV</MenuItem>
                        <MenuItem value="sedan">Sedan</MenuItem>
                        <MenuItem value="bus">Bus</MenuItem>
                        <MenuItem selected value="all">
                          All
                        </MenuItem>
                      </Select>
                      <Typography variant="caption">Filter By Type</Typography>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={3.8}
                    sm={3.8}
                    sx={{ marginRight: "10px", marginBottom: "10px" }}
                  >
                    <FormControl fullWidth className={classes.customInput}>
                      <InputLabel id="demo-simple-select-label">
                        Seats
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Seats"
                        name="seats"
                        onChange={filterCabs}
                      >
                        <MenuItem value={2}>2 Seats</MenuItem>
                        <MenuItem value={4}>4 Seats</MenuItem>
                        <MenuItem value={6}>6 Seats</MenuItem>
                        <MenuItem value={12}>12 Seats</MenuItem>
                        <MenuItem value={17}>17 Seats</MenuItem>
                        <MenuItem selected value="all">
                          All
                        </MenuItem>
                      </Select>
                      <Typography variant="caption">Filter By Seats</Typography>
                    </FormControl>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={3.8}
                    sm={3.8}
                    sx={{ marginRight: "10px", marginBottom: "10px" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={clearFilter}
                    >
                      Clear{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              {cabList?.length > 0 ? (
                Array.isArray(cabList) &&
                cabList.map((cab, i) => <CarDetails key={i} post={cab} />)
              ) : (
                <Typography> No cab available </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default BookCab;